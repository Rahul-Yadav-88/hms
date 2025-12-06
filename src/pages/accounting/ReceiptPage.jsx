import React from 'react';
import { useParams } from 'react-router-dom';

const ReceiptPage = () => {
  const { id } = useParams();
  
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Payment Receipt</h2>
        <p className="text-center text-gray-600">Receipt ID: {id}</p>
        <div className="mt-6 text-center">
          <div className="inline-block p-4 bg-gray-100 rounded">
            <p className="text-sm text-gray-600">QR Code will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPage;