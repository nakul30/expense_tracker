// src/components/ExpenseTracker.js
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

const ExpenseTracker = () => {

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm  />
      <ExpenseList />
    </div>
  );
};

export default ExpenseTracker;
