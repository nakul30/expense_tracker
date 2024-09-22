import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeExpense } from '../store/expenseSlice'; // Assuming you have a removeExpense action
import { useCopilotAction, useCopilotReadable } from '@copilotkit/react-core';


const ExpenseList = () => {
  const expenses = useSelector((state) => state.expenses.expenses);
  const dispatch = useDispatch();

  useCopilotReadable({
    description: "This is a list of all the expenses",
    value: expenses,
  });
  
  useCopilotAction({
    name: "Delete Expense",
    description: "This action will delete an expense from the list",
    parameters: [
      {
        name: "id",
        description: "ID of the expense to delete",
        type: "number",
        required: true,
      },
    ],
    handler: (collectedData) => {
      dispatch(removeExpense(collectedData.id));
    },
    render : "Processing..."
  });

  const handleDelete = (id) => {
    dispatch(removeExpense(id)); 
  };

  return (
    <ul className="space-y-2">
      {expenses.length === 0 ? (
        <li className="text-center text-gray-500">No expenses added yet.</li>
      ) : (
        expenses.map((expense) => (
          <li key={expense.id} className="flex justify-between items-center p-2 bg-gray-100 rounded-md shadow-sm">
            <span className='text-teal-700'> {expense.id}</span>
            <span className="text-teal-700">{expense.description}</span>
            <span className="text-teal-600 font-semibold">Rs. {expense.amount.toFixed(2)}</span>
            <button
              onClick={() => handleDelete(expense.id)}
              className="text-red-600 hover:text-red-800 transition duration-200"
              aria-label={`Delete ${expense.description}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </li>
        ))
      )}
    </ul>
  );
};

export default ExpenseList;
