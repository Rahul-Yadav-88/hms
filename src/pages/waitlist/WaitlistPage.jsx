import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { 
  Clock, User, ChevronUp, ChevronDown, Check, X, 
  AlertCircle, Settings, TrendingUp, Users, Calendar 
} from 'lucide-react';

const WaitlistPage = () => {
  const [autoAssignEnabled, setAutoAssignEnabled] = useState(true);

  const waitlistStudents = [
    {
      id: 1,
      name: 'Arjun Mehta',
      rollNo: 'CS2024015',
      course: 'B.Tech CS',
      position: 1,
      addedDate: '2025-01-10',
      priority: 'high',
      preferences: ['Block A', 'Ground Floor'],
      daysWaiting: 5
    },
    {
      id: 2,
      name: 'Kavya Sharma',
      rollNo: 'EC2024022',
      course: 'B.Tech EC',
      position: 2,
      addedDate: '2025-01-11',
      priority: 'normal',
      preferences: ['Block B', 'Any Floor'],
      daysWaiting: 4
    },
    {
      id: 3,
      name: 'Rohan Kapoor',
      rollNo: 'ME2024018',
      course: 'B.Tech ME',
      position: 3,
      addedDate: '2025-01-12',
      priority: 'normal',
      preferences: ['Block A', 'First Floor'],
      daysWaiting: 3
    },
    {
      id: 4,
      name: 'Ananya Iyer',
      rollNo: 'CS2024019',
      course: 'B.Tech CS',
      position: 4,
      addedDate: '2025-01-13',
      priority: 'low',
      preferences: ['Any Block', 'Any Floor'],
      daysWaiting: 2
    },
    {
      id: 5,
      name: 'Karan Singh',
      rollNo: 'EC2024025',
      course: 'B.Tech EC',
      position: 5,
      addedDate: '2025-01-14',
      priority: 'normal',
      preferences: ['Block B', 'Second Floor'],
      daysWaiting: 1
    },
  ];

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case 'high':
        return { bg: '#FEE2E2', color: '#991B1B', text: 'High Priority' };
      case 'normal':
        return { bg: '#FEF3C7', color: '#92400E', text: 'Normal' };
      case 'low':
        return { bg: '#E0E7FF', color: '#3730A3', text: 'Low Priority' };
      default:
        return { bg: '#F3F4F6', color: '#374151', text: 'Unknown' };
    }
  };

  return (
    <DashboardLayout title="Waitlist Management">
      {/* Stats Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '24px'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          padding: '20px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '12px'
          }}>
            <div style={{
              backgroundColor: '#DBEAFE',
              padding: '10px',
              borderRadius: '8px'
            }}>
              <Users style={{ color: '#1E40AF' }} size={24} />
            </div>
          </div>
          <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '4px' }}>
            Total in Queue
          </p>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#1F2937' }}>
            {waitlistStudents.length}
          </p>
        </div>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          padding: '20px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '12px'
          }}>
            <div style={{
              backgroundColor: '#FEE2E2',
              padding: '10px',
              borderRadius: '8px'
            }}>
              <AlertCircle style={{ color: '#DC2626' }} size={24} />
            </div>
          </div>
          <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '4px' }}>
            High Priority
          </p>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#DC2626' }}>
            {waitlistStudents.filter(s => s.priority === 'high').length}
          </p>
        </div>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          padding: '20px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '12px'
          }}>
            <div style={{
              backgroundColor: '#FEF3C7',
              padding: '10px',
              borderRadius: '8px'
            }}>
              <Clock style={{ color: '#D97706' }} size={24} />
            </div>
          </div>
          <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '4px' }}>
            Avg Wait Time
          </p>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#1F2937' }}>
            3.2 days
          </p>
        </div>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          padding: '20px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '12px'
          }}>
            <div style={{
              backgroundColor: autoAssignEnabled ? '#D1FAE5' : '#F3F4F6',
              padding: '10px',
              borderRadius: '8px'
            }}>
              <Settings style={{ color: autoAssignEnabled ? '#059669' : '#6B7280' }} size={24} />
            </div>
          </div>
          <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '4px' }}>
            Auto-Assign
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <p style={{ 
              fontSize: '20px', 
              fontWeight: 'bold', 
              color: autoAssignEnabled ? '#10B981' : '#6B7280' 
            }}>
              {autoAssignEnabled ? 'Enabled' : 'Disabled'}
            </p>
            <button
              onClick={() => setAutoAssignEnabled(!autoAssignEnabled)}
              style={{
                padding: '6px 12px',
                backgroundColor: autoAssignEnabled ? '#10B981' : '#6B7280',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Toggle
            </button>
          </div>
        </div>
      </div>

      {/* Waitlist Table */}
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
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1F2937' }}>
            Queue Position
          </h3>
          {autoAssignEnabled && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              backgroundColor: '#D1FAE5',
              borderRadius: '12px'
            }}>
              <TrendingUp size={16} style={{ color: '#059669' }} />
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#065F46' }}>
                Auto-assign active
              </span>
            </div>
          )}
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
                  padding: '16px 24px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6B7280',
                  textTransform: 'uppercase'
                }}>
                  Position
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: '16px 24px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6B7280',
                  textTransform: 'uppercase'
                }}>
                  Student
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: '16px 24px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6B7280',
                  textTransform: 'uppercase'
                }}>
                  Course
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: '16px 24px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6B7280',
                  textTransform: 'uppercase'
                }}>
                  Priority
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: '16px 24px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6B7280',
                  textTransform: 'uppercase'
                }}>
                  Preferences
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: '16px 24px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6B7280',
                  textTransform: 'uppercase'
                }}>
                  Wait Time
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: '16px 24px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6B7280',
                  textTransform: 'uppercase'
                }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {waitlistStudents.map((student, index) => {
                const priorityStyle = getPriorityStyle(student.priority);
                
                return (
                  <tr
                    key={student.id}
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
                          width: '40px',
                          height: '40px',
                          backgroundColor: index === 0 ? '#C9A24C' : '#E5E7EB',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 'bold',
                          fontSize: '18px',
                          color: index === 0 ? 'white' : '#6B7280'
                        }}>
                          #{student.position}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          {index < 3 && (
                            <button style={{
                              padding: '2px 6px',
                              backgroundColor: 'transparent',
                              border: '1px solid #D1D5DB',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: '10px'
                            }}>
                              <ChevronUp size={12} />
                            </button>
                          )}
                          {index > 0 && (
                            <button style={{
                              padding: '2px 6px',
                              backgroundColor: 'transparent',
                              border: '1px solid #D1D5DB',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: '10px'
                            }}>
                              <ChevronDown size={12} />
                            </button>
                          )}
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '16px 24px' }}>
                      <div>
                        <p style={{
                          fontWeight: '600',
                          color: '#1F2937',
                          marginBottom: '2px'
                        }}>
                          {student.name}
                        </p>
                        <p style={{
                          fontSize: '13px',
                          color: '#6B7280'
                        }}>
                          {student.rollNo}
                        </p>
                      </div>
                    </td>
                    <td style={{ padding: '16px 24px', color: '#6B7280' }}>
                      {student.course}
                    </td>
                    <td style={{ padding: '16px 24px' }}>
                      <span style={{
                        padding: '6px 12px',
                        backgroundColor: priorityStyle.bg,
                        color: priorityStyle.color,
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '600'
                      }}>
                        {priorityStyle.text}
                      </span>
                    </td>
                    <td style={{ padding: '16px 24px' }}>
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '4px'
                      }}>
                        {student.preferences.map((pref, idx) => (
                          <span
                            key={idx}
                            style={{
                              padding: '4px 8px',
                              backgroundColor: '#E0E7FF',
                              color: '#3730A3',
                              borderRadius: '6px',
                              fontSize: '11px',
                              fontWeight: '500'
                            }}
                          >
                            {pref}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td style={{ padding: '16px 24px' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: '#6B7280'
                      }}>
                        <Clock size={14} />
                        <span style={{ fontSize: '14px' }}>
                          {student.daysWaiting} {student.daysWaiting === 1 ? 'day' : 'days'}
                        </span>
                      </div>
                    </td>
                    <td style={{ padding: '16px 24px' }}>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <button style={{
                          padding: '8px',
                          backgroundColor: '#D1FAE5',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center'
                        }} title="Assign Room">
                          <Check size={16} style={{ color: '#059669' }} />
                        </button>
                        <button style={{
                          padding: '8px',
                          backgroundColor: '#FEE2E2',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center'
                        }} title="Remove from Queue">
                          <X size={16} style={{ color: '#DC2626' }} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WaitlistPage;