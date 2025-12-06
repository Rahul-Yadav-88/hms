import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/authStore";

const Login = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!role || !email || !password) {
      setError("Please fill all fields before logging in");
      return;
    }

    setLoading(true);

    try {
      // Simulate API call - Replace with actual API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Mock user data - Replace with actual API response
      const userData = {
        id: "user_123",
        email: email,
        role: role.toLowerCase(),
        name: email.split("@")[0],
      };
      
      const token = "mock_jwt_token_" + Date.now();
      
      // Store in auth state
      login(userData, token);
      
      // Navigate based on role
      switch (role.toLowerCase()) {
        case "admin":
          navigate("/admin/dashboard");
          break;
        case "warden":
          navigate("/warden/dashboard");
          break;
        case "accountant":
          navigate("/accountant/dashboard");
          break;
        case "parent":
          navigate("/parent/login");
          break;
        default:
          navigate("/login");
      }
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '450px',
        backgroundColor: 'white',
        borderRadius: '16px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        padding: '40px'
      }}>
        
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '32px', 
            fontWeight: 'bold', 
            color: '#C9A24C',
            marginBottom: '8px'
          }}>
            Narvyn HMS
          </h1>
          <h2 style={{ 
            fontSize: '18px', 
            fontWeight: '600', 
            color: '#4B5563'
          }}>
            Hostel Management System
          </h2>
        </div>

        {error && (
          <div style={{
            marginBottom: '16px',
            padding: '12px',
            backgroundColor: '#FEE2E2',
            border: '1px solid #FCA5A5',
            borderRadius: '8px',
            color: '#991B1B',
            fontSize: '14px'
          }}>
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '8px'
            }}>
              Select Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #D1D5DB',
                borderRadius: '8px',
                fontSize: '16px',
                color: '#1F2937',
                backgroundColor: 'white',
                cursor: 'pointer'
              }}
            >
              <option value="">Choose your role</option>
              <option value="Admin">Admin</option>
              <option value="Warden">Warden</option>
              <option value="Accountant">Accountant</option>
              <option value="Parent">Parent</option>
            </select>
          </div>

          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '8px'
            }}>
              Email Address
            </label>
            <input
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #D1D5DB',
                borderRadius: '8px',
                fontSize: '16px'
              }}
            />
          </div>

          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '8px'
            }}>
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #D1D5DB',
                borderRadius: '8px',
                fontSize: '16px'
              }}
            />
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '14px'
          }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#6B7280',
              cursor: 'pointer'
            }}>
              <input 
                type="checkbox" 
                style={{
                  width: '16px',
                  height: '16px',
                  cursor: 'pointer'
                }}
              />
              Remember me
            </label>
            <a href="#" style={{
              color: '#C9A24C',
              fontWeight: '500',
              textDecoration: 'none'
            }}>
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: loading ? '#9CA3AF' : '#C9A24C',
              color: 'white',
              fontWeight: '600',
              fontSize: '16px',
              border: 'none',
              borderRadius: '8px',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              if (!loading) e.target.style.backgroundColor = '#A88840';
            }}
            onMouseLeave={(e) => {
              if (!loading) e.target.style.backgroundColor = '#C9A24C';
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p style={{
          textAlign: 'center',
          color: '#9CA3AF',
          fontSize: '12px',
          marginTop: '32px'
        }}>
          © 2025 Narvyn Hostel Management System. All rights reserved.
        </p>

      </div>
    </div>
  );
};

export default Login;