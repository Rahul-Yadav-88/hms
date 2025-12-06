import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { 
  Users, BedDouble, DollarSign, UtensilsCrossed, 
  TrendingUp, AlertCircle, CheckCircle, Clock 
} from 'lucide-react';

const AdminDashboard = () => {
  const kpiData = [
    {
      title: 'Total Students',
      value: '847',
      change: '+12%',
      icon: Users,
      color: '#3B82F6',
    },
    {
      title: 'Occupancy Rate',
      value: '92%',
      change: '+5%',
      icon: BedDouble,
      color: '#10B981',
    },
    {
      title: 'Pending Dues',
      value: '₹2.4L',
      change: '-8%',
      icon: DollarSign,
      color: '#F59E0B',
    },
    {
      title: 'Mess Count Today',
      value: '789',
      change: '+2%',
      icon: UtensilsCrossed,
      color: '#8B5CF6',
    },
  ];

  const recentActivity = [
    { type: 'allocation', student: 'Rahul Sharma', room: 'A-204', time: '2 hours ago', status: 'success' },
    { type: 'payment', student: 'Priya Patel', amount: '₹25,000', time: '3 hours ago', status: 'success' },
    { type: 'waitlist', student: 'Amit Kumar', position: '#12', time: '5 hours ago', status: 'pending' },
    { type: 'allocation', student: 'Sneha Reddy', room: 'B-105', time: '6 hours ago', status: 'success' },
  ];

  const quickActions = [
    { label: 'Allocate Bed', path: '/admin/allocation', icon: BedDouble, color: '#3B82F6' },
    { label: 'Create Invoice', path: '/accounting/invoices', icon: DollarSign, color: '#10B981' },
    { label: 'Import Students', path: '/admin/import', icon: Users, color: '#8B5CF6' },
    { label: 'View Waitlist', path: '/admin/waitlist', icon: Clock, color: '#F59E0B' },
  ];

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    padding: '24px',
    transition: 'box-shadow 0.2s'
  };

  return (
    <DashboardLayout title="Admin Dashboard">
      {/* KPI Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '24px',
        marginBottom: '32px'
      }}>
        {kpiData.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div key={idx} style={cardStyle}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px'
              }}>
                <div style={{
                  backgroundColor: kpi.color,
                  padding: '12px',
                  borderRadius: '8px'
                }}>
                  <Icon style={{ color: 'white' }} size={24} />
                </div>
                <span style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: kpi.change.startsWith('+') ? '#10B981' : '#EF4444'
                }}>
                  {kpi.change}
                </span>
              </div>
              <h3 style={{ color: '#6B7280', fontSize: '14px', marginBottom: '4px' }}>
                {kpi.title}
              </h3>
              <p style={{ fontSize: '30px', fontWeight: 'bold', color: '#1F2937' }}>
                {kpi.value}
              </p>
            </div>
          );
        })}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '24px',
        marginBottom: '24px'
      }}>
        {/* Quick Actions */}
        <div style={cardStyle}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#1F2937',
            marginBottom: '16px'
          }}>
            Quick Actions
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {quickActions.map((action, idx) => {
              const Icon = action.icon;
              return (
                <button
                  key={idx}
                  onClick={() => window.location.href = action.path}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid #E5E7EB',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = '#C9A24C';
                    e.target.style.backgroundColor = '#FBF5EB';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = '#E5E7EB';
                    e.target.style.backgroundColor = 'white';
                  }}
                >
                  <div style={{
                    backgroundColor: action.color,
                    padding: '8px',
                    borderRadius: '8px'
                  }}>
                    <Icon style={{ color: 'white' }} size={18} />
                  </div>
                  <span style={{ fontWeight: '500', color: '#374151' }}>
                    {action.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div style={cardStyle}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#1F2937',
            marginBottom: '16px'
          }}>
            Recent Activity
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {recentActivity.map((activity, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px',
                backgroundColor: '#F9FAFB',
                borderRadius: '8px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {activity.status === 'success' ? (
                    <CheckCircle style={{ color: '#10B981' }} size={20} />
                  ) : (
                    <Clock style={{ color: '#F59E0B' }} size={20} />
                  )}
                  <div>
                    <p style={{ fontWeight: '500', color: '#1F2937' }}>
                      {activity.student}
                    </p>
                    <p style={{ fontSize: '14px', color: '#6B7280' }}>
                      {activity.room && `Room: ${activity.room}`}
                      {activity.amount && `Payment: ${activity.amount}`}
                      {activity.position && `Waitlist: ${activity.position}`}
                    </p>
                  </div>
                </div>
                <span style={{ fontSize: '12px', color: '#9CA3AF' }}>
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div style={{
        backgroundColor: '#FEF3C7',
        border: '1px solid #FCD34D',
        borderRadius: '12px',
        padding: '16px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px'
      }}>
        <AlertCircle style={{ color: '#D97706', flexShrink: 0 }} size={20} />
        <div>
          <h4 style={{ fontWeight: '600', color: '#92400E', marginBottom: '4px' }}>
            Pending Actions
          </h4>
          <p style={{ fontSize: '14px', color: '#78350F' }}>
            You have 5 pending allocations and 12 students in the waitlist requiring attention.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;