import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const categories = ['Food', 'Travel', 'Rent', 'Utilities', 'Entertainment', 'Other'];

const AddExpenditure = () => {
  const [formData, setFormData] = useState({ name: '', category: '' });

  // Load previous data from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem('expenses');
    if (!storedData) {
      localStorage.setItem('expenses', JSON.stringify([]));
    }
  }, []);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!formData.name || !formData.category) {
      toast.error('All fields are required');
      return;
    }

    const newExpense = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString()
    };

    const existing = JSON.parse(localStorage.getItem('expenses') || '[]');
    localStorage.setItem('expenses', JSON.stringify([newExpense, ...existing]));

    setFormData({ name: '', category: '' });
    toast.success('✔️ Expense Added');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <Toaster position="top-center" />

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl w-full max-w-md p-6 space-y-6"
      >
        <h2 className="text-xl font-semibold text-center text-gray-700">Add New Expense</h2>

        <div>
          <label className="block text-gray-600 mb-1">Expense Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Grocery Shopping"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded-lg transition"
        >
          <Plus className="w-5 h-5" />
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpenditure;
