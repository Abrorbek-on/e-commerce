import React, { useState, useEffect } from "react";
import { Edit, Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Menu, MenuItem, IconButton } from "@mui/material";
import axios from "axios";
import Footer from "../Components/Footer";

export default function My_properties() {
    const [listings, setListings] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const open = Boolean(anchorEl);

    const handleClose = () => setAnchorEl(null);
    const handleClick = (event) => setAnchorEl(event.currentTarget);

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        const url = userId
            ? `http://localhost:4000/accommodations/my-properties/${userId}`
            : `http://localhost:4000/accommodations/my-properties`;

        axios.get(url)
            .then(res => {
                console.log("RES DATA:", res.data);
                setListings(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:4000/accommodations/${id}`)
            .then(res => {
                console.log("Deleted:", res.data);
                setListings(prev => prev.filter(item => item.id !== id));
            })
            .catch(err => console.error(err));
    };

    const filteredListings = listings.filter((listing) =>
        listing.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.location?.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                    <div>
                        <IconButton onClick={handleClick}>
                            <PermIdentityIcon className="text-white" />
                        </IconButton>

                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{ style: { marginTop: "10px" } }}
                        >
                            <MenuItem onClick={handleClose}><Link to="/my_profile">My profile</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="/my_properties">My Properties</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="/favorite">Favourites</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="/product_view">Product view</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="/addpropertyform">Add Property Form</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="/" className="text-red-500">Chiqish</Link></MenuItem>
                        </Menu>
                    </div>
                </nav>
            </header>

            <section className="max-w-[1500px] m-auto p-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">My properties</h2>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="rounded px-3 border py-1 text-sm focus:outline-blue-500"
                    />
                </div>

                <div className="max-w-[1500px] m-auto p-6 shadow">
                    <div className="rounded-lg overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-white">
                                <tr>
                                    <th className="p-3">Listing Title</th>
                                    <th className="p-3">Date Published</th>
                                    <th className="p-3">Status</th>
                                    <th className="p-3">View</th>
                                    <th className="p-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredListings.length > 0 ? (
                                    filteredListings.map((listing) => (
                                        <tr key={listing.id}>
                                            <td className="p-3 flex items-center gap-3">
                                                <div className="relative w-20 h-16 flex items-center justify-center">
                                                    {listing.house_img && listing.house_img.length > 0 ? (
                                                        <img
                                                            src={listing.house_img[0]}
                                                            alt={listing.title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs">
                                                            IMG
                                                        </div>
                                                    )}
                                                    {listing.featured && (
                                                        <span className="absolute top-0 left-0 bg-blue-600 text-white text-[10px] px-2 py-[2px] rounded">
                                                            Featured
                                                        </span>
                                                    )}
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-semibold">{listing.title}</span>
                                                        <span className="bg-gray-800 text-white text-[10px] px-2 py-[2px] rounded">
                                                            {listing.listing_type}
                                                        </span>
                                                    </div>
                                                    <div className="text-xs text-gray-500">{listing.location}</div>
                                                    <div className="line-through text-gray-400 text-xs">
                                                        ${listing.price || listing.total_price}
                                                    </div>
                                                    <div className="text-blue-700 font-bold">${listing.total_price}</div>
                                                </div>
                                            </td>

                                            <td className="p-3 text-sm">{listing.build_year || '-'}</td>
                                            <td className="p-3 text-sm">Pending</td>
                                            <td className="p-3 text-sm">—</td>

                                            <td className="p-3 flex gap-2">
                                                <Edit className="cursor-pointer text-gray-600 hover:text-blue-600" />
                                                <Delete
                                                    className="cursor-pointer text-gray-600 hover:text-red-600"
                                                    onClick={() => handleDelete(listing.id)}
                                                />
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="p-3 text-center text-gray-500">
                                            No properties found
                                        </td>
                                    </tr>
                                )}
                            </tbody>

                        </table>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
