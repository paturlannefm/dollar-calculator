import React from "react";

import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

interface DataItem {
  0: string;
  1: number;
}

interface Props {
  data: DataItem[];
}

function LineChart({ data }: Props) {
  const chartData = {
    labels: data.map((entry) => entry[0]),
    datasets: [
      {
        data: data.map((entry) => entry[1]),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        pointRadius: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
}

export default LineChart;
