import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import {
    Bed,
    Bathtub,
    DirectionsCar,
    SquareFoot,
    CalendarToday,
    Download,
    CheckCircle,
    Star,
} from "@mui/icons-material";
import Footer from "../Components/Footer";

export default function PropertyPage() {
    const similarListings = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
            title: "New Apartment Nice View",
            address: "Quincy St, Brooklyn, NY, USA",
            price: "$2,800/mo",
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1600585154154-0c3d2f1b99d3",
            title: "Modern House with Garden",
            address: "Palm St, Miami, FL, USA",
            price: "$5,500/mo",
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1600585154575-3c94c4d4db01",
            title: "Family House with Pool",
            address: "Sunset Blvd, LA, CA, USA",
            price: "$7,200/mo",
        },
    ];

    const reviews = [
        {
            id: 1,
            user: "Courtney Henry",
            img: "https://randomuser.me/api/portraits/women/44.jpg",
            rating: 5,
            date: "March 12, 2024",
            comment:
                "This apartment was amazing! The view is spectacular, and the location is perfect. Totally worth it.",
        },
        {
            id: 2,
            user: "Jane Cooper",
            img: "https://randomuser.me/api/portraits/women/68.jpg",
            rating: 4,
            date: "April 5, 2024",
            comment:
                "Good overall, but the furniture could be better. Agent was very helpful though!",
        },
    ];

    return (
        <>
            <header className="max-w-[1920px] mx-auto bg-[#0d263b] h-[80px]">
                <nav className="max-w-[1500px] m-auto flex justify-between items-center h-full">
                    <div>
                        <img src="assets/logo.png" alt="Houzing img" />
                    </div>
                    <div>
                        <ul className="flex text-white gap-[30px]">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/properties">Properties</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Link to="/login">
                            <Button
                                className="!w-[150px] !text-white !border"
                                variant="outlined"
                            >
                                Login
                            </Button>
                        </Link>
                    </div>
                </nav>
            </header>

            <div className="min-h-screen bg-gray-100 flex justify-center p-6">
                <div className="max-w-[1500px] w-full bg-white rounded-2xl shadow-lg p-6">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                            <img
                                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                                alt="Main"
                                className="w-full h-[400px] object-cover rounded-xl"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                                alt="1"
                                className="w-full h-[190px] object-cover rounded-xl"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                                alt="2"
                                className="w-full h-[190px] object-cover rounded-xl"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                                alt="3"
                                className="w-full h-[190px] object-cover rounded-xl"
                            />
                            <div className="w-full h-[190px] bg-black bg-opacity-50 flex items-center justify-center text-white text-xl font-semibold rounded-xl">
                                +15
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div>
                            <h1 className="text-2xl font-bold">
                                Luxury Family Loft by Victoria Park
                            </h1>
                            <p className="text-gray-500">Quincy St, Brooklyn, NY, USA</p>
                        </div>
                        <div className="text-right mt-4 md:mt-0">
                            <p className="line-through text-gray-400">$2,800/mo</p>
                            <p className="text-2xl font-bold text-blue-600">$7,500/mo</p>
                            <p className="text-sm text-gray-500">Est. Mortgage</p>
                        </div>
                    </div>

                    <div className="flex gap-6 text-gray-600 mt-4 text-sm flex-wrap">
                        <span className="flex items-center gap-1">
                            <Bed fontSize="small" /> 4 Beds
                        </span>
                        <span className="flex items-center gap-1">
                            <Bathtub fontSize="small" /> 5 Baths
                        </span>
                        <span className="flex items-center gap-1">
                            <DirectionsCar fontSize="small" /> 1 Garage
                        </span>
                        <span className="flex items-center gap-1">
                            <SquareFoot fontSize="small" /> 1200 Sq Ft
                        </span>
                        <span className="flex items-center gap-1">
                            <CalendarToday fontSize="small" /> Year Built: 1800
                        </span>
                    </div>

                    <div className="mt-6">
                        <h2 className="font-semibold text-lg">Description</h2>
                        <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                            Occupying over 8,000 square feet, perched over 1,100 feet in the
                            air with breathtaking panoramic 360-degree views of New York City
                            and the tri-state area, this loft has been completely reimagined
                            by one of the most sought-after design houses in London...
                        </p>
                        <button className="text-blue-600 mt-2 text-sm font-medium">
                            Show more
                        </button>
                    </div>

                    <div className="mt-10">
                        <h2 className="font-semibold text-lg mb-3">Documents</h2>
                        <div className="flex gap-8 text-sm items-center flex-wrap">
                            {["doc1.pdf", "doc2.pdf", "doc3.pdf"].map((doc, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <Download fontSize="small" /> <span>{doc}</span>
                                    <a href="#" className="text-blue-600 font-medium">
                                        DOWNLOAD
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10">
                        <h2 className="font-semibold text-lg mb-3">Location</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
                            <p>
                                <span className="font-semibold">Address:</span> 329 Queensberry
                                Street
                            </p>
                            <p>
                                <span className="font-semibold">City:</span> Jersey City
                            </p>
                            <p>
                                <span className="font-semibold">Area:</span> Greenville
                            </p>
                            <p>
                                <span className="font-semibold">State/County:</span> Washington
                            </p>
                            <p>
                                <span className="font-semibold">Zip:</span> 365448
                            </p>
                            <p>
                                <span className="font-semibold">Country:</span> United States
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
                        <p>
                            <span className="font-semibold">Property ID:</span> 1234
                        </p>
                        <p>
                            <span className="font-semibold">Bathrooms:</span> 5
                        </p>
                        <p>
                            <span className="font-semibold">Property Type:</span> Apartment
                        </p>
                        <p>
                            <span className="font-semibold">Property Status:</span> For Rent
                        </p>
                        <p>
                            <span className="font-semibold">Property Size:</span> 1200 Sq Ft
                        </p>
                        <p>
                            <span className="font-semibold">Garage:</span> 1
                        </p>
                        <p>
                            <span className="font-semibold">Year Built:</span> 2020
                        </p>
                        <p>
                            <span className="font-semibold">Rooms:</span> 6
                        </p>
                    </div>

                    <div className="mt-10">
                        <h2 className="font-semibold text-lg mb-3">Features</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-gray-700">
                            {[
                                "Air Conditioning",
                                "Lawn",
                                "Swimming Pool",
                                "TV Cable",
                                "Washer",
                                "Dryer",
                                "Outdoor Shower",
                                "Gym",
                            ].map((feature, i) => (
                                <span key={i} className="flex items-center gap-1">
                                    <CheckCircle fontSize="small" color="success" /> {feature}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10">
                        <h2 className="font-semibold text-lg mb-3">Schedule a Tour</h2>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <input type="date" className="border rounded-lg px-3 py-2" />
                            <input type="time" className="border rounded-lg px-3 py-2" />
                            <input
                                type="text"
                                placeholder="Name"
                                className="border rounded-lg px-3 py-2"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="border rounded-lg px-3 py-2"
                            />
                            <textarea
                                rows="3"
                                placeholder="Enter Your Message"
                                className="border rounded-lg px-3 py-2 md:col-span-2"
                            ></textarea>
                            <Button
                                variant="contained"
                                className="!bg-blue-600 !text-white md:col-span-2"
                            >
                                Submit a Tour Request
                            </Button>
                        </form>
                    </div>

                    <div className="mt-10">
                        <h2 className="font-semibold text-lg mb-3">Rating & Reviews</h2>
                        <div className="flex gap-10 text-sm">
                            <div>
                                <p className="font-bold text-2xl">4.7</p>
                                <p className="text-gray-500">Average Rating</p>
                            </div>
                            <div className="flex-1">
                                {[5, 4, 3, 2, 1].map((star, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <span>
                                            {star} <Star fontSize="small" />
                                        </span>
                                        <div className="bg-gray-200 h-2 rounded flex-1">
                                            <div className="bg-blue-600 h-2 rounded w-[70%]"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        {reviews.map((r) => (
                            <div key={r.id} className="border-b py-4 flex gap-4">
                                <img
                                    src={r.img}
                                    alt={r.user}
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-semibold">{r.user}</h3>
                                        <span className="text-sm text-gray-500">{r.date}</span>
                                    </div>
                                    <div className="flex gap-1 text-yellow-500">
                                        {[...Array(r.rating)].map((_, i) => (
                                            <Star key={i} fontSize="small" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 text-sm mt-1">{r.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10">
                        <h2 className="font-semibold text-lg mb-3">Write a Review</h2>
                        <form className="flex flex-col gap-3 text-sm">
                            <input
                                type="text"
                                placeholder="Name"
                                className="border rounded-lg px-3 py-2"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="border rounded-lg px-3 py-2"
                            />
                            <textarea
                                rows="3"
                                placeholder="Write your review..."
                                className="border rounded-lg px-3 py-2"
                            ></textarea>
                            <Button variant="contained" className="!bg-blue-600 !text-white">
                                Submit Review
                            </Button>
                        </form>
                    </div>

                    <div className="mt-10">
                        <h2 className="font-semibold text-lg mb-3">Similar Listings</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {similarListings.map((listing) => (
                                <div
                                    key={listing.id}
                                    className="border rounded-xl shadow-sm overflow-hidden"
                                >
                                    <img
                                        src={listing.img}
                                        alt={listing.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="font-semibold">{listing.title}</h3>
                                        <p className="text-gray-500 text-sm">{listing.address}</p>
                                        <p className="text-blue-600 font-bold mt-2">
                                            {listing.price}
                                        </p>
                                        <Link to={`/property/${listing.id}`}>
                                            <Button
                                                size="small"
                                                className="!mt-2 !bg-blue-600 !text-white"
                                            >
                                                View Details
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
