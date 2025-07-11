import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const IncomePieChart = () => {
  const data = {
    labels: ['Freelance', 'Investments', 'Other', 'Salary'],
    datasets: [
      {
        data: [5000, 1200, 800, 20000],
        backgroundColor: ['#3b82f6', '#facc15', '#fb923c', '#10b981'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 12,
          padding: 20,
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-[350px] flex flex-col">
      <h2 className="text-center text-lg font-semibold mb-4">Income Breakdown</h2>
      <div className="flex-grow">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default IncomePieChart;
