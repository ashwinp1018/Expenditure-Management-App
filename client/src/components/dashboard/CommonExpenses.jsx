import React from "react";

const CommonExpenses = () => {
  const common = [
    { name: "Food", amount: 250 },
    { name: "Rent", amount: 1000 },
    { name: "Transport", amount: 150 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-5 h-[180px] flex flex-col justify-between">
      <h2 className="text-lg font-semibold text-center border-b pb-2">Most Common Expenses</h2>
      <ul className="mt-2 space-y-1 text-sm">
        {common.map((item, idx) => (
          <li key={idx} className="flex justify-between text-gray-700">
            <span>{item.name}</span>
            <span className="font-semibold text-blue-600">₹{item.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommonExpenses;
