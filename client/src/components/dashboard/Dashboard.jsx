import React from "react";
import TotalExpenditureCard from "./components/dashboard/TotalExpenditureCard";
import TotalIncomeCard from "./components/dashboard/TotalIncomeCard";
import ExpenditurePieChart from "./components/dashboard/ExpenditurePieChart";
import IncomePieChart from "./components/dashboard/IncomePieChart";
import RecentTransactions from "./components/dashboard/RecentTransactions";
import CommonExpenses from "./components/dashboard/CommonExpenses";

const Dashboard = () => {
  return (
    <div className="pt-28 px-4 max-w-7xl mx-auto">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Column */}
        <div className="space-y-4 col-span-1">
          <TotalExpenditureCard />
          <TotalIncomeCard />
          <CommonExpenses />
        </div>

        {/* Center Column */}
        <div className="col-span-1 lg:col-span-2 space-y-4">
          <ExpenditurePieChart />
          <IncomePieChart />
        </div>

        {/* Right Column */}
        <div className="col-span-1">
          <RecentTransactions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
