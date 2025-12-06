import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { 
  Plus, Search, Filter, Download, Eye, Send, 
  DollarSign, Calendar, User, Receipt, CheckCircle, 
  Clock, AlertCircle, XCircle 
} from 'lucide-react';

const InvoicesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const invoices = [
    {
      id: 'INV-2025-001',
      student: 'Rahul Sharma',
      rollNo: 'CS2024001',
      amount: 25000,
      dueDate: '2025-01-15',
      status: 'paid',
      paidDate: '2025-01-10',
      items: ['Hostel Fee', 'Mess Fee'],
      issueDate: '2025-01-01'
    },
    {
      id: 'INV-2025-002',
      student: 'Priya Patel',
      rollNo: 'CS2024002',
      amount: 30000,
      dueDate: '2025-01-20',
      status: 'pending',
      paidDate: null,
      items: ['Hostel Fee', 'Mess Fee', 'Laundry'],
      issueDate: '2025-01-01'
    },
    {
      id: 'INV-2025-003',
      student: 'Amit Kumar',
      rollNo: 'ME2024001',
      amount: 22000,
      dueDate: '2025-01-10',
      status: 'overdue',
      paidDate: null,
      items: ['Hostel Fee'],
      issueDate: '2024-12-15'
    },
    {
      id: 'INV-2025-004',
      student: 'Sneha Reddy',
      rollNo: 'EC2024001',
      amount: 27500,
      dueDate: '2025-01-25',
      status: 'pending',
      paidDate: null,
      items: ['Hostel Fee', 'Mess Fee'],
      issueDate: '2025-01-05'
    },
    {
      id: 'INV-2025-005',
      student: 'Vikram Singh',
      rollNo: 'CS2024003',
      amount: 28000,
      dueDate: '2025-01-18',
      status: 'paid',
      paidDate: '2025-01-12',
      items: ['Hostel Fee', 'Mess Fee', 'Security Deposit'],
      issueDate: '2025-01-02'
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'paid':
        return {
          bg: '#D1FAE5',
          color: '#065F46',
          icon: CheckCircle,
          iconColor: '#10B981'
        };
      case 'pending':
        return {
          bg: '#FEF3C7',
          color: '#92400E',
          icon: Clock,
          iconColor: '#F59E0B'
        };
      case 'overdue':
        return {
          bg: '#FEE2E2',
          color: '#991B1B',
          icon: AlertCircle,
          iconColor: '#EF4444'
        };
      default:
        return {
          bg: '#F3F4F6',
          color: '#374151',
          icon: XCircle,
          iconColor: '#9CA3AF'
        };
    }
  };

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         invoice.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         invoice.rollNo.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || invoice.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const totalRevenue = invoices.reduce((sum, inv) => sum + inv.amount, 0);
  const paidAmount = invoices.filter(inv => inv.status === 'paid').reduce((sum, inv) => sum + inv.amount, 0);
  const pendingAmount = invoices.filter(inv => inv.status === 'pending').reduce((sum, inv) => sum + inv.amount, 0);
  const overdueAmount = invoices.filter(inv => inv.status === 'overdue').reduce((sum, inv) => sum + inv.amount, 0);

  return (
    <DashboardLayout title="Invoices Management">
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
              <Receipt style={{ color: '#1E40AF' }} size={24} />
            </div>
          </div>
          <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '4px' }}>
            Total Revenue
          </p>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#1F2937' }}>
            ₹{(totalRevenue / 1000).toFixed(1)}K
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
              backgroundColor: '#D1FAE5',
              padding: '10px',
              borderRadius: '8px'
            }}>
              <CheckCircle style={{ color: '#059669' }} size={24} />
            </div>
          </div>
          <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '4px' }}>
            Collected
          </p>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#10B981' }}>
            ₹{(paidAmount / 1000).toFixed(1)}K
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
            Pending
          </p>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#F59E0B' }}>
            ₹{(pendingAmount / 1000).toFixed(1)}K
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
            Overdue
          </p>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#EF4444' }}>
            ₹{(overdueAmount / 1000).toFixed(1)}K
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        {/* Toolbar */}
        <div style={{
          padding: '20px 24px',
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
            gap: '12px',
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
                placeholder="Search invoices..."
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
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="overdue">Overdue</option>
            </select>
          </div>

          <button
            onClick={() => setShowCreateModal(true)}
            style={{
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
            onMouseLeave={(e) => e.target.style.backgroundColor = '#C9A24C'}
          >
            <Plus size={18} />
            Create Invoice
          </button>
        </div>

        {/* Invoices Table */}
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
                  Invoice ID
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
                  Amount
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: '16px 24px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6B7280',
                  textTransform: 'uppercase'
                }}>
                  Issue Date
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: '16px 24px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6B7280',
                  textTransform: 'uppercase'
                }}>
                  Due Date
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: '16px 24px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6B7280',
                  textTransform: 'uppercase'
                }}>
                  Status
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
              {filteredInvoices.map((invoice) => {
                const statusStyle = getStatusStyle(invoice.status);
                const StatusIcon = statusStyle.icon;
                
                return (
                  <tr
                    key={invoice.id}
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
                        gap: '8px'
                      }}>
                        <Receipt size={16} style={{ color: '#C9A24C' }} />
                        <span style={{
                          fontWeight: '600',
                          color: '#1F2937',
                          fontSize: '14px'
                        }}>
                          {invoice.id}
                        </span>
                      </div>
                    </td>
                    <td style={{ padding: '16px 24px' }}>
                      <div>
                        <p style={{
                          fontWeight: '500',
                          color: '#1F2937',
                          marginBottom: '2px'
                        }}>
                          {invoice.student}
                        </p>
                        <p style={{
                          fontSize: '13px',
                          color: '#6B7280'
                        }}>
                          {invoice.rollNo}
                        </p>
                      </div>
                    </td>
                    <td style={{ padding: '16px 24px' }}>
                      <span style={{
                        fontSize: '16px',
                        fontWeight: '700',
                        color: '#1F2937'
                      }}>
                        ₹{invoice.amount.toLocaleString()}
                      </span>
                    </td>
                    <td style={{ padding: '16px 24px' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '14px',
                        color: '#6B7280'
                      }}>
                        <Calendar size={14} />
                        {new Date(invoice.issueDate).toLocaleDateString('en-GB')}
                      </div>
                    </td>
                    <td style={{ padding: '16px 24px' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '14px',
                        color: '#6B7280'
                      }}>
                        <Calendar size={14} />
                        {new Date(invoice.dueDate).toLocaleDateString('en-GB')}
                      </div>
                    </td>
                    <td style={{ padding: '16px 24px' }}>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 12px',
                        backgroundColor: statusStyle.bg,
                        borderRadius: '12px'
                      }}>
                        <StatusIcon size={14} style={{ color: statusStyle.iconColor }} />
                        <span style={{
                          fontSize: '12px',
                          fontWeight: '600',
                          color: statusStyle.color,
                          textTransform: 'capitalize'
                        }}>
                          {invoice.status}
                        </span>
                      </div>
                    </td>
                    <td style={{ padding: '16px 24px' }}>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <button
                          style={{
                            padding: '8px',
                            backgroundColor: '#DBEAFE',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center'
                          }}
                          title="View Invoice"
                        >
                          <Eye size={16} style={{ color: '#1E40AF' }} />
                        </button>
                        <button
                          style={{
                            padding: '8px',
                            backgroundColor: '#FEF3C7',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center'
                          }}
                          title="Download PDF"
                        >
                          <Download size={16} style={{ color: '#D97706' }} />
                        </button>
                        {invoice.status !== 'paid' && (
                          <button
                            style={{
                              padding: '8px',
                              backgroundColor: '#D1FAE5',
                              border: 'none',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center'
                            }}
                            title="Send Reminder"
                          >
                            <Send size={16} style={{ color: '#059669' }} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredInvoices.length === 0 && (
          <div style={{
            padding: '48px',
            textAlign: 'center'
          }}>
            <Receipt size={48} style={{
              color: '#D1D5DB',
              margin: '0 auto 16px'
            }} />
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#6B7280',
              marginBottom: '8px'
            }}>
              No invoices found
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
        {filteredInvoices.length > 0 && (
          <div style={{
            padding: '16px 24px',
            borderTop: '1px solid #E5E7EB',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <p style={{ fontSize: '14px', color: '#6B7280' }}>
              Showing {filteredInvoices.length} of {invoices.length} invoices
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
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
                backgroundColor: '#C9A24C',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '600'
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
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default InvoicesPage;