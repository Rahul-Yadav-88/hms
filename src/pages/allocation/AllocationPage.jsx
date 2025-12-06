import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Search, Filter, BedDouble, User, CheckCircle, XCircle, Clock } from 'lucide-react';

const AllocationPage = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedBed, setSelectedBed] = useState(null);
  const [holdTimer, setHoldTimer] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data
  const students = [
    { id: 1, name: 'Rahul Sharma', rollNo: 'CS2024001', gender: 'Male', course: 'B.Tech CS' },
    { id: 2, name: 'Priya Patel', rollNo: 'CS2024002', gender: 'Female', course: 'B.Tech CS' },
    { id: 3, name: 'Amit Kumar', rollNo: 'ME2024001', gender: 'Male', course: 'B.Tech ME' },
    { id: 4, name: 'Sneha Reddy', rollNo: 'EC2024001', gender: 'Female', course: 'B.Tech EC' },
    { id: 5, name: 'Vikram Singh', rollNo: 'CS2024003', gender: 'Male', course: 'B.Tech CS' },
    { id: 6, name: 'Ananya Iyer', rollNo: 'EC2024002', gender: 'Female', course: 'B.Tech EC' },
  ];

  const rooms = [
    { id: 'A-101', floor: 1, beds: [
      { id: 'A-101-1', status: 'available', student: null },
      { id: 'A-101-2', status: 'occupied', student: 'John Doe' },
      { id: 'A-101-3', status: 'available', student: null },
      { id: 'A-101-4', status: 'held', student: null, holdExpiry: '2:45' }
    ]},
    { id: 'A-102', floor: 1, beds: [
      { id: 'A-102-1', status: 'available', student: null },
      { id: 'A-102-2', status: 'available', student: null },
      { id: 'A-102-3', status: 'occupied', student: 'Jane Smith' },
      { id: 'A-102-4', status: 'available', student: null }
    ]},
    { id: 'A-103', floor: 1, beds: [
      { id: 'A-103-1', status: 'occupied', student: 'Mike Johnson' },
      { id: 'A-103-2', status: 'available', student: null },
      { id: 'A-103-3', status: 'available', student: null },
      { id: 'A-103-4', status: 'occupied', student: 'Sarah Wilson' }
    ]},
    { id: 'A-104', floor: 1, beds: [
      { id: 'A-104-1', status: 'available', student: null },
      { id: 'A-104-2', status: 'available', student: null },
      { id: 'A-104-3', status: 'available', student: null },
      { id: 'A-104-4', status: 'available', student: null }
    ]},
  ];

  const handleBedSelect = (bed) => {
    if (bed.status === 'available') {
      setSelectedBed(bed);
    }
  };

  const handleHoldBed = () => {
    if (selectedStudent && selectedBed) {
      setHoldTimer('5:00');
      alert(`Bed ${selectedBed.id} held for ${selectedStudent.name} for 5 minutes`);
    }
  };

  const handleConfirmAllocation = () => {
    if (selectedStudent && selectedBed) {
      alert(`Bed ${selectedBed.id} allocated to ${selectedStudent.name} successfully!`);
      setSelectedStudent(null);
      setSelectedBed(null);
      setHoldTimer(null);
    }
  };

  const getBedStatusStyle = (status, isSelected) => {
    let baseStyle = {
      position: 'relative',
      border: '2px solid',
      borderRadius: '8px',
      padding: '16px',
      cursor: status === 'available' ? 'pointer' : 'not-allowed',
      transition: 'all 0.2s',
      textAlign: 'center'
    };

    if (isSelected) {
      baseStyle.borderColor = '#C9A24C';
      baseStyle.boxShadow = '0 0 0 4px rgba(201, 162, 76, 0.2)';
    } else {
      switch (status) {
        case 'available':
          baseStyle.backgroundColor = '#D1FAE5';
          baseStyle.borderColor = '#10B981';
          break;
        case 'occupied':
          baseStyle.backgroundColor = '#FEE2E2';
          baseStyle.borderColor = '#EF4444';
          break;
        case 'held':
          baseStyle.backgroundColor = '#FEF3C7';
          baseStyle.borderColor = '#F59E0B';
          break;
        default:
          baseStyle.backgroundColor = '#F3F4F6';
          baseStyle.borderColor = '#9CA3AF';
      }
    }

    return baseStyle;
  };

  return (
    <DashboardLayout title="Room & Bed Allocation">
      <div style={{
        display: 'grid',
        gridTemplateColumns: '300px 1fr 320px',
        gap: '24px',
        height: 'calc(100vh - 200px)'
      }}>
        
        {/* Left Panel - Student List */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          padding: '24px',
          overflowY: 'auto'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#1F2937',
            marginBottom: '16px'
          }}>
            Students
          </h3>
          
          <div style={{ marginBottom: '16px' }}>
            <div style={{ position: 'relative' }}>
              <Search style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#9CA3AF'
              }} size={18} />
              <input
                type="text"
                placeholder="Search students..."
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
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {students.map((student) => {
              const isSelected = selectedStudent?.id === student.id;
              return (
                <div
                  key={student.id}
                  onClick={() => setSelectedStudent(student)}
                  style={{
                    padding: '12px',
                    borderRadius: '8px',
                    border: '2px solid',
                    borderColor: isSelected ? '#C9A24C' : '#E5E7EB',
                    backgroundColor: isSelected ? '#FBF5EB' : 'white',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = '#D1D5DB';
                      e.currentTarget.style.backgroundColor = '#F9FAFB';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = '#E5E7EB';
                      e.currentTarget.style.backgroundColor = 'white';
                    }
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '4px'
                  }}>
                    <User size={16} style={{ color: '#6B7280' }} />
                    <p style={{
                      fontWeight: '600',
                      color: '#1F2937',
                      fontSize: '14px'
                    }}>
                      {student.name}
                    </p>
                  </div>
                  <p style={{ fontSize: '12px', color: '#6B7280' }}>
                    {student.rollNo}
                  </p>
                  <p style={{ fontSize: '11px', color: '#9CA3AF' }}>
                    {student.course}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Center Panel - Floor Map */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          padding: '24px',
          overflowY: 'auto'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#1F2937'
            }}>
              Floor 1 - Block A
            </h3>
            <button style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              border: '1px solid #D1D5DB',
              borderRadius: '8px',
              backgroundColor: 'white',
              cursor: 'pointer'
            }}>
              <Filter size={18} />
              Filter
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {rooms.map((room) => (
              <div key={room.id} style={{
                border: '1px solid #E5E7EB',
                borderRadius: '12px',
                padding: '16px',
                backgroundColor: '#F9FAFB'
              }}>
                <h4 style={{
                  fontWeight: '600',
                  color: '#1F2937',
                  marginBottom: '12px',
                  fontSize: '16px'
                }}>
                  Room {room.id}
                </h4>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '12px'
                }}>
                  {room.beds.map((bed) => {
                    const isSelected = selectedBed?.id === bed.id;
                    return (
                      <div
                        key={bed.id}
                        onClick={() => handleBedSelect(bed)}
                        style={getBedStatusStyle(bed.status, isSelected)}
                        onMouseEnter={(e) => {
                          if (bed.status === 'available' && !isSelected) {
                            e.currentTarget.style.transform = 'scale(1.05)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (bed.status === 'available') {
                            e.currentTarget.style.transform = 'scale(1)';
                          }
                        }}
                      >
                        <BedDouble size={32} style={{
                          margin: '0 auto 8px',
                          color: '#6B7280'
                        }} />
                        <p style={{
                          fontSize: '12px',
                          fontWeight: '600',
                          color: '#374151'
                        }}>
                          Bed {bed.id.split('-').pop()}
                        </p>
                        {bed.status === 'occupied' && (
                          <p style={{
                            fontSize: '10px',
                            color: '#6B7280',
                            marginTop: '4px'
                          }}>
                            {bed.student}
                          </p>
                        )}
                        {bed.status === 'held' && (
                          <p style={{
                            fontSize: '11px',
                            color: '#D97706',
                            marginTop: '4px',
                            fontWeight: '600'
                          }}>
                            {bed.holdExpiry}
                          </p>
                        )}
                        
                        {/* Status Badge */}
                        <div style={{
                          position: 'absolute',
                          top: '8px',
                          right: '8px'
                        }}>
                          {bed.status === 'available' && <CheckCircle size={16} style={{ color: '#10B981' }} />}
                          {bed.status === 'occupied' && <XCircle size={16} style={{ color: '#EF4444' }} />}
                          {bed.status === 'held' && <Clock size={16} style={{ color: '#F59E0B' }} />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div style={{
            marginTop: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            fontSize: '14px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '16px',
                height: '16px',
                backgroundColor: '#D1FAE5',
                border: '2px solid #10B981',
                borderRadius: '4px'
              }}></div>
              <span>Available</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '16px',
                height: '16px',
                backgroundColor: '#FEE2E2',
                border: '2px solid #EF4444',
                borderRadius: '4px'
              }}></div>
              <span>Occupied</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '16px',
                height: '16px',
                backgroundColor: '#FEF3C7',
                border: '2px solid #F59E0B',
                borderRadius: '4px'
              }}></div>
              <span>On Hold</span>
            </div>
          </div>
        </div>

        {/* Right Panel - Allocation Panel */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#1F2937',
            marginBottom: '16px'
          }}>
            Allocation Details
          </h3>
          
          {selectedStudent ? (
            <div style={{
              marginBottom: '16px',
              padding: '12px',
              backgroundColor: '#DBEAFE',
              borderRadius: '8px'
            }}>
              <p style={{
                fontSize: '12px',
                color: '#6B7280',
                marginBottom: '4px'
              }}>
                Selected Student
              </p>
              <p style={{
                fontWeight: '600',
                color: '#1F2937'
              }}>
                {selectedStudent.name}
              </p>
              <p style={{
                fontSize: '12px',
                color: '#6B7280'
              }}>
                {selectedStudent.rollNo}
              </p>
            </div>
          ) : (
            <div style={{
              marginBottom: '16px',
              padding: '12px',
              backgroundColor: '#F3F4F6',
              borderRadius: '8px',
              textAlign: 'center',
              color: '#9CA3AF',
              fontSize: '14px'
            }}>
              Select a student from the list
            </div>
          )}

          {selectedBed ? (
            <div style={{
              marginBottom: '16px',
              padding: '12px',
              backgroundColor: '#D1FAE5',
              borderRadius: '8px'
            }}>
              <p style={{
                fontSize: '12px',
                color: '#6B7280',
                marginBottom: '4px'
              }}>
                Selected Bed
              </p>
              <p style={{
                fontWeight: '600',
                color: '#1F2937'
              }}>
                {selectedBed.id}
              </p>
            </div>
          ) : (
            <div style={{
              marginBottom: '16px',
              padding: '12px',
              backgroundColor: '#F3F4F6',
              borderRadius: '8px',
              textAlign: 'center',
              color: '#9CA3AF',
              fontSize: '14px'
            }}>
              Select an available bed
            </div>
          )}

          {holdTimer && (
            <div style={{
              marginBottom: '16px',
              padding: '12px',
              backgroundColor: '#FEF3C7',
              border: '1px solid #FCD34D',
              borderRadius: '8px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '4px'
              }}>
                <Clock size={16} style={{ color: '#D97706' }} />
                <p style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#92400E'
                }}>
                  Hold Active
                </p>
              </div>
              <p style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#92400E',
                textAlign: 'center'
              }}>
                {holdTimer}
              </p>
            </div>
          )}

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <button
              onClick={handleHoldBed}
              disabled={!selectedStudent || !selectedBed}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: (!selectedStudent || !selectedBed) ? '#D1D5DB' : '#F59E0B',
                color: 'white',
                fontWeight: '600',
                border: 'none',
                borderRadius: '8px',
                cursor: (!selectedStudent || !selectedBed) ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                if (selectedStudent && selectedBed) {
                  e.target.style.backgroundColor = '#D97706';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedStudent && selectedBed) {
                  e.target.style.backgroundColor = '#F59E0B';
                }
              }}
            >
              Hold Bed (5 min)
            </button>
            
            <button
              onClick={handleConfirmAllocation}
              disabled={!selectedStudent || !selectedBed}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: (!selectedStudent || !selectedBed) ? '#D1D5DB' : '#C9A24C',
                color: 'white',
                fontWeight: '600',
                border: 'none',
                borderRadius: '8px',
                cursor: (!selectedStudent || !selectedBed) ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                if (selectedStudent && selectedBed) {
                  e.target.style.backgroundColor = '#A88840';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedStudent && selectedBed) {
                  e.target.style.backgroundColor = '#C9A24C';
                }
              }}
            >
              Confirm Allocation
            </button>

            <button
              onClick={() => {
                setSelectedStudent(null);
                setSelectedBed(null);
                setHoldTimer(null);
              }}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#E5E7EB',
                color: '#374151',
                fontWeight: '600',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#D1D5DB'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#E5E7EB'}
            >
              Clear Selection
            </button>
          </div>

          {/* Recent Allocations */}
          <div style={{ marginTop: '24px' }}>
            <h4 style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }}>
              Recent Allocations
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{
                fontSize: '12px',
                backgroundColor: '#F3F4F6',
                padding: '8px',
                borderRadius: '6px'
              }}>
                <p style={{ fontWeight: '500' }}>John Doe → A-101-2</p>
                <p style={{ color: '#9CA3AF' }}>2 hours ago</p>
              </div>
              <div style={{
                fontSize: '12px',
                backgroundColor: '#F3F4F6',
                padding: '8px',
                borderRadius: '6px'
              }}>
                <p style={{ fontWeight: '500' }}>Jane Smith → A-102-3</p>
                <p style={{ color: '#9CA3AF' }}>5 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AllocationPage;