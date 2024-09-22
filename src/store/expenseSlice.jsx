
import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    expenses: []
};
let nextId =  1;
const expenseSlice = createSlice({
    name: "expense",
    initialState,
    reducers: {
        addExpense: (state, action) => {
            // Use the current value of nextId and increment it
            const newExpense = { ...action.payload, id: nextId++ };
            state.expenses.push(newExpense);
        },
        setExpenses: (state, action) => {
            state.expenses = action.payload;
        },
        removeExpense: (state, action) => {
            state.expenses = state.expenses.filter(expense => expense.id !== action.payload);
        }
    }
});

export const { addExpense, setExpenses, removeExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
