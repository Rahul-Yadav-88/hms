import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-red-900/20 p-4 rounded-full">
            <ShieldAlert className="w-12 h-12 text-red-400" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-white mb-3">Access Denied</h1>
        <p className="text-gray-400 mb-6">
          You don't have permission to access this page. Please contact your administrator if you believe this is an error.
        </p>
        <div className="space-y-3">
          <Link
            to="/"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition"
          >
            Go to Dashboard
          </Link>
          <Link
            to="/login"
            className="block w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 rounded-lg transition"
          >
            Switch Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;