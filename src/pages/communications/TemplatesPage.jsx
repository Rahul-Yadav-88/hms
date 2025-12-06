import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Plus, Search, Edit, Trash2, Copy, Mail, MessageSquare, Eye } from 'lucide-react';

const TemplatesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const templates = [
    {
      id: 1,
      name: 'Fee Reminder',
      type: 'email',
      subject: 'Hostel Fee Payment Reminder',
      preview: 'Dear {{student_name}}, This is a reminder that your hostel fee of {{amount}} is due on {{due_date}}...',
      variables: ['student_name', 'amount', 'due_date'],
      lastUsed: '2025-01-15',
      usageCount: 145
    },
    {
      id: 2,
      name: 'Welcome Message',
      type: 'whatsapp',
      subject: 'Welcome to Hostel',
      preview: 'Hi {{student_name}}! Welcome to {{hostel_name}}. Your room is {{room_number}}...',
      variables: ['student_name', 'hostel_name', 'room_number'],
      lastUsed: '2025-01-10',
      usageCount: 89
    },
    {
      id: 3,
      name: 'Maintenance Notice',
      type: 'email',
      subject: 'Scheduled Maintenance',
      preview: 'Dear residents, Please note that maintenance work is scheduled on {{date}} from {{time}}...',
      variables: ['date', 'time'],
      lastUsed: '2025-01-12',
      usageCount: 234
    },
    {
      id: 4,
      name: 'Payment Confirmation',
      type: 'whatsapp',
      subject: 'Payment Received',
      preview: 'Thank you {{student_name}}! We have received your payment of {{amount}}. Receipt: {{receipt_id}}',
      variables: ['student_name', 'amount', 'receipt_id'],
      lastUsed: '2025-01-14',
      usageCount: 312
    },
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || template.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <DashboardLayout title="Communication Templates">
      {/* Header */}
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
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          flex: 1,
          maxWidth: '500px'
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
              placeholder="Search templates..."
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
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            style={{
              padding: '10px 16px',
              border: '1px solid #D1D5DB',
              borderRadius: '8px',
              fontSize: '14px',
              backgroundColor: 'white',
              cursor: 'pointer'
            }}
          >
            <option value="all">All Types</option>
            <option value="email">Email</option>
            <option value="whatsapp">WhatsApp</option>
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
          cursor: 'pointer'
        }}>
          <Plus size={18} />
          Create Template
        </button>
      </div>

      {/* Templates Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '20px'
      }}>
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              padding: '20px',
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
              alignItems: 'start',
              justifyContent: 'space-between',
              marginBottom: '12px'
            }}>
              <div style={{ flex: 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '8px'
                }}>
                  <div style={{
                    padding: '6px',
                    backgroundColor: template.type === 'email' ? '#DBEAFE' : '#D1FAE5',
                    borderRadius: '6px'
                  }}>
                    {template.type === 'email' ? (
                      <Mail size={16} style={{ color: '#1E40AF' }} />
                    ) : (
                      <MessageSquare size={16} style={{ color: '#059669' }} />
                    )}
                  </div>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#1F2937'
                  }}>
                    {template.name}
                  </h3>
                </div>
                <p style={{
                  fontSize: '13px',
                  color: '#6B7280',
                  fontWeight: '500',
                  marginBottom: '8px'
                }}>
                  {template.subject}
                </p>
              </div>
            </div>

            <p style={{
              fontSize: '13px',
              color: '#6B7280',
              lineHeight: '1.5',
              marginBottom: '12px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical'
            }}>
              {template.preview}
            </p>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
              marginBottom: '12px'
            }}>
              {template.variables.map((variable, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: '#FEF3C7',
                    color: '#92400E',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: '600'
                  }}
                >
                  {`{{${variable}}}`}
                </span>
              ))}
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '12px',
              borderTop: '1px solid #E5E7EB'
            }}>
              <div style={{ fontSize: '12px', color: '#9CA3AF' }}>
                Used {template.usageCount} times
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                <button style={{
                  padding: '6px',
                  backgroundColor: '#DBEAFE',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }} title="Preview">
                  <Eye size={14} style={{ color: '#1E40AF' }} />
                </button>
                <button style={{
                  padding: '6px',
                  backgroundColor: '#FEF3C7',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }} title="Edit">
                  <Edit size={14} style={{ color: '#D97706' }} />
                </button>
                <button style={{
                  padding: '6px',
                  backgroundColor: '#E0E7FF',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }} title="Duplicate">
                  <Copy size={14} style={{ color: '#4F46E5' }} />
                </button>
                <button style={{
                  padding: '6px',
                  backgroundColor: '#FEE2E2',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }} title="Delete">
                  <Trash2 size={14} style={{ color: '#DC2626' }} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default TemplatesPage;