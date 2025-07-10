import React from 'react';
import TotalExpenditureCard from './components/dashboard/TotalExpenditureCard';
import TotalIncomeCard from './components/dashboard/TotalIncomeCard';
import ExpenditurePieChart from './components/dashboard/ExpenditurePieChart';
import RecentTransactions from './components/dashboard/RecentTransactions';

const Dashboard = () => {
  return (
    <div className="w-full p-4 sm:p-8 flex flex-col lg:flex-row gap-6">
      
      {/* Left Side: Totals */}
      <div className="flex flex-col gap-4 w-full lg:w-1/5">
        <TotalExpenditureCard />
        <TotalIncomeCard />
      </div>

      {/* Center: Pie Chart */}
      <div className="w-full lg:w-3/5">
        <ExpenditurePieChart />
      </div>

      {/* Right: Recent Transactions */}
      <div className="w-full lg:w-1/4">
        <RecentTransactions />
      </div>
    </div>
  );
};

export default Dashboard;
