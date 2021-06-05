import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Doughnut, Bar } from 'react-chartjs-2';

import { categories } from '../utils/test-data';

const Dashboard = () => {
  const [chartType, setChartType] = useState('doughnut');
  const [period, setPeriod] = useState('day');

  const data = {
    labels: categories,
    datasets: [{
      label: 'My First Dataset',
      data: [40, 20, 10, 30],
      backgroundColor: [
        'red',
        'blue',
        'yellow',
        'green',
      ],
      hoverOffset: 4,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    radius: '100%',
    layout: {
      padding: 20,
    },
    plugins: {
      legend: {
        position: 'right',
        align: 'start',
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

  const periodView = [
    { label: 'Today', value: 'day', type: 'doughnut' },
    { label: 'This week', value: 'week', type: 'bar' },
    { label: 'This month', value: 'month', type: 'bar' },
    { label: 'This year', value: 'year', type: 'bar' },
  ];

  const changePeriod = (periodItem: any) => {
    setChartType(periodItem.type);
    setPeriod(periodItem.value);
  };

  console.log({
    chartType,
    period,
  });

  return (
    <Container className="page-dashboard">

      <div className="dashboard-header">
        <h1>{`Expense of this ${period}`}</h1>

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
        {chartType === 'doughnut'
        && (
        <Doughnut
          type
          data={data}
          options={options}
          width={200}
          height={200}
        />
        )}

        {chartType === 'bar'
        && (
          <Bar
            type
            data={data}
            options={options}
            width={200}
            height={200}
          />
        )}
      </div>

      <div className="table-wrapper">
        <Table responsive>
          <thead>
            <tr>
              <th>Date</th>
              {categories.map((category: string, idx: number) => (
                <th key={`col-header-${category}-${idx}`}>
                  {category}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Test</td>
              {categories.map((category: string, idx: number) => (
                <td key={`cell-${category}-${idx}`}>
                  Table cell
                </td>
              ))}
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Dashboard;
