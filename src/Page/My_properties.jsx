import React from "react";
import { Edit, Delete } from "@mui/icons-material";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function My_properties() {
    const listings = [
        {
            id: 1,
            title: "New Apartment Nice View",
            address: "Quincy St, Brooklyn, NY, USA",
            oldPrice: "$2,800/mo",
            price: "$7,500/mo",
            date: "30 December 2022",
            status: "Pending",
            views: 5933,
        },
        {
            id: 2,
            title: "New Apartment Nice View",
            address: "Quincy St, Brooklyn, NY, USA",
            oldPrice: "$2,800/mo",
            price: "$7,500/mo",
            date: "30 December 2022",
            status: "Pending",
            views: 5933,
        },
        {
            id: 3,
            title: "New Apartment Nice View",
            address: "Quincy St, Brooklyn, NY, USA",
            oldPrice: "$2,800/mo",
            price: "$7,500/mo",
            date: "30 December 2022",
            status: "Pending",
            views: 5933,
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
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/properties">Properties</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>


            <section className="max-w-[1500px] m-auto p-6">

                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">My properties</h2>
                    <input
                        type="text"
                        placeholder="Search"
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
                                {listings.map((listing) => (
                                    <tr key={listing.id} className="">
                                        <td className="p-3 flex items-center gap-3">
                                            <div className="relative w-20 h-16 bg-gray-300 flex items-center justify-center text-xs">
                                                IMG
                                                <span className="absolute top-1 left-1 bg-blue-600 text-white text-[10px] px-2 py-[2px] rounded">
                                                    Featured
                                                </span>
                                            </div>

                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm font-semibold">
                                                        {listing.title}
                                                    </span>
                                                    <span className="bg-gray-800 text-white text-[10px] px-2 py-[2px] rounded">
                                                        For Sale
                                                    </span>
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    {listing.address}
                                                </div>
                                                <div className="line-through text-gray-400 text-xs">
                                                    {listing.oldPrice}
                                                </div>
                                                <div className="text-blue-700 font-bold">
                                                    {listing.price}
                                                </div>
                                            </div>
                                        </td>

                                        <td className="p-3 text-sm">{listing.date}</td>

                                        <td className="p-3 text-sm">{listing.status}</td>

                                        <td className="p-3 text-sm">{listing.views}</td>

                                        <td className="p-3 flex gap-2">
                                            <Edit className="cursor-pointer text-gray-600 hover:text-blue-600" />
                                            <Delete className="cursor-pointer text-gray-600 hover:text-red-600" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>

            <Footer />
        </>
    );
}
