// src/Dashboard.js
import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  // Prepare data for the charts
  const expenses = useSelector((state) => state.expenses.expenses);
  if (!expenses || expenses.length === 0) {
    return <p>No expenses to display.</p>;
  }

  const expenseNames = expenses.map((expense) => expense.description);
  const amounts = expenses.map((expense) => expense.amount);

  const data = {
    labels: expenseNames,
    datasets: [
      {
        label: "Expense Amount",
        data: amounts,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: expenseNames,
    datasets: [
      {
        data: amounts,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center w-full justify-center">
      <h2 className="text-xl font-bold mb-4">Expense Dashboard</h2>
      <div style={{ width: "80%", height: "400px" }} className="mb-4 flex justify-center">
        <Bar data={data} />
      </div>
      <div
        style={{ width: "80%", height: "400px" }}
        className="flex flex-col items-center"
      >
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default Dashboard;
