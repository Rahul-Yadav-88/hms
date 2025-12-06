import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { DollarSign, Receipt, TrendingUp, TrendingDown } from 'lucide-react';

const AccountantDashboard = () => {
  return (
    <DashboardLayout title="Accountant Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="bg-green-500 p-3 rounded-lg inline-block mb-3">
            <DollarSign className="text-white" size={24} />
          </div>
          <h3 className="text-gray-600 text-sm mb-1">Total Revenue</h3>
          <p className="text-3xl font-bold text-gray-800">₹24.5L</p>
          <span className="text-sm text-green-600">+15% from last month</span>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="bg-yellow-500 p-3 rounded-lg inline-block mb-3">
            <Receipt className="text-white" size={24} />
          </div>
          <h3 className="text-gray-600 text-sm mb-1">Pending Invoices</h3>
          <p className="text-3xl font-bold text-gray-800">47</p>
          <span className="text-sm text-yellow-600">Worth ₹2.4L</span>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="bg-blue-500 p-3 rounded-lg inline-block mb-3">
            <TrendingUp className="text-white" size={24} />
          </div>
          <h3 className="text-gray-600 text-sm mb-1">Collected This Month</h3>
          <p className="text-3xl font-bold text-gray-800">₹18.2L</p>
          <span className="text-sm text-blue-600">74% collection rate</span>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="bg-red-500 p-3 rounded-lg inline-block mb-3">
            <TrendingDown className="text-white" size={24} />
          </div>
          <h3 className="text-gray-600 text-sm mb-1">Overdue</h3>
          <p className="text-3xl font-bold text-gray-800">₹1.8L</p>
          <span className="text-sm text-red-600">23 students</span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Transactions</h3>
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 text-sm font-semibold text-gray-600">Date</th>
              <th className="text-left py-3 text-sm font-semibold text-gray-600">Student</th>
              <th className="text-left py-3 text-sm font-semibold text-gray-600">Amount</th>
              <th className="text-left py-3 text-sm font-semibold text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 text-sm">Dec 5, 2025</td>
              <td className="py-3 text-sm">Rahul Sharma</td>
              <td className="py-3 text-sm font-semibold">₹25,000</td>
              <td className="py-3"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">Paid</span></td>
            </tr>
            <tr className="border-b">
              <td className="py-3 text-sm">Dec 4, 2025</td>
              <td className="py-3 text-sm">Priya Patel</td>
              <td className="py-3 text-sm font-semibold">₹30,000</td>
              <td className="py-3"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">Paid</span></td>
            </tr>
            <tr className="border-b">
              <td className="py-3 text-sm">Dec 3, 2025</td>
              <td className="py-3 text-sm">Amit Kumar</td>
              <td className="py-3 text-sm font-semibold">₹22,000</td>
              <td className="py-3"><span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">Pending</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default AccountantDashboard;