import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

import { categories } from '../utils/test-data';

interface ExpenseProps {
  close: any;
}

const Expense = (props: ExpenseProps) => {
  const [formData, setFormData] = useState({
    category: '',
    date: new Date(),
    itemName: '',
    price: 0,
  });

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(false);
    } else {
      const currentData = JSON.parse(localStorage.getItem('data'));
      currentData.push(formData);
      localStorage.setItem('data', JSON.stringify(currentData));
      setValidated(true);
      props.close();
    }

  };

  const preprendZero = (myNumber: number) => {
    const res = myNumber < 10 ? `0${myNumber}` : myNumber;
    return res;
  };

  return (
    <Container className="page-expense">
      <h1>Add an Expense</h1>

      <Form noValidate validated={validated} onSubmit={handleSubmit} className={`expense-form ${validated ? 'was-validated' : 'needs-validation'}`}>

        <Form.Group controlId="validationCustom01">
          <Form.Control
            required
            type="date"
            placeholder="Date"
            defaultValue={`${new Date().getFullYear()}-${preprendZero(new Date().getMonth() + 1)}-${preprendZero(new Date().getDate())}`}
            onChange={(e: any) => setFormData({ ...formData, date: e.target.value })}
          />

        </Form.Group>

        <Form.Group controlId="validationCustom02">
          <Form.Control as="select">
            {categories.map((category: string) => (
              <option
                key={`cat-btn-${category}`}
                className="btn"
                onClick={() => setFormData({ ...formData, category })}
              >
                {category}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="validationCustom03">
          <Form.Control
            required
            type="text"
            placeholder="Expense Name"
            onChange={(e: any) => setFormData({ ...formData, itemName: e.target.value })}
            isValid={formData.itemName !== ''}
            isInvalid={formData.itemName === ''}
          />

          <Form.Control.Feedback type="invalid">
            Please provide a name.
          </Form.Control.Feedback>

        </Form.Group>

        <Form.Group controlId="validationCustom04">
          <Form.Control
            required
            type="number"
            placeholder="0.00 $"
            onChange={(e: any) => setFormData({ ...formData, price: e.target.value })}
            isValid={formData.price !== 0}
            isInvalid={formData.price <= 0 || /[a-zA-Z]/i.test(formData.price.toString()) || formData.price.toString() === ''}
          />

          <Form.Control.Feedback type="invalid">
            Please provide a valid price.
          </Form.Control.Feedback>

        </Form.Group>

        <button
          type="submit"
          className="btn btn-success btn-block"
        >
          Add
        </button>
      </Form>
    </Container>
  );
};

export default Expense;
