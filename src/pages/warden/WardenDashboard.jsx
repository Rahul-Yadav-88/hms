import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Users, BedDouble, UtensilsCrossed } from 'lucide-react';

const WardenDashboard = () => {
  return (
    <DashboardLayout title="Warden Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-500 p-3 rounded-lg">
              <Users className="text-white" size={24} />
            </div>
          </div>
          <h3 className="text-gray-600 text-sm mb-1">Students Under Care</h3>
          <p className="text-3xl font-bold text-gray-800">342</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-500 p-3 rounded-lg">
              <BedDouble className="text-white" size={24} />
            </div>
          </div>
          <h3 className="text-gray-600 text-sm mb-1">Rooms Occupied</h3>
          <p className="text-3xl font-bold text-gray-800">89%</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-500 p-3 rounded-lg">
              <UtensilsCrossed className="text-white" size={24} />
            </div>
          </div>
          <h3 className="text-gray-600 text-sm mb-1">Mess Attendance Today</h3>
          <p className="text-3xl font-bold text-gray-800">298</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Today's Tasks</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <input type="checkbox" className="w-5 h-5" />
            <span>Check room allocations for Block A</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <input type="checkbox" className="w-5 h-5" />
            <span>Review mess attendance reports</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <input type="checkbox" className="w-5 h-5" />
            <span>Send reminders for pending fees</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WardenDashboard;