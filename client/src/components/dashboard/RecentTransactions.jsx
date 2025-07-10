import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

const mockTransactions = [
  { title: 'Grocery Shopping', date: '2025-07-01', amount: -1500, type: 'expense' },
  { title: 'Salary', date: '2025-07-01', amount: 20000, type: 'income' },
  { title: 'Metro Recharge', date: '2025-07-02', amount: -200, type: 'expense' },
  { title: 'Netflix', date: '2025-07-03', amount: -500, type: 'expense' },
  { title: 'Freelance Work', date: '2025-07-04', amount: 5000, type: 'income' }
];

const RecentTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTransactions(mockTransactions);
    }, 500);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-200 max-h-[400px] overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
      <ul className="space-y-4">
        {transactions.map((txn, index) => (
          <li key={index} className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="font-medium">{txn.title}</p>
              <p className="text-sm text-gray-500">{txn.date}</p>
            </div>
            <span
              className={clsx(
                'font-semibold text-sm',
                txn.type === 'income' ? 'text-green-500' : 'text-red-500'
              )}
            >
              {txn.type === 'income' ? '+' : '-'}₹{Math.abs(txn.amount)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
