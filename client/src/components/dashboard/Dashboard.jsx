import React from 'react';
import TotalExpenditureCard from './TotalExpenditureCard';
import TotalIncomeCard from './TotalIncomeCard';
import ExpenditurePieChart from './ExpenditurePieChart';
import RecentTransactions from './RecentTransactions';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6">

        {/* Left Column: Totals */}
        <div className="flex flex-col gap-6 lg:col-span-1">
          <TotalExpenditureCard />
          <TotalIncomeCard />
        </div>

        {/* Center Column: Pie Chart */}
        <div className="lg:col-span-3">
          <ExpenditurePieChart />
        </div>

        {/* Right Column: Transactions */}
        <div className="lg:col-span-1">
          <RecentTransactions />
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
