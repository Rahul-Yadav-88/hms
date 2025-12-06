import React, { useState } from 'react';
import { QrCode, CheckCircle, XCircle } from 'lucide-react';

const KioskPage = () => {
  const [scanResult, setScanResult] = useState(null);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0B0D1A',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          color: '#C9A24C',
          marginBottom: '16px'
        }}>
          Narvyn HMS
        </h1>
        <h2 style={{
          fontSize: '24px',
          color: 'white',
          marginBottom: '8px'
        }}>
          Mess Check-in Kiosk
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#9CA3AF'
        }}>
          Scan your QR code to check in for meals
        </p>
      </div>

      <div style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '60px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        textAlign: 'center',
        maxWidth: '500px',
        width: '100%'
      }}>
        <QrCode style={{
          color: '#C9A24C',
          margin: '0 auto 32px'
        }} size={120} />

        {!scanResult ? (
          <>
            <div style={{
              width: '280px',
              height: '280px',
              margin: '0 auto 32px',
              border: '4px dashed #D1D5DB',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#F9FAFB'
            }}>
              <p style={{
                fontSize: '18px',
                color: '#6B7280',
                fontWeight: '500'
              }}>
                Position QR code here
              </p>
            </div>

            <p style={{
              fontSize: '16px',
              color: '#6B7280',
              marginBottom: '16px'
            }}>
              Waiting for scan...
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              backgroundColor: '#FEF3C7',
              borderRadius: '12px'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#F59E0B',
                borderRadius: '50%',
                animation: 'pulse 2s infinite'
              }}></div>
              <span style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#92400E'
              }}>
                Scanner Active
              </span>
            </div>
          </>
        ) : scanResult.success ? (
          <div>
            <CheckCircle style={{
              color: '#10B981',
              margin: '0 auto 24px'
            }} size={80} />
            <h3 style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#065F46',
              marginBottom: '12px'
            }}>
              Check-in Successful!
            </h3>
            <p style={{
              fontSize: '18px',
              color: '#047857',
              marginBottom: '8px'
            }}>
              Welcome, {scanResult.name}
            </p>
            <p style={{
              fontSize: '14px',
              color: '#6B7280'
            }}>
              Enjoy your meal!
            </p>
          </div>
        ) : (
          <div>
            <XCircle style={{
              color: '#EF4444',
              margin: '0 auto 24px'
            }} size={80} />
            <h3 style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#991B1B',
              marginBottom: '12px'
            }}>
              Check-in Failed
            </h3>
            <p style={{
              fontSize: '16px',
              color: '#DC2626'
            }}>
              Invalid QR code. Please try again.
            </p>
          </div>
        )}
      </div>

      <div style={{
        marginTop: '48px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        maxWidth: '800px',
        width: '100%'
      }}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          padding: '24px',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '14px',
            color: '#9CA3AF',
            marginBottom: '8px'
          }}>
            Today's Lunch
          </p>
          <p style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: 'white'
          }}>
            187
          </p>
          <p style={{
            fontSize: '12px',
            color: '#9CA3AF'
          }}>
            Check-ins
          </p>
        </div>

        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          padding: '24px',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '14px',
            color: '#9CA3AF',
            marginBottom: '8px'
          }}>
            Current Session
          </p>
          <p style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#10B981',
            marginBottom: '4px'
          }}>
            Lunch
          </p>
          <p style={{
            fontSize: '12px',
            color: '#9CA3AF'
          }}>
            12:00 PM - 02:00 PM
          </p>
        </div>

        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          padding: '24px',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '14px',
            color: '#9CA3AF',
            marginBottom: '8px'
          }}>
            Capacity
          </p>
          <p style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: 'white'
          }}>
            75%
          </p>
          <p style={{
            fontSize: '12px',
            color: '#9CA3AF'
          }}>
            187 / 250
          </p>
        </div>
      </div>
    </div>
  );
};

export default KioskPage;