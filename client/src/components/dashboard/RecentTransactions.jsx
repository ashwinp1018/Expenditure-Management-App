import React from 'react';

const RecentTransactions = () => {
  const transactions = [
    { id: 1, name: 'Grocery Shopping', amount: -1500, date: '2025-07-01' },
    { id: 2, name: 'Salary', amount: 20000, date: '2025-07-01' },
    { id: 3, name: 'Metro Recharge', amount: -200, date: '2025-07-02' },
    { id: 4, name: 'Netflix', amount: -500, date: '2025-07-03' },
    { id: 5, name: 'Freelance Work', amount: 5000, date: '2025-07-04' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-full overflow-y-auto">
      <h2 className="text-lg font-semibold mb-2 border-b pb-2">Recent Transactions</h2>
      {transactions.map((tx) => (
        <div key={tx.id} className="mb-2 pb-2 border-b">
          <div className="flex justify-between">
            <span className="font-semibold">{tx.name}</span>
            <span
              className={
                tx.amount < 0 ? 'text-red-500 font-semibold' : 'text-green-500 font-semibold'
              }
            >
              {tx.amount < 0 ? '-' : '+'}₹{Math.abs(tx.amount)}
            </span>
          </div>
          <div className="text-sm text-gray-500">{tx.date}</div>
        </div>
      ))}
    </div>
  );
};

export default RecentTransactions;
