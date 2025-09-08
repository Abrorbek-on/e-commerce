import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

function Register() {
    const [formData, setFormData] = useState({
        login: "",
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <>

            <header className='max-w-[1920px] mx-auto bg-[#0d263b] h-[80px]'>
                <nav className='max-w-[1500px] m-auto flex justify-between items-center h-full'>
                    <div>
                        <img src="assets/logo.png" alt="Houzing img" />
                    </div>
                    <div>
                        <ul className="flex text-white gap-[30px]">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/properties">Properties</Link></li>
                            <li><Link to="/favorite">Favorite</Link></li>
                        </ul>
                    </div>
                    <div>
                    </div>
                </nav>
            </header>

            <div className="flex justify-center mt-[100px]">
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                    <h2 className="text-lg font-semibold mb-4">Registration</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="login"
                            placeholder="Login"
                            value={formData.login}
                            onChange={handleChange}
                            className="w-full border-b outline-none py-2"
                        />
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full border-b outline-none py-2"
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full border-b outline-none py-2"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border-b outline-none py-2"
                        />
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full border-b outline-none py-2 bg-transparent"
                        >
                            <option value="">User role</option>
                            <option value="student">Student</option>
                            <option value="mentor">Mentor</option>
                            <option value="admin">Admin</option>
                        </select>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border-b outline-none py-2"
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Re-enter password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full border-b outline-none py-2"
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded mt-2 hover:bg-blue-700 transition"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    )
}

export default Register