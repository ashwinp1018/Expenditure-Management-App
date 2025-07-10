import React, { useEffect, useState } from 'react';

const TotalExpenditureCard = () => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAmount(17250); // mock data
    }, 500);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-200">
      <h2 className="text-3xl font-bold text-red-500">₹{amount}</h2>
      <p className="text-sm text-gray-600 mt-2">Total Expenditure This Month</p>
    </div>
  );
};

export default TotalExpenditureCard;
