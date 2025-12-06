import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Plus, Calendar, Clock, Users, Send, CheckCircle, AlertCircle } from 'lucide-react';

const RemindersPage = () => {
  const reminders = [
    {
      id: 1,
      name: 'January Fee Reminder',
      template: 'Fee Reminder',
      scheduledDate: '2025-01-20',
      scheduledTime: '10:00 AM',
      recipients: 147,
      channel: 'email',
      status: 'scheduled'
    },
    {
      id: 2,
      name: 'Maintenance Alert',
      template: 'Maintenance Notice',
      scheduledDate: '2025-01-18',
      scheduledTime: '09:00 AM',
      recipients: 234,
      channel: 'whatsapp',
      status: 'sent'
    },
    {
      id: 3,
      name: 'Payment Confirmation Batch',
      template: 'Payment Confirmation',
      scheduledDate: '2025-01-16',
      scheduledTime: '02:00 PM',
      recipients: 89,
      channel: 'whatsapp',
      status: 'sent'
    },
  ];

  return (
    <DashboardLayout title="Scheduled Reminders">
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        padding: '20px 24px',
        marginBottom: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1F2937' }}>
          Campaign Schedule
        </h3>
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
          Schedule Reminder
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {reminders.map((reminder) => (
          <div
            key={reminder.id}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              padding: '20px',
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '20px',
              alignItems: 'center'
            }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr auto auto auto',
              gap: '20px',
              alignItems: 'center'
            }}>
              <div style={{
                padding: '12px',
                backgroundColor: reminder.status === 'sent' ? '#D1FAE5' : '#FEF3C7',
                borderRadius: '8px'
              }}>
                {reminder.status === 'sent' ? (
                  <CheckCircle size={24} style={{ color: '#059669' }} />
                ) : (
                  <Clock size={24} style={{ color: '#D97706' }} />
                )}
              </div>

              <div>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#1F2937',
                  marginBottom: '4px'
                }}>
                  {reminder.name}
                </h4>
                <p style={{ fontSize: '13px', color: '#6B7280' }}>
                  Template: {reminder.template}
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 12px',
                backgroundColor: '#F3F4F6',
                borderRadius: '6px'
              }}>
                <Calendar size={14} style={{ color: '#6B7280' }} />
                <span style={{ fontSize: '13px', color: '#374151' }}>
                  {reminder.scheduledDate}
                </span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 12px',
                backgroundColor: '#F3F4F6',
                borderRadius: '6px'
              }}>
                <Clock size={14} style={{ color: '#6B7280' }} />
                <span style={{ fontSize: '13px', color: '#374151' }}>
                  {reminder.scheduledTime}
                </span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 12px',
                backgroundColor: '#DBEAFE',
                borderRadius: '6px'
              }}>
                <Users size={14} style={{ color: '#1E40AF' }} />
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#1E3A8A' }}>
                  {reminder.recipients}
                </span>
              </div>
            </div>

            <div>
              <span style={{
                padding: '8px 16px',
                backgroundColor: reminder.status === 'sent' ? '#D1FAE5' : '#FEF3C7',
                color: reminder.status === 'sent' ? '#065F46' : '#92400E',
                borderRadius: '12px',
                fontSize: '13px',
                fontWeight: '600',
                textTransform: 'capitalize'
              }}>
                {reminder.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default RemindersPage;