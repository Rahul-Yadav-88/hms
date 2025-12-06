import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoginPage from './pages/login/LoginPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import WardenDashboard from './pages/warden/WardenDashboard';
import AccountantDashboard from './pages/accountant/AccountantDashboard';
import AllocationPage from './pages/allocation/AllocationPage';
import StudentsPage from './pages/students/StudentsPage';
import StudentProfile from './pages/students/StudentProfile';
import ImportPage from './pages/import/ImportPage';
import InvoicesPage from './pages/accounting/InvoicesPage';
import ReceiptPage from './pages/accounting/ReceiptPage';
import TemplatesPage from './pages/communications/TemplatesPage';
import RemindersPage from './pages/communications/RemindersPage';
import MessSessionsPage from './pages/mess/MessSessionsPage';
import KioskPage from './pages/kiosk/KioskPage';
import FloorplanPage from './pages/floorplan/FloorplanPage';
import WaitlistPage from './pages/waitlist/WaitlistPage';
import ParentPortal from './pages/parent/ParentPortal';
import ProtectedRoute from './components/auth/ProtectedRoute';
import './styles/tokens.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/parent/login" element={<ParentPortal />} />
          
          {/* Protected Admin Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/allocation"
            element={
              <ProtectedRoute allowedRoles={['admin', 'warden']}>
                <AllocationPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/import"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <ImportPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/waitlist"
            element={
              <ProtectedRoute allowedRoles={['admin', 'warden']}>
                <WaitlistPage />
              </ProtectedRoute>
            }
          />
          
          {/* Warden Routes */}
          <Route
            path="/warden/dashboard"
            element={
              <ProtectedRoute allowedRoles={['warden']}>
                <WardenDashboard />
              </ProtectedRoute>
            }
          />
          
          {/* Accountant Routes */}
          <Route
            path="/accountant/dashboard"
            element={
              <ProtectedRoute allowedRoles={['accountant']}>
                <AccountantDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/accounting/invoices"
            element={
              <ProtectedRoute allowedRoles={['accountant', 'admin']}>
                <InvoicesPage />
              </ProtectedRoute>
            }
          />
          
          {/* Student Routes */}
          <Route
            path="/students"
            element={
              <ProtectedRoute allowedRoles={['admin', 'warden']}>
                <StudentsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/students/:id"
            element={
              <ProtectedRoute allowedRoles={['admin', 'warden', 'accountant']}>
                <StudentProfile />
              </ProtectedRoute>
            }
          />
          
          {/* Communication Routes */}
          <Route
            path="/communications/templates"
            element={
              <ProtectedRoute allowedRoles={['admin', 'warden']}>
                <TemplatesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/communications/reminders"
            element={
              <ProtectedRoute allowedRoles={['admin', 'warden']}>
                <RemindersPage />
              </ProtectedRoute>
            }
          />
          
          {/* Mess Routes */}
          <Route
            path="/mess/sessions"
            element={
              <ProtectedRoute allowedRoles={['admin', 'warden']}>
                <MessSessionsPage />
              </ProtectedRoute>
            }
          />
          <Route path="/kiosk/scan" element={<KioskPage />} />
          
          {/* Floorplan Routes */}
          <Route
            path="/hostel/:id/floorplan"
            element={
              <ProtectedRoute allowedRoles={['admin', 'warden']}>
                <FloorplanPage />
              </ProtectedRoute>
            }
          />
          
          {/* Receipt (Public with token) */}
          <Route path="/receipt/:id" element={<ReceiptPage />} />
          
          {/* Default Redirect */}
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;