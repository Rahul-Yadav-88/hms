import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, Users, BedDouble, FileSpreadsheet, Receipt, 
  MessageSquare, UtensilsCrossed, MapPin, Clock, 
  Menu, X, LogOut, Bell
} from 'lucide-react';
import useAuthStore from '../../stores/authStore';

const DashboardLayout = ({ children, title }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getNavItems = () => {
    const role = user?.role;
    
    const adminItems = [
      { icon: Home, label: 'Dashboard', path: '/admin/dashboard' },
      { icon: BedDouble, label: 'Allocation', path: '/admin/allocation' },
      { icon: Users, label: 'Students', path: '/students' },
      { icon: FileSpreadsheet, label: 'Import CSV', path: '/admin/import' },
      { icon: Receipt, label: 'Invoices', path: '/accounting/invoices' },
      { icon: MessageSquare, label: 'Communications', path: '/communications/templates' },
      { icon: UtensilsCrossed, label: 'Mess', path: '/mess/sessions' },
      { icon: Clock, label: 'Waitlist', path: '/admin/waitlist' },
      { icon: MapPin, label: 'Floorplans', path: '/hostel/1/floorplan' },
    ];

    const wardenItems = [
      { icon: Home, label: 'Dashboard', path: '/warden/dashboard' },
      { icon: BedDouble, label: 'Allocation', path: '/admin/allocation' },
      { icon: Users, label: 'Students', path: '/students' },
      { icon: MessageSquare, label: 'Communications', path: '/communications/templates' },
      { icon: UtensilsCrossed, label: 'Mess', path: '/mess/sessions' },
    ];

    const accountantItems = [
      { icon: Home, label: 'Dashboard', path: '/accountant/dashboard' },
      { icon: Receipt, label: 'Invoices', path: '/accounting/invoices' },
      { icon: Users, label: 'Students', path: '/students' },
    ];

    switch (role) {
      case 'admin': return adminItems;
      case 'warden': return wardenItems;
      case 'accountant': return accountantItems;
      default: return [];
    }
  };

  const navItems = getNavItems();

  const sidebarStyle = {
    position: 'fixed',
    left: 0,
    top: 0,
    height: '100vh',
    backgroundColor: '#0B0D1A',
    color: 'white',
    width: sidebarOpen ? '256px' : '80px',
    transition: 'width 0.3s',
    zIndex: 40,
    display: 'flex',
    flexDirection: 'column'
  };

  const mainContentStyle = {
    marginLeft: sidebarOpen ? '256px' : '80px',
    transition: 'margin-left 0.3s',
    minHeight: '100vh',
    backgroundColor: '#FBF5EB'
  };

  const headerStyle = {
    backgroundColor: 'white',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 30,
    padding: '16px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FBF5EB' }}>
      {/* Sidebar */}
      <aside style={sidebarStyle}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px',
          borderBottom: '1px solid #374151'
        }}>
          {sidebarOpen && (
            <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#C9A24C' }}>
              Narvyn HMS
            </h1>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
              padding: '8px',
              borderRadius: '8px',
              background: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#374151'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav style={{ marginTop: '24px', padding: '0 12px', flex: 1 }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px',
                  borderRadius: '8px',
                  marginBottom: '8px',
                  textDecoration: 'none',
                  backgroundColor: isActive ? '#C9A24C' : 'transparent',
                  color: isActive ? 'white' : '#9CA3AF',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.target.style.backgroundColor = '#374151';
                    e.target.style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#9CA3AF';
                  }
                }}
              >
                <Icon size={20} />
                {sidebarOpen && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div style={{
          padding: '16px',
          borderTop: '1px solid #374151'
        }}>
          <button
            onClick={handleLogout}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px',
              width: '100%',
              borderRadius: '8px',
              background: 'transparent',
              border: 'none',
              color: '#9CA3AF',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#374151';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#9CA3AF';
            }}
          >
            <LogOut size={20} />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div style={mainContentStyle}>
        {/* Top Header */}
        <header style={headerStyle}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1F2937' }}>
            {title}
          </h2>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button style={{
              padding: '8px',
              borderRadius: '8px',
              background: 'transparent',
              border: 'none',
              position: 'relative',
              cursor: 'pointer'
            }}>
              <Bell size={20} />
              <span style={{
                position: 'absolute',
                top: '4px',
                right: '4px',
                width: '8px',
                height: '8px',
                backgroundColor: '#EF4444',
                borderRadius: '50%'
              }}></span>
            </button>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '14px', fontWeight: '600', color: '#1F2937' }}>
                  {user?.name || 'User'}
                </p>
                <p style={{ fontSize: '12px', color: '#6B7280', textTransform: 'capitalize' }}>
                  {user?.role}
                </p>
              </div>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#C9A24C',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold'
              }}>
                {user?.name?.charAt(0).toUpperCase() || 'U'}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main style={{ padding: '32px' }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;