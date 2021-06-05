import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

import { categories } from '../utils/test-data';

const Expense = () => {
  const [formData, setFormData] = useState({
    category: '',
    date: new Date(),
    itemName: '',
    price: 0,
  });

  const submit = () => {
    console.log('submtting');
  };

  return (
    <Container className="page-expense">
      <h1>Add/ Update Expense</h1>

      <Form className="expense-form">
        <Form.Control
          type="date"
          onChange={(e: any) => setFormData({ ...formData, date: e.target.value })}
        />

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

        <Form.Control
          type="text"
          placeholder="Expense Name"
          onChange={(e: any) => setFormData({ ...formData, itemName: e.target.value })}
        />
        <Form.Control
          type="number"
          placeholder="0.00 $"
          onChange={(e: any) => setFormData({ ...formData, price: e.target.value })}
        />

        <button type="button" className="btn btn-success btn-block" onClick={() => submit()}>
          Add
        </button>
      </Form>
    </Container>
  );
};

export default Expense;
