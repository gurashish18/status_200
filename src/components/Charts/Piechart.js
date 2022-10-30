import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Piechart({ chartData }) {
  const options = {
    backgroundColor: [
      "rgba(255, 99, 132, 0.8)",
      "rgba(255, 159, 64, 0.8)",
      "rgba(255, 205, 86, 0.8)",
      "rgba(75, 192, 192, 0.8)",
      "rgba(54, 162, 235, 0.8)",
      "rgba(153, 102, 255, 0.8)",
      "rgba(201, 203, 207, 0.8)",
    ],
    borderColor: [
      "rgb(255, 99, 132)",
      "rgb(255, 159, 64)",
      "rgb(255, 205, 86)",
      "rgb(75, 192, 192)",
      "rgb(54, 162, 235)",
      "rgb(153, 102, 255)",
      "rgb(201, 203, 207)",
    ],
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return <Pie data={chartData} options={options} />;
}

export default Piechart;
