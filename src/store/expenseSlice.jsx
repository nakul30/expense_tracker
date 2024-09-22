import { createSlice  } from "@reduxjs/toolkit";
import { useCopilotReadable } from "@copilotkit/react-core";
const expenseSlice = createSlice({
    name: "expense",
    initialState:{
        expenses: []
    },
    reducers: {
        addExpense: (state, action) => {
            state.expenses.push(action.payload);
        },
        setExpenses: (state, action) => {
            state.expenses = action.payload;
        }
    }
});

export const { addExpense, setExpenses } = expenseSlice.actions;
export default expenseSlice.reducer;
