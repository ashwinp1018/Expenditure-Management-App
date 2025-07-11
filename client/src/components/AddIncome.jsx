import React, { useState } from "react";
import { Plus, CheckCircle } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const incomeCategories = ["Salary", "Freelance", "Investments", "Business", "Other"];

const AddIncome = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !category || !amount) {
      toast.error("Please fill all fields");
      return;
    }

    // Simulate saving to backend
    console.log({ name, category, amount });

    toast.success("Income Added ✅");

    // Reset form
    setName("");
    setCategory("");
    setAmount("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <Toaster position="top-center" />
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8 space-y-6 border border-gray-200"
      >
        <h2 className="text-2xl font-semibold text-center text-blue-700">Add New Income</h2>

        {/* Income Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Income Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            placeholder="e.g. Freelance project"
          />
        </div>

        {/* Income Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Income Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          >
            <option value="">Select Category</option>
            {incomeCategories.map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Income Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Amount (₹)</label>
          <input
            type="number"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            placeholder="e.g. 5000"
          />
        </div>

        {/* Add Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-lg py-2 flex justify-center items-center gap-2 hover:bg-blue-700 active:scale-95 transition"
        >
          <Plus className="w-5 h-5" />
          Add Income
        </button>
      </form>
    </div>
  );
};

export default AddIncome;
