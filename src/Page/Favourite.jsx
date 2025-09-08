import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { IconButton, Checkbox, Button } from "@mui/material";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Bed from "@mui/icons-material/Hotel";
import Bathtub from "@mui/icons-material/Bathtub";
import Garage from "@mui/icons-material/DirectionsCar";
import SquareFoot from "@mui/icons-material/SquareFoot";
import { Link } from 'react-router-dom';
import PermIdentityIcon from "@mui/icons-material/PermIdentity";


function Favourite() {
    const properties = [
        {
            id: 1,
            title: "New Apartment Nice View",
            address: "Quincy St, Brooklyn, NY, USA",
            img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80",
            oldPrice: "$2,800/mo",
            newPrice: "$7,500/mo",
        },
        {
            id: 2,
            title: "Luxury Villa With Pool",
            address: "Beverly Hills, CA, USA",
            img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1350&q=80",
            oldPrice: "$3,500/mo",
            newPrice: "$9,200/mo",
        },
        {
            id: 3,
            title: "Cozy Family House",
            address: "Austin, TX, USA",
            img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1350&q=80",
            oldPrice: "$1,800/mo",
            newPrice: "$4,500/mo",
        },
        {
            id: 4,
            title: "Luxury Villa With Pool",
            address: "Beverly Hills, CA, USA",
            img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1350&q=80",
            oldPrice: "$3,500/mo",
            newPrice: "$9,200/mo",
        },
        {
            id: 5,
            title: "Cozy Family House",
            address: "Austin, TX, USA",
            img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1350&q=80",
            oldPrice: "$1,800/mo",
            newPrice: "$4,500/mo",
        },
        {
            id: 6,
            title: "Cozy Family House",
            address: "Austin, TX, USA",
            img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1350&q=80",
            oldPrice: "$1,800/mo",
            newPrice: "$4,500/mo",
        },]
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
                        <Button className="!w-[150px] !text-white !border"  variant="Outlined">Login</Button>
                    </div>
                </nav>
            </header>

            <div className="max-w-[1500px] m-auto mt-[50px]">

                <section className="py-10">
                    <div className="text-center">
                        <p className="text-[30px]">Favourite</p>
                        <h1 className="text-gray-500">
                            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
                        </h1>
                    </div>

                    <div className="max-w-[1200px] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-[50px] gap-6">
                        {properties.map((item) => (
                            <div
                                key={item.id}
                                className="w-[350px] overflow-hidden shadow-lg bg-white"
                            >
                                <div className="relative">
                                    <img
                                        src={item.img}
                                        alt="House"
                                        className="w-full h-[200px] object-cover"
                                    />

                                    <div className="absolute top-3 left-3 flex gap-2">
                                        <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                            FEATURED
                                        </span>
                                        <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                            FOR SALE
                                        </span>
                                    </div>

                                    <div className="absolute bottom-[-20px] right-4">
                                        <img
                                            src="https://i.pravatar.cc/40"
                                            alt="profile"
                                            className="w-10 h-10 rounded-full border-2 border-white"
                                        />
                                    </div>
                                </div>

                                <div className="p-4">
                                    <h2 className="text-lg font-bold">{item.title}</h2>
                                    <p className="text-gray-500 text-sm">{item.address}</p>

                                    <div className="flex justify-between text-gray-600 text-sm mt-3">
                                        <div className="flex flex-col items-center">
                                            <Bed fontSize="small" />
                                            <span>4 Beds</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <Bathtub fontSize="small" />
                                            <span>5 Baths</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <Garage fontSize="small" />
                                            <span>1 Garage</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <SquareFoot fontSize="small" />
                                            <span>1200 Sq Ft</span>
                                        </div>
                                    </div>

                                    <hr className="text-gray-400 mt-2" />

                                    <div className="mt-4 flex justify-between items-center">
                                        <div>
                                            <p className="text-gray-400 line-through text-sm">
                                                {item.oldPrice}
                                            </p>
                                            <p className="text-blue-700 font-bold text-lg">
                                                {item.newPrice}
                                            </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <IconButton size="small">
                                                <ArrowOutward fontSize="small" />
                                            </IconButton>
                                            <div>
                                                <Checkbox
                                                    color="error"
                                                    icon={<FavoriteBorder />}
                                                    checkedIcon={<Favorite />}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>


            <Footer />
        </>
    )
}

export default Favourite