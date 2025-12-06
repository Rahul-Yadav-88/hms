import React from 'react';
import { useParams } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';

const StudentProfile = () => {
  const { id } = useParams();
  
  return (
    <DashboardLayout title="Student Profile">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-bold mb-4">Student Details - {id}</h3>
        <p className="text-gray-600">Student profile page under development...</p>
      </div>
    </DashboardLayout>
  );
};

export default StudentProfile;