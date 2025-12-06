import React from 'react';

const ParentPortal = () => {
  return (
    <div className="min-h-screen bg-[#FBF5EB] flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-[#C9A24C] mb-6">
          Parent Portal
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Enter your magic link or login credentials
        </p>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg mb-3"
        />
        <button className="w-full py-3 bg-[#C9A24C] text-white rounded-lg hover:bg-[#A88840]">
          Send Magic Link
        </button>
      </div>
    </div>
  );
};

export default ParentPortal;