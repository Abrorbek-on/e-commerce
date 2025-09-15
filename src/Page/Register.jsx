import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const { confirmPassword, ...dataToSend } = formData;

      const res = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

      alert("✅ Registration successful!");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="max-w-[1920px] mx-auto bg-[#0d263b] h-[80px]">
        <nav className="max-w-[1500px] m-auto flex justify-between items-center h-full">
          <div>
            <img src="assets/logo.png" alt="Houzing img" />
          </div>
          <div>
            <ul className="flex text-white gap-[30px]">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/properties">Properties</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="flex justify-center mt-[100px]">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <h2 className="text-lg font-semibold mb-4">Registration</h2>

          {error && <div className="text-red-500 text-sm mb-2">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border-b outline-none py-2"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border-b outline-none py-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b outline-none py-2"
              required
            />
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border-b outline-none py-2 bg-transparent"
              required
            >
              <option value="">Select role</option>
              <option value="User">User</option>
              <option value="Customer">Customer</option>
            </select>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border-b outline-none py-2"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border-b outline-none py-2"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded mt-2 hover:bg-blue-700 transition disabled:bg-gray-400"
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <Link to="/login" className="text-blue-500 flex justify-center mt-[10px]">
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default Register;
