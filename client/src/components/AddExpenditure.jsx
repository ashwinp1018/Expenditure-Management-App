import React, { useState } from "react";
import { Plus } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const categories = ["Food", "Travel", "Rent", "Utilities", "Entertainment", "Other"];

const AddExpenditure = () => {
  const [form, setForm] = useState({ name: "", category: "", amount: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.category || !form.amount) {
      toast.error("All fields are required");
      return;
    }

    console.log("Expense submitted:", form); // Replace with backend call
    toast.success("Expense Added ✅");
    setForm({ name: "", category: "", amount: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Toaster position="top-center" />
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-3xl p-12 w-full max-w-3xl space-y-8 border border-gray-200 hover:shadow-blue-100 transition-all duration-300"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700">Add New Expense</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Expense Name"
            className="col-span-1 w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="col-span-1 w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="Amount"
            className="col-span-1 sm:col-span-2 w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition"
        >
          <Plus className="w-6 h-6" />
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpenditure;
