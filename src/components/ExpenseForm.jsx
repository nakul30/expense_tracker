import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../store/expenseSlice';
import { useCopilotAction } from '@copilotkit/react-core';

const ExpenseForm = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  useCopilotAction({
    name: "Add Expense",
    description: "This action will add an expense to the list",
    parameters: [
      {
        name: "itemNameAi",
        description: "Name of the expense",
        type: "string",
        required: true,
      },
      {
        name: "amountAi",
        description: "Amount of the expense",
        type: "string",
        required: true,
      },
    ],
    handler: (collectedData) => {
      dispatch(addExpense({ description: collectedData.itemNameAi, amount: parseFloat(collectedData.amountAi), id: Date.now() }));
    },
    render : "Processing..."
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;
    dispatch(addExpense({ description, amount: parseFloat(amount), id: Date.now() }));
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-teal-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border border-teal-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
      <button
        type="submit"
        className="bg-teal-600 text-white rounded-md py-2 hover:bg-teal-500 transition duration-200"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
