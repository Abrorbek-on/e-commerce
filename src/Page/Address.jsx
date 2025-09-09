import { useState } from "react"
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";


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
    })

    const amenitiesList = [
        "Air conditioning", "Barbeque", "Dryer", "Gym", "Laundry",
        "Lawn", "Microwave", "Outdoor Shower", "Refrigerator", "Stunning views",
        "Dining Room", "Fireplace", "Pets Allowed", "Unit Washer/Dryer", "Onsite Parking",
        "Waterfront", "Parking", "Doorman", "Central Heating", "Cleaning Service",
    ]

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleAmenityChange = (amenity) => {
        setFormData((prev) => {
            const isSelected = prev.amenities.includes(amenity)
            return {
                ...prev,
                amenities: isSelected
                    ? prev.amenities.filter((a) => a !== amenity)
                    : [...prev.amenities, amenity],
            }
        })
    }

    const handleFileChange = (e) => {
        setFormData({ ...formData, images: Array.from(e.target.files) })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Property Data:", formData)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-[#0f2937] text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <nav className="flex items-center justify-between h-16">
                        <div className="flex items-center">

                            <img src="assets/logo.png" alt="Houzing img" />
                        </div>
                        <div>
                            <ul className="flex text-white gap-[30px]">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/properties">Properties</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="w-8"></div>
                    </nav>w
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                    <h1 className="text-2xl font-semibold text-gray-900 mb-8">Add new property</h1>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div>
                            <h2 className="text-lg font-medium text-gray-900 mb-4">
                                Contact information
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="contactName"
                                    placeholder="Property title*"
                                    value={formData.contactName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md 
                                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <input
                                    type="text"
                                    name="contactType"
                                    placeholder="Type"
                                    value={formData.contactType}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md 
                                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div className="mt-4">
                                <textarea
                                    name="description"
                                    placeholder="Property Description*"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md 
                                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Additional</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <input
                                    type="text"
                                    name="propertyId"
                                    placeholder="Property ID"
                                    value={formData.propertyId}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <select
                                    name="parentProperty"
                                    value={formData.parentProperty}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="">Parent property</option>
                                    <option value="house">House</option>
                                    <option value="apartment">Apartment</option>
                                </select>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="">Status</option>
                                    <option value="available">Available</option>
                                    <option value="sold">Sold</option>
                                </select>

                                <input
                                    type="text"
                                    name="label"
                                    placeholder="Label"
                                    value={formData.label}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <input
                                    type="text"
                                    name="material"
                                    placeholder="Material"
                                    value={formData.material}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <input
                                    type="number"
                                    name="rooms"
                                    placeholder="Rooms"
                                    value={formData.rooms}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />

                                <input
                                    type="number"
                                    name="beds"
                                    placeholder="Beds"
                                    value={formData.beds}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <input
                                    type="number"
                                    name="baths"
                                    placeholder="Baths"
                                    value={formData.baths}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <input
                                    type="number"
                                    name="garages"
                                    placeholder="Garages"
                                    value={formData.garages}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />

                                <input
                                    type="text"
                                    name="yearBuild"
                                    placeholder="Year build"
                                    value={formData.yearBuild}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <input
                                    type="text"
                                    name="homeArea"
                                    placeholder="Home area (sqft)"
                                    value={formData.homeArea}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <input
                                    type="text"
                                    name="lotDimensions"
                                    placeholder="Lot dimensions"
                                    value={formData.lotDimensions}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />

                                <input
                                    type="text"
                                    name="lotArea"
                                    placeholder="Lot area (sqft)"
                                    value={formData.lotArea}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent md:col-span-3"
                                />
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="p-6 border rounded-lg bg-white shadow-sm">
                                <h2 className="text-lg font-medium text-gray-900 mb-4">Price</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="number"
                                        name="price"
                                        placeholder="Price ($)"
                                        value={formData.price}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <input
                                        type="text"
                                        name="pricePrefix"
                                        placeholder="Price Prefix"
                                        value={formData.pricePrefix}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <input
                                        type="text"
                                        name="priceSuffix"
                                        placeholder="Price Suffix"
                                        value={formData.priceSuffix}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <input
                                        type="text"
                                        name="priceCustom"
                                        placeholder="Price Custom"
                                        value={formData.priceCustom}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="p-6 border rounded-lg bg-white shadow-sm">
                                <h2 className="text-lg font-medium text-gray-900 mb-4">Location</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <input
                                        type="text"
                                        name="region"
                                        placeholder="Regions"
                                        value={formData.region}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <input
                                        type="text"
                                        name="location"
                                        placeholder="Friendly address"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />

                                </div>
                                <input
                                    type="text"
                                    name="location"
                                    placeholder="Map location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                /> <br /><br />

                                <div className="h-64 rounded-lg border border-gray-300 overflow-hidden">
                                    <iframe
                                        title="map"
                                        width="100%"
                                        height="100%"
                                        frameBorder="0"
                                        className="rounded-lg"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.49194870643!2d-82.6136!3d27.5006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c3130a5c7bbd3d%3A0x3f0d22c8961f0b4b!2sPalma%20Sola!5e0!3m2!1sen!2sus!4v1694253694689!5m2!1sen!2sus"
                                        allowFullScreen=""
                                        loading="lazy"
                                    ></iframe>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <input
                                        type="text"
                                        name="latitude"
                                        placeholder="Latitude"
                                        value={formData.latitude}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <input
                                        type="text"
                                        name="longitude"
                                        placeholder="Longitude"
                                        value={formData.longitude}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="p-6 border rounded-lg bg-white shadow-sm">
                                <h2 className="text-lg font-medium text-gray-900 mb-4">Media</h2>

                                <div className="grid grid-cols-3 gap-4 mb-4">
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center"
                                        >
                                            <span className="text-gray-400 text-sm">+</span>
                                        </div>
                                    ))}
                                </div>
                                <button className="px-4 py-2 mb-4 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50">
                                    Upload
                                </button>

                                <div className="mb-4">
                                    <p className="text-sm text-gray-700 mb-1">Gallery</p>
                                    <button className="px-4 py-2 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50">
                                        Upload
                                    </button>
                                </div>

                                <div className="mb-4">
                                    <p className="text-sm text-gray-700 mb-1">Attachment</p>
                                    <div className="flex items-center space-x-3 mb-2">
                                        <span className="text-gray-600 text-sm border px-3 py-1 rounded">
                                            test_property.pdf
                                        </span>
                                    </div>
                                    <button className="px-4 py-2 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50">
                                        Upload
                                    </button>
                                </div>

                                <input
                                    type="text"
                                    placeholder="Video link"
                                    value={formData.video}
                                    onChange={(e) => setFormData({ ...formData, video: e.target.value })}
                                    className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Virtual tour"
                                    value={formData.tour}
                                    onChange={(e) => setFormData({ ...formData, tour: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="p-6 border rounded-lg bg-white shadow-sm">
                                <h2 className="text-lg font-medium text-gray-900 mb-4">Amenities</h2>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    {amenitiesList.map((amenity) => (
                                        <label key={amenity} className="flex items-center space-x-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={formData.amenities.includes(amenity)}
                                                onChange={() => handleAmenityChange(amenity)}
                                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                            />
                                            <span className="text-sm text-gray-700">{amenity}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Select Energy Class</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input
                                    type="text"
                                    name="region"
                                    placeholder="Energy class"
                                    value={formData.region}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    name="location"
                                    placeholder="Energy Index in kWh/m2a"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />

                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-200"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    )
}
