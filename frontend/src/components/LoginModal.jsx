// LoginModal.jsx
import React, { useState } from "react";

export default function LoginModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      alert("Login successful!");
      localStorage.setItem("token", data.token); // save JWT
      onClose();
    } else {
      alert(data.message || "Login failed!");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin} className="space-y-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-3 py-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-3 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
          >
            Login
          </button>
        </form>
        <button
          className="mt-3 text-sm text-gray-500"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
