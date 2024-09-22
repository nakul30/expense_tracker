// src/components/ExpenseList.js
import React from 'react';
import { useSelector } from 'react-redux';

const ExpenseList = () => {
  const expenses = useSelector((state) => state.expenses.expenses);
  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          {expense.description}: Rs. {expense.amount.toFixed(2)}
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
