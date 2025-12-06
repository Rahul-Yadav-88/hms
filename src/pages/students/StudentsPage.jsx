// ===== src/pages/students/StudentsPage.jsx =====
import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Search, Plus, User, Mail, Phone, MapPin, Edit, Trash2, Eye } from 'lucide-react';

const StudentsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const students = [
    { 
      id: 1, 
      name: 'Rahul Sharma', 
      rollNo: 'CS2024001', 
      email: 'rahul.sharma@college.edu',
      phone: '+91 98765 43210',
      room: 'A-101-2', 
      course: 'B.Tech CS',
      year: '2nd Year',
      status: 'Active',
      dues: '₹0'
    },
    { 
      id: 2, 
      name: 'Priya Patel', 
      rollNo: 'CS2024002', 
      email: 'priya.patel@college.edu',
      phone: '+91 98765 43211',
      room: 'B-205-1', 
      course: 'B.Tech CS',
      year: '2nd Year',
      status: 'Active',
      dues: '₹0'
    },
    { 
      id: 3, 
      name: 'Amit Kumar', 
      rollNo: 'ME2024001', 
      email: 'amit.kumar@college.edu',
      phone: '+91 98765 43212',
      room: 'A-103-4', 
      course: 'B.Tech ME',
      year: '2nd Year',
      status: 'Active',
      dues: '₹5,000'
    },
    { 
      id: 4, 
      name: 'Sneha Reddy', 
      rollNo: 'EC2024001', 
      email: 'sneha.reddy@college.edu',
      phone: '+91 98765 43213',
      room: 'B-201-3', 
      course: 'B.Tech EC',
      year: '2nd Year',
      status: 'Active',
      dues: '₹0'
    },
    { 
      id: 5, 
      name: 'Vikram Singh', 
      rollNo: 'CS2024003', 
      email: 'vikram.singh@college.edu',
      phone: '+91 98765 43214',
      room: 'A-102-1', 
      course: 'B.Tech CS',
      year: '1st Year',
      status: 'Active',
      dues: '₹2,500'
    },
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         student.rollNo.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || student.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <DashboardLayout title="Students Management">
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        {/* Header Section */}
        <div style={{
          padding: '24px',
          borderBottom: '1px solid #E5E7EB',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flex: 1,
            maxWidth: '600px'
          }}>
            <div style={{ position: 'relative', flex: 1 }}>
              <Search style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#9CA3AF'
              }} size={18} />
              <input
                type="text"
                placeholder="Search by name or roll number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  paddingLeft: '40px',
                  paddingRight: '16px',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  border: '1px solid #D1D5DB',
                  borderRadius: '8px',
                  fontSize: '14px'
                }}
              />
            </div>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              style={{
                padding: '10px 16px',
                border: '1px solid #D1D5DB',
                borderRadius: '8px',
                fontSize: '14px',
                backgroundColor: 'white',
                cursor: 'pointer'
              }}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            backgroundColor: '#C9A24C',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#A88840'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#C9A24C'}>
            <Plus size={18} />
            Add Student
          </button>
        </div>

        {/* Stats Bar */}
        <div style={{
          padding: '16px 24px',
          backgroundColor: '#F9FAFB',
          borderBottom: '1px solid #E5E7EB',
          display: 'flex',
          gap: '32px'
        }}>
          <div>
            <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '4px' }}>Total Students</p>
            <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#1F2937' }}>{students.length}</p>
          </div>
          <div>
            <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '4px' }}>Active</p>
            <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#10B981' }}>
              {students.filter(s => s.status === 'Active').length}
            </p>
          </div>
          <div>
            <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '4px' }}>With Dues</p>
            <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#EF4444' }}>
              {students.filter(s => s.dues !== '₹0').length}
            </p>
          </div>
        </div>

        {/* Table */}
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
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Student
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: '16px 24px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6B7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Contact
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: '16px 24px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6B7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Course
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: '16px 24px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6B7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Room
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: '16px 24px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6B7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Dues
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: '16px 24px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6B7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Status
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: '16px 24px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6B7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id} style={{
                  borderBottom: '1px solid #E5E7EB',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#C9A24C',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '16px'
                      }}>
                        {student.name.charAt(0)}
                      </div>
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
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{ fontSize: '13px', color: '#374151' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        marginBottom: '4px'
                      }}>
                        <Mail size={14} style={{ color: '#9CA3AF' }} />
                        {student.email}
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        <Phone size={14} style={{ color: '#9CA3AF' }} />
                        {student.phone}
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <p style={{
                      fontWeight: '500',
                      color: '#1F2937',
                      marginBottom: '2px'
                    }}>
                      {student.course}
                    </p>
                    <p style={{
                      fontSize: '13px',
                      color: '#6B7280'
                    }}>
                      {student.year}
                    </p>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <MapPin size={14} style={{ color: '#C9A24C' }} />
                      <span style={{
                        fontWeight: '500',
                        color: '#1F2937'
                      }}>
                        {student.room}
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <span style={{
                      fontWeight: '600',
                      color: student.dues === '₹0' ? '#10B981' : '#EF4444'
                    }}>
                      {student.dues}
                    </span>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <span style={{
                      padding: '4px 12px',
                      backgroundColor: student.status === 'Active' ? '#D1FAE5' : '#FEE2E2',
                      color: student.status === 'Active' ? '#065F46' : '#991B1B',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      {student.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{
                      display: 'flex',
                      gap: '8px'
                    }}>
                      <button style={{
                        padding: '6px',
                        backgroundColor: '#DBEAFE',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#BFDBFE'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#DBEAFE'}
                      title="View Details">
                        <Eye size={16} style={{ color: '#1E40AF' }} />
                      </button>
                      <button style={{
                        padding: '6px',
                        backgroundColor: '#FEF3C7',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#FDE68A'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#FEF3C7'}
                      title="Edit">
                        <Edit size={16} style={{ color: '#D97706' }} />
                      </button>
                      <button style={{
                        padding: '6px',
                        backgroundColor: '#FEE2E2',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#FECACA'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#FEE2E2'}
                      title="Delete">
                        <Trash2 size={16} style={{ color: '#DC2626' }} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredStudents.length === 0 && (
          <div style={{
            padding: '48px',
            textAlign: 'center'
          }}>
            <User size={48} style={{
              color: '#D1D5DB',
              margin: '0 auto 16px'
            }} />
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#6B7280',
              marginBottom: '8px'
            }}>
              No students found
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#9CA3AF'
            }}>
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredStudents.length > 0 && (
          <div style={{
            padding: '16px 24px',
            borderTop: '1px solid #E5E7EB',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <p style={{
              fontSize: '14px',
              color: '#6B7280'
            }}>
              Showing {filteredStudents.length} of {students.length} students
            </p>
            <div style={{
              display: 'flex',
              gap: '8px'
            }}>
              <button style={{
                padding: '8px 16px',
                border: '1px solid #D1D5DB',
                backgroundColor: 'white',
                borderRadius: '6px',
                fontSize: '14px',
                cursor: 'pointer'
              }}>
                Previous
              </button>
              <button style={{
                padding: '8px 16px',
                border: '1px solid #C9A24C',
                backgroundColor: '#C9A24C',
                color: 'white',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                1
              </button>
              <button style={{
                padding: '8px 16px',
                border: '1px solid #D1D5DB',
                backgroundColor: 'white',
                borderRadius: '6px',
                fontSize: '14px',
                cursor: 'pointer'
              }}>
                2
              </button>
              <button style={{
                padding: '8px 16px',
                border: '1px solid #D1D5DB',
                backgroundColor: 'white',
                borderRadius: '6px',
                fontSize: '14px',
                cursor: 'pointer'
              }}>
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default StudentsPage;