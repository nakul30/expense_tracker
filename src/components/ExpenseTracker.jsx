import React from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

const ExpenseTracker = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
      <h1 className="text-2xl font-bold text-center text-teal-700 mb-4">Expense Tracker</h1>
      <ExpenseForm />
      <div className="mt-6 border-t border-teal-200 pt-4">
        <h2 className="text-xl font-semibold text-teal-700">Expenses</h2>
        <ExpenseList />
      </div>
    </div>
  );
};

export default ExpenseTracker;
