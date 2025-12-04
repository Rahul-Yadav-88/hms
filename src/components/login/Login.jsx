import React, { useState } from "react";

const Login = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
console.log(email)
    if (!role || !email || !password) {
      alert("⚠️ Please fill all fields before logging in");
      return;
    }

    alert(`Logged in successfully as ${role}`);
  };

  return (
    <div className="flex justify-end  items-center h-screen bg-[url('/bg.jpg')] bg-cover bg-center h-72">
      <div className="w-full max-w-lg p-10 flex flex-col bg-white justify-center h-screen  shadow-xl rounded-xl p-8">
        
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
           Hostel Management System
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Warden">Warden</option>
            <option value="Parent">Parent</option>
            <option value="Accountant">Accountant</option>
          </select>

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" /> Remember me
            </label>
            <a href="#" className="hover:text-blue-600">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-lg"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 text-xs mt-6">
          © 2025 Hostel Management System
        </p>

      </div>
    </div>
  );
};

export default Login;
