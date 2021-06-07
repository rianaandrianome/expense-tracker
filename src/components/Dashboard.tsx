import React, { useState, useEffect } from 'react';
import {
  Container, Table, Modal, Button,
} from 'react-bootstrap';
import { Doughnut, Bar } from 'react-chartjs-2';
import moment from 'moment';
import { useHistory } from 'react-router';

import { Expense } from './index';
import { periodView, categories, initialData } from '../utils/test-data';

const Dashboard = () => {
  const routerHistory = useHistory();
  const [chartType, setChartType] = useState('doughnut');
  const [period, setPeriod] = useState('day');
  const [userData, setUserData] = useState([]);
  const [dataDetailed, setDataDetailed] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const localData = localStorage.getItem('data');
    let all = [];

    if (localData === null) {
      localStorage.setItem('data', JSON.stringify(initialData));
      all = initialData;
    } else {
      all = JSON.parse(localStorage.getItem('data'));
    }

    all = filterByPeriod(period, all);
    setDataDetailed(all);

    const dataByCategory = [];

    const dataValues = [];

    categories.map((category: any) => {
      all.filter((a) => a.category === category).map((expense: any) => {
        dataByCategory[category] = dataByCategory[category]
          ? Number(dataByCategory[category]) + Number(expense.price)
          : Number(expense.price);

        return dataByCategory[category];
      });
      return dataByCategory;
    });

    categories.map((category: any, idx: number) => {
      dataValues[idx] = dataByCategory[category];
      return dataValues;
    });

    setUserData(dataValues);
  }, [period, show]);

  const filterByPeriod = (strPeriod: string, allData: any) => {
    let result = [];
    switch (strPeriod) {
      case 'day':
        result = allData.filter((a) => (new Date(a.date)).setHours(0, 0, 0, 0) === (new Date()).setHours(0, 0, 0, 0));
        break;
      case 'week':
        allData.map((expense:any) => {
          const expenseDate = moment(expense.date);
          const now = moment();
          if (now.isoWeek() === expenseDate.isoWeek()) {
            result.push(expense);
          }
          return result;
        });
        break;
      case 'month':
        result = allData.filter((a) => (new Date(a.date)).getMonth() === (new Date()).getMonth());
        break;
      case 'year':
        result = allData.filter((a) => (new Date(a.date)).getFullYear() === (new Date()).getFullYear());
        break;
      default:
        break;
    }
    return result;
  };

  const data = {
    labels: categories,
    datasets: [{
      label: `Data for ${(periodView.filter((a) => a.value === period))[0].label}`,
      data: userData,
      backgroundColor: [
        'red', // Food index 0
        'blue', // Bill index 1
        'yellow', // Transport index 2
        'green', // Shopping index 3
      ],
      hoverOffset: 4,
    }],
  };

  const optionsDoughnut = {
    responsive: true,
    maintainAspectRatio: true,
    cutout: '60%',
    radius: '100%',
    layout: {
      padding: 20,
    },
    plugins: {
      legend: {
        position: 'right',
        align: 'center',
        fullSize: true,
        labels: {
          padding: 20,
          boxWidth: 30,
          boxHeight: 20,
          font: {
            size: 14,
          },
        },
      },
    },
  };

  const optionsBar = {
    responsive: true,
    maintainAspectRatio: true,
    radius: '100%',
    layout: {
      padding: 20,
    },
    plugins: {
      legend: {
        align: 'center',
        fullSize: true,
        labels: {
          padding: 20,
          boxWidth: 30,
          boxHeight: 20,
          font: {
            size: 14,
          },
        },
      },
    },
  };

  const changePeriod = (periodItem: any) => {
    setChartType(periodItem.type);
    setPeriod(periodItem.value);
  };

  return (
    <Container className="page-dashboard">
      <div className="btn-add">
        <Button variant="secondary" onClick={handleShow}>
          Add Expense
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <Expense close={() => setShow(!show)} />
          </Modal.Body>
        </Modal>
      </div>
      <div className="dashboard-header">
        <h1>{`Expense for ${(periodView.filter((a) => a.value === period))[0].label}`}</h1>

        <div className="period-btn-wrapper">
          {periodView.map((periodItem: any) => (
            <button
              key={`period-btn-${periodItem.value}`}
              type="button"
              onClick={() => changePeriod(periodItem)}
              className="btn"
            >
              {periodItem.label}
            </button>
          ))}
        </div>
      </div>

      <div className="chart-wrapper">
        <div className="doughnut-wrapper chart-element">
          <Doughnut
            type
            data={data}
            options={optionsDoughnut}
            width={200}
            height={200}
          />
        </div>

        <div className="bar-wrapper chart-element">
          <Bar
            type
            data={data}
            options={optionsBar}
            width={200}
            height={200}
          />
        </div>
      </div>

      <div className="table-wrapper">
        <Table responsive>
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Expense</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {dataDetailed.length > 0 && dataDetailed.map((expense: any, idx: number) => (
              <tr key={`row-${expense.date}-${idx}`}>
                <td>
                  {expense.date.substring(0, 10)}
                </td>
                <td>
                  {expense.category}
                </td>
                <td>
                  {expense.itemName}
                </td>
                <td>
                  {`$ ${expense.price}`}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Dashboard;
