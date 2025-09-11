import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import { IconButton } from '@mui/material';
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Menu, MenuItem } from "@mui/material";


function My_profile() {
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

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
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

                        <IconButton onClick={handleClick}>
                            <PermIdentityIcon className="text-white" />
                        </IconButton>

                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                                style: {
                                    marginTop: "10px"
                                }
                            }}
                        >
                            <MenuItem onClick={handleClose}>
                                <Link to="/my_profile">My profile</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link to="/my_properties">My Properties</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link to="/favorite">Favourites</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link to="/product_view">Product view</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link to="/addpropertyform">Add Property Form</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link to="/chiqish" className='text-red-500'>Chiqish</Link>
                            </MenuItem>
                        </Menu>
                    </div>
                </nav>
            </header>

            <div className="flex justify-center mt-[100px]">
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                    <h2 className="text-lg font-semibold mb-4">Profile</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">

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

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded mt-2 hover:bg-blue-700 transition"
                        >
                            Register
                        </button>
                    </form>
                    <Link to="/login" className='text-blue-500 flex justify-center mt-[10px]'>Login</Link>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    )
}

export default My_profile