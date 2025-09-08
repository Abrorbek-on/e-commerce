import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function AddPropertyForm() {
    const [formData, setFormData] = useState({
        contactName: "",
        contactType: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        price: "",
        location: "",
        description: "",
        category: "",
        amenities: [],
        images: [],
    });

    const amenitiesList = [
        "Air conditioning",
        "Balcony",
        "Gym",
        "Swimming Pool",
        "Wi-Fi",
        "Parking",
        "Security",
        "Garden",
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAmenityChange = (amenity) => {
        setFormData((prev) => {
            const isSelected = prev.amenities.includes(amenity);
            return {
                ...prev,
                amenities: isSelected
                    ? prev.amenities.filter((a) => a !== amenity)
                    : [...prev.amenities, amenity],
            };
        });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, images: Array.from(e.target.files) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Property Data:", formData);
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

            <div className="flex justify-center bg-gray-100 py-10">
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
                    <h2 className="text-xl font-semibold mb-6">Add new property</h2>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div>
                            <h3 className="text-lg font-medium mb-4">Contact Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="contactName"
                                    placeholder="Contact name"
                                    value={formData.contactName}
                                    onChange={handleChange}
                                    className="border p-2 rounded w-full"
                                />
                                <input
                                    type="text"
                                    name="contactType"
                                    placeholder="Type"
                                    value={formData.contactType}
                                    onChange={handleChange}
                                    className="border p-2 rounded w-full"
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-4">Address</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="street"
                                    placeholder="Street"
                                    value={formData.street}
                                    onChange={handleChange}
                                    className="border p-2 rounded w-full"
                                />
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="border p-2 rounded w-full"
                                />
                                <input
                                    type="text"
                                    name="state"
                                    placeholder="State"
                                    value={formData.state}
                                    onChange={handleChange}
                                    className="border p-2 rounded w-full"
                                />
                                <input
                                    type="text"
                                    name="zip"
                                    placeholder="Zip code"
                                    value={formData.zip}
                                    onChange={handleChange}
                                    className="border p-2 rounded w-full"
                                />
                                <input
                                    type="text"
                                    name="country"
                                    placeholder="Country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="border p-2 rounded w-full col-span-2"
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-4">Price</h3>
                            <input
                                type="number"
                                name="price"
                                placeholder="Price ($)"
                                value={formData.price}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                            />
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-4">Location</h3>
                            <input
                                type="text"
                                name="location"
                                placeholder="Location (address or coordinates)"
                                value={formData.location}
                                onChange={handleChange}
                                className="border p-2 rounded w-full mb-4"
                            />
                            <div className="h-60 bg-gray-200 rounded flex items-center justify-center">
                                <span className="text-gray-500">Map placeholder</span>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-4">Media</h3>
                            <input
                                type="file"
                                multiple
                                onChange={handleFileChange}
                                className="w-full"
                            />
                            <div className="flex gap-2 mt-2">
                                {formData.images.length > 0 &&
                                    formData.images.map((file, index) => (
                                        <div
                                            key={index}
                                            className="w-20 h-20 bg-gray-300 flex items-center justify-center text-xs rounded"
                                        >
                                            {file.name}
                                        </div>
                                    ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-4">Description</h3>
                            <textarea
                                name="description"
                                placeholder="Write description..."
                                value={formData.description}
                                onChange={handleChange}
                                className="border p-2 rounded w-full h-28"
                            ></textarea>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-4">Amenities</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                {amenitiesList.map((amenity) => (
                                    <label key={amenity} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={formData.amenities.includes(amenity)}
                                            onChange={() => handleAmenityChange(amenity)}
                                        />
                                        {amenity}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-4">Select Category</h3>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                            >
                                <option value="">Choose category</option>
                                <option value="apartment">Apartment</option>
                                <option value="house">House</option>
                                <option value="office">Office</option>
                                <option value="villa">Villa</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            <Footer />

        </>
    );
}
