import React from 'react';
import { useParams } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';

const FloorplanPage = () => {
  const { id } = useParams();
  
  return (
    <DashboardLayout title="Floorplan Editor">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <p className="text-gray-600">Floorplan editor for hostel {id} under development...</p>
      </div>
    </DashboardLayout>
  );
};

export default FloorplanPage;