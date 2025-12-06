import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { 
  Plus, UtensilsCrossed, Coffee, Sun, Sunset, Moon, 
  Users, CheckCircle, Clock, QrCode, Download, Calendar 
} from 'lucide-react';

const MessSessionsPage = () => {
  const [selectedDate, setSelectedDate] = useState('2025-01-15');

  const sessions = [
    {
      id: 1,
      name: 'Breakfast',
      icon: Coffee,
      time: '07:00 AM - 09:00 AM',
      status: 'completed',
      totalCapacity: 250,
      checkedIn: 198,
      color: '#F59E0B',
      bgColor: '#FEF3C7'
    },
    {
      id: 2,
      name: 'Lunch',
      icon: Sun,
      time: '12:00 PM - 02:00 PM',
      status: 'active',
      totalCapacity: 250,
      checkedIn: 187,
      color: '#10B981',
      bgColor: '#D1FAE5'
    },
    {
      id: 3,
      name: 'Snacks',
      icon: Sunset,
      time: '04:00 PM - 05:00 PM',
      status: 'upcoming',
      totalCapacity: 200,
      checkedIn: 0,
      color: '#F97316',
      bgColor: '#FFEDD5'
    },
    {
      id: 4,
      name: 'Dinner',
      icon: Moon,
      time: '07:00 PM - 09:00 PM',
      status: 'upcoming',
      totalCapacity: 250,
      checkedIn: 0,
      color: '#6366F1',
      bgColor: '#E0E7FF'
    },
  ];

  const recentCheckIns = [
    { id: 1, student: 'Rahul Sharma', rollNo: 'CS2024001', time: '12:45 PM', session: 'Lunch' },
    { id: 2, student: 'Priya Patel', rollNo: 'CS2024002', time: '12:43 PM', session: 'Lunch' },
    { id: 3, student: 'Amit Kumar', rollNo: 'ME2024001', time: '12:41 PM', session: 'Lunch' },
    { id: 4, student: 'Sneha Reddy', rollNo: 'EC2024001', time: '12:38 PM', session: 'Lunch' },
    { id: 5, student: 'Vikram Singh', rollNo: 'CS2024003', time: '12:35 PM', session: 'Lunch' },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'active':
        return { bg: '#D1FAE5', color: '#065F46', text: 'Active Now' };
      case 'completed':
        return { bg: '#E0E7FF', color: '#3730A3', text: 'Completed' };
      case 'upcoming':
        return { bg: '#FEF3C7', color: '#92400E', text: 'Upcoming' };
      default:
        return { bg: '#F3F4F6', color: '#374151', text: 'Unknown' };
    }
  };

  return (
    <DashboardLayout title="Mess Attendance">
      {/* Date Selector & Actions */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        padding: '20px 24px',
        marginBottom: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Calendar size={20} style={{ color: '#6B7280' }} />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            style={{
              padding: '8px 12px',
              border: '1px solid #D1D5DB',
              borderRadius: '8px',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 16px',
            backgroundColor: '#3B82F6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            <QrCode size={18} />
            Open Kiosk
          </button>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 16px',
            backgroundColor: '#10B981',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            <Download size={18} />
            Export Report
          </button>
        </div>
      </div>

      {/* Sessions Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        marginBottom: '24px'
      }}>
        {sessions.map((session) => {
          const Icon = session.icon;
          const statusStyle = getStatusStyle(session.status);
          const percentage = Math.round((session.checkedIn / session.totalCapacity) * 100);

          return (
            <div
              key={session.id}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                padding: '24px',
                transition: 'all 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px'
              }}>
                <div style={{
                  padding: '12px',
                  backgroundColor: session.bgColor,
                  borderRadius: '10px'
                }}>
                  <Icon size={24} style={{ color: session.color }} />
                </div>
                <span style={{
                  padding: '6px 12px',
                  backgroundColor: statusStyle.bg,
                  color: statusStyle.color,
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  {statusStyle.text}
                </span>
              </div>

              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#1F2937',
                marginBottom: '4px'
              }}>
                {session.name}
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#6B7280',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <Clock size={14} />
                {session.time}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '8px'
              }}>
                <span style={{ fontSize: '14px', color: '#6B7280' }}>
                  Attendance
                </span>
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#1F2937' }}>
                  {session.checkedIn} / {session.totalCapacity}
                </span>
              </div>

              {/* Progress Bar */}
              <div style={{
                width: '100%',
                height: '8px',
                backgroundColor: '#E5E7EB',
                borderRadius: '4px',
                overflow: 'hidden',
                marginBottom: '12px'
              }}>
                <div style={{
                  width: `${percentage}%`,
                  height: '100%',
                  backgroundColor: session.color,
                  transition: 'width 0.3s'
                }}></div>
              </div>

              <p style={{
                fontSize: '13px',
                color: '#9CA3AF',
                textAlign: 'center'
              }}>
                {percentage}% Capacity
              </p>
            </div>
          );
        })}
      </div>

      {/* Recent Check-ins */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid #E5E7EB',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#1F2937'
          }}>
            Recent Check-ins
          </h3>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 12px',
            backgroundColor: '#D1FAE5',
            borderRadius: '12px'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#10B981',
              borderRadius: '50%',
              animation: 'pulse 2s infinite'
            }}></div>
            <span style={{
              fontSize: '13px',
              fontWeight: '600',
              color: '#065F46'
            }}>
              Live Updates
            </span>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse'
          }}>
            <thead>
              <tr style={{ backgroundColor: '#F9FAFB' }}>
                <th style={{
                  textAlign: 'left',
                  padding: '12px 24px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6B7280',
                  textTransform: 'uppercase'
                }}>
                  Student
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: '12px 24px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6B7280',
                  textTransform: 'uppercase'
                }}>
                  Roll Number
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: '12px 24px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6B7280',
                  textTransform: 'uppercase'
                }}>
                  Session
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: '12px 24px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6B7280',
                  textTransform: 'uppercase'
                }}>
                  Time
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: '12px 24px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6B7280',
                  textTransform: 'uppercase'
                }}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {recentCheckIns.map((checkIn) => (
                <tr
                  key={checkIn.id}
                  style={{
                    borderBottom: '1px solid #E5E7EB',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        backgroundColor: '#C9A24C',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: '600',
                        fontSize: '14px'
                      }}>
                        {checkIn.student.charAt(0)}
                      </div>
                      <span style={{
                        fontWeight: '500',
                        color: '#1F2937'
                      }}>
                        {checkIn.student}
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px', color: '#6B7280' }}>
                    {checkIn.rollNo}
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <span style={{
                      padding: '4px 10px',
                      backgroundColor: '#DBEAFE',
                      color: '#1E40AF',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: '500'
                    }}>
                      {checkIn.session}
                    </span>
                  </td>
                  <td style={{ padding: '16px 24px', color: '#6B7280', fontSize: '14px' }}>
                    {checkIn.time}
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <CheckCircle size={16} style={{ color: '#10B981' }} />
                      <span style={{
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#065F46'
                      }}>
                        Checked In
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MessSessionsPage;