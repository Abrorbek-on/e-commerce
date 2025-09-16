import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Footer from "../Components/Footer";
import axios from "axios";

const AddPropertyForm = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const userId = storedUser ? storedUser.id : null;
    const token = localStorage.getItem("token");

    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        address: "",
        price: "",
        discount: "",
        build_year: "",
        latitude: "",
        longitude: "",
        country: "Uzbekistan",
        map_url: "",
        listing_type: "SALE",
        user_id: userId || "",
        category_id: "",
    });

    useEffect(() => {
        fetch("http://localhost:4000/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((err) => console.error("Category fetch error:", err));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userId) {
            alert("Iltimos, avval tizimga kiring");
            return;
        }

        const categoryIdNum = parseInt(formData.category_id, 10);
        if (isNaN(categoryIdNum)) {
            alert("Iltimos, to'g'ri kategoriya tanlang");
            return;
        }

        const payload = {
            ...formData,
            category_id: categoryIdNum,
            img: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv0nUU_l0yeQy4z_EU4uNRwB8VsENrg71MwQ&s",
            ],
            isActive: true,
            features: ["balcony", "garage"],
            documents: [],
            extra_features: [],
            price: parseFloat(formData.price),
            discount: parseFloat(formData.discount),
            build_year: Number(formData.build_year),
            latitude: parseFloat(formData.latitude) || 0,
            longitude: parseFloat(formData.longitude) || 0,
            listing_type:
                formData.listing_type === "RENT" ? "ForRent" : "ForSale",
        };

        try {
            const res = await axios.post(
                "http://localhost:4000/accommodations",
                payload,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            alert("Property created successfully!");
            console.log("✅ SUCCESS:", res.data);
        } catch (err) {
            console.error("❌ Server error:", err.response?.data || err.message);
            alert(
                err.response?.data?.message || "Property yaratishda xatolik yuz berdi"
            );
        }
    };

    return (
        <>
            <header className="bg-[#0f2937] text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <nav className="flex items-center justify-between h-16">
                        <div>
                            <img src="assets/logo.png" alt="Houzing Logo" />
                        </div>
                        <ul className="flex gap-8">
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/properties">Properties</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <IconButton onClick={handleClick}>
                            <PermIdentityIcon className="text-white" />
                        </IconButton>
                        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
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
                                <Link to="/" className="text-red-500">
                                    Chiqish
                                </Link>
                            </MenuItem>
                        </Menu>
                    </nav>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 py-10">
                <h1 className="text-2xl font-semibold mb-8">Add new property</h1>

                <form onSubmit={handleSubmit}>
                    <div className="bg-white shadow p-6 rounded-lg mb-8">
                        <h2 className="text-lg font-medium mb-4">Basic information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Property title*"
                                className="border p-2 rounded"
                                required
                            />
                            <select
                                name="listing_type"
                                value={formData.listing_type}
                                onChange={handleChange}
                                className="border p-2 rounded"
                            >
                                <option value="SALE">Sale</option>
                                <option value="RENT">Rent</option>
                            </select>
                        </div>

                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Property Description*"
                            className="w-full border p-2 rounded mt-4"
                            rows="4"
                            required
                        />

                        <div className="mt-4">
                            <label htmlFor="category_id" className="block mb-1 font-medium">
                                Category*
                            </label>
                            <select
                                name="category_id"
                                id="category_id"
                                value={formData.category_id}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                                required
                            >
                                <option value="">Select a category</option>
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="bg-white shadow p-6 rounded-lg mb-8">
                        <h2 className="text-lg font-medium mb-4">Location</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Address"
                                className="border p-2 rounded"
                                required
                            />
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                placeholder="Country"
                                className="border p-2 rounded"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="latitude"
                                value={formData.latitude}
                                onChange={handleChange}
                                placeholder="Latitude"
                                className="border p-2 rounded"
                                required
                            />
                            <input
                                type="text"
                                name="longitude"
                                value={formData.longitude}
                                onChange={handleChange}
                                placeholder="Longitude"
                                className="border p-2 rounded"
                                required
                            />
                        </div>
                    </div>

                    <div className="bg-white shadow p-6 rounded-lg mb-8">
                        <h2 className="text-lg font-medium mb-4">Price</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="Price"
                                className="border p-2 rounded"
                                required
                            />
                            <input
                                type="number"
                                name="discount"
                                value={formData.discount}
                                onChange={handleChange}
                                placeholder="Discount"
                                className="border p-2 rounded"
                                required
                            />
                        </div>
                    </div>

                    <div className="bg-white shadow p-6 rounded-lg mb-8">
                        <h2 className="text-lg font-medium mb-4">Additional Info</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="number"
                                name="build_year"
                                value={formData.build_year}
                                onChange={handleChange}
                                placeholder="Build Year"
                                className="border p-2 rounded"
                                required
                            />
                            <input
                                type="text"
                                name="map_url"
                                value={formData.map_url}
                                onChange={handleChange}
                                placeholder="Map URL"
                                className="border p-2 rounded"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                    >
                        Submit Property
                    </button>
                </form>
            </div>

            <Footer />
        </>
    );
};

export default AddPropertyForm;
