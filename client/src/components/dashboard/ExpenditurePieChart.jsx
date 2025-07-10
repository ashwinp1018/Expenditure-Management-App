import React, { useEffect, useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#34D399', '#F59E0B'];

const mockData = [
  { category: 'Rent', amount: 12000 },
  { category: 'Food', amount: 4500 },
  { category: 'Transport', amount: 2000 },
  { category: 'Subscriptions', amount: 1000 },
  { category: 'Misc', amount: 750 }
];

const ExpenditurePieChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData(mockData);
    }, 500);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-200 h-full">
      <h2 className="text-lg font-semibold mb-4">Expenditure Breakdown</h2>

      {Array.isArray(data) && data.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="amount"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-center text-gray-400">No data to display</p>
      )}
    </div>
  );
};

export default ExpenditurePieChart;
