import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

export default function LoginForm() {
    const [formData, setFormData] = useState({
        login: "",
        password: "",
        remember: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login data:", formData);
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
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                    </div>
                </nav>
            </header>


            <div className="flex justify-center mt-[100px]">
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                    <h2 className="text-lg font-semibold mb-4">Sign in</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Login</label>
                            <input
                                type="text"
                                name="login"
                                placeholder="Ali Tufa..."
                                value={formData.login}
                                onChange={handleChange}
                                className="w-full border-b outline-none py-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full border-b outline-none py-2"
                            />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    checked={formData.remember}
                                    onChange={handleChange}
                                    className="w-4 h-4"
                                />
                                Remember me
                            </label>
                            <a href="#" className="text-blue-600 hover:underline">
                                Forgot
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded mt-2 hover:bg-blue-700 transition"
                        >
                            Login
                        </button>
                    </form>
                    <Link to="/register" className='text-blue-500 flex justify-center mt-[10px]'>Register</Link>

                </div>
            </div>

            {/* <Footer/> */}

        </>
    );
}
