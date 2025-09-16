import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Button, Avatar } from "@mui/material";
import { Star } from "@mui/icons-material";
import { IconButton, Checkbox } from "@mui/material";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import Favorite from "@mui/icons-material/Favorite";
import Garage from "@mui/icons-material/DirectionsCar";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Menu, MenuItem } from "@mui/material";
import {
    Bed,
    Bathtub,
    DirectionsCar,
    SquareFoot,
    CalendarToday,
    Download,
    CheckCircle,
    Share,
    FavoriteBorder,
} from "@mui/icons-material";
import Footer from "../Components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import axios from "axios";


export default function PropertyPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const propertyId = queryParams.get("id");
    console.log("Property ID:", propertyId);



    const [reviews, setReviews] = useState([]);
    const [ratings, setRatings] = useState([]);
    const [properties, setProperties] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const features = [
        "Air Conditioning",
        "Lawn",
        "Refrigerator",
        "Washer",
        "Barbeque",
        "Laundry",
        "Sauna",
        "WiFi",
        "Dryer",
        "Microwave",
        "Swimming Pool",
        "Window Coverings",
        "Gym",
        "Outdoor Shower",
        "TV Cable",
        "Dining room",
    ];
    useEffect(() => {
        const fetchReviews = async () => {
            try {

                const res = await axios.get(`http://localhost:4000/ratings/accommodation/${propertyId}`);
                console.log("Reviews data:", res.data);
                console.log("Property ID:", propertyId);


                setReviews(res.data);
            } catch (err) {
                console.error("❌ Error fetching reviews:", err);
            }
        };
        fetchReviews();
    }, [propertyId]);


    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const res = await axios.get("http://localhost:4000/accommodations");
                setProperties(res.data);
            } catch (err) {
                console.error("Error fetching properties:", err);
            }
        };
        fetchProperties();
    }, []);

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);



    const [formData, setFormData] = useState({
        clean: 0,
        location: 0,
        communicate: 0,
        comment: ""
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            clean: 5.4,
            location: 5,
            communicate: 4,
            comment: "Juda yaxshi uy",
            user_id: "5cb73ce6-13fa-409e-abfc-5f8d778118a5",
            accommodation_id: "c1857ebb-e5ee-423a-9493-ecaa3b70eaae",
        };


        try {
            const res = await axios.post('http://localhost:4000/ratings', payload);
            console.log('✅ Success:', res.data);
            setReviews(prev => [...prev, res.data]);
        } catch (error) {
            console.error('❌ Error details:', error.response?.data || error.message);
            console.log('✅ Success:', res.data);

        }
    };






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
                                <Link to="/home">Home</Link>
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
                                <Link to="/" className='text-red-500'>Chiqish</Link>
                            </MenuItem>
                        </Menu>

                    </div>
                </nav>
            </header>

            <div className="min-h-screen flex justify-center p-6">
                <div className="max-w-[1500px] w-full bg-white rounded-2xl shadow-lg p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-2">
                                    <img
                                        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                                        alt="Main"
                                        className="w-full h-[420px] object-cover rounded-xl"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                                        alt="1"
                                        className="w-full h-[200px] object-cover rounded-xl"
                                    />
                                    <img
                                        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                                        alt="2"
                                        className="w-full h-[200px] object-cover rounded-xl"
                                    />
                                    <img
                                        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                                        alt="3"
                                        className="w-full h-[200px] object-cover rounded-xl"
                                    />
                                    <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                                            alt="more"
                                            className="w-full h-full object-cover brightness-50"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold">
                                            +15
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center">
                                <div>
                                    <h1 className="text-2xl font-bold">
                                        Luxury Family Loft by Victoria Park
                                    </h1>
                                    <p className="text-gray-500 mt-1">
                                        Quincy St, Brooklyn, NY, USA
                                    </p>
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

                                <div className="ml-auto flex items-center gap-3">
                                    <button className="flex items-center gap-2 px-3 py-2 rounded-full border text-sm">
                                        <Share fontSize="small" /> Share
                                    </button>
                                    <button className="flex items-center gap-2 px-3 py-2 rounded-full border text-sm">
                                        <FavoriteBorder fontSize="small" /> Save
                                    </button>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h2 className="font-semibold text-lg">Description</h2>
                                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                                    Occupying over 8,000 square feet, perched over 1,100 feet in
                                    the air with breathtaking panoramic 360-degree views of New
                                    York City and the tri-state area, this loft has been
                                    completely reimagined by one of the most sought-after design
                                    houses in London...
                                </p>
                                <button className="text-blue-600 mt-2 text-sm font-medium">
                                    Show more
                                </button>
                            </div>

                            <div className="mt-8 border-t pt-6">
                                <h3 className="font-medium mb-4">Documents</h3>
                                <div className="flex flex-wrap gap-6 items-center">
                                    {["test_property.pdf", "floor_plan.pdf", "inspection.pdf"].map(
                                        (f, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg shadow-sm"
                                            >
                                                <Download />
                                                <div className="text-sm">
                                                    <div className="font-medium text-gray-800">{f}</div>
                                                    <a
                                                        href="#"
                                                        className="text-blue-600 text-xs hover:underline"
                                                    >
                                                        DOWNLOAD
                                                    </a>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>

                        <aside className="lg:col-span-1">
                            <div className="sticky top-6 space-y-4">
                                <div className="border rounded-xl p-4 shadow-sm bg-white">
                                    <div className="flex items-center gap-4">
                                        <Avatar
                                            alt="Agent"
                                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
                                        />
                                        <div>
                                            <div className="font-medium">Darrel Steward</div>
                                            <div className="text-xs text-gray-500">
                                                (123)456-7890
                                            </div>
                                        </div>
                                    </div>

                                    <form className="mt-4 space-y-3">
                                        <input
                                            placeholder="Name"
                                            className="w-full border rounded px-3 py-2 text-sm"
                                        />
                                        <input
                                            placeholder="Phone"
                                            className="w-full border rounded px-3 py-2 text-sm"
                                        />
                                        <input
                                            placeholder="Email"
                                            className="w-full border rounded px-3 py-2 text-sm"
                                        />
                                        <textarea
                                            placeholder="Message"
                                            className="w-full border rounded px-3 py-2 text-sm h-20"
                                        />
                                        <label className="flex items-center gap-2 text-xs text-gray-600">
                                            <input type="checkbox" />
                                            By submitting this form I agree to Terms of Use
                                        </label>
                                        <button
                                            type="button"
                                            className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2"
                                        >
                                            Send request
                                        </button>
                                    </form>
                                </div>

                                <div className="border rounded-xl p-4 shadow-sm bg-white text-sm text-gray-600">
                                    <div className="mb-3">More info</div>
                                    <div className="text-xs">Listed: 12 Apr 2025</div>
                                    <div className="text-xs mt-2">Property ID: 432PA-82</div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>

            <div className="max-w-[1500px] mx-auto p-6 bg-white rounded-xl shadow-sm mt-10">
                <h2 className="text-xl font-semibold mb-4">Location</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 text-sm text-gray-700 mb-4">
                    <p>
                        <strong>Address:</strong> 329 Queensberry Street
                    </p>
                    <p>
                        <strong>City:</strong> Jersey City
                    </p>
                    <p>
                        <strong>Area:</strong> Greenville
                    </p>
                    <p>
                        <strong>State/County:</strong> Washington
                    </p>
                    <p>
                        <strong>Zip:</strong> 365448
                    </p>
                    <p>
                        <strong>Country:</strong> United States
                    </p>
                </div>

                <div className="w-full h-[300px] mb-8">
                    <iframe
                        title="map"
                        src="https://maps.google.com/maps?q=washington&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        className="w-full h-full rounded-lg"
                    ></iframe>
                </div>

                <h2 className="text-xl font-semibold mb-4">Property Details</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 text-sm text-gray-700 mb-8">
                    <p>
                        <strong>Property ID:</strong> H227
                    </p>
                    <p>
                        <strong>Bedrooms:</strong> 8
                    </p>
                    <p>
                        <strong>Property Type:</strong> Apartment
                    </p>
                    <p>
                        <strong>Price:</strong> $130,000
                    </p>
                    <p>
                        <strong>Bathrooms:</strong> 6
                    </p>
                    <p>
                        <strong>Property Status:</strong> For Sale
                    </p>
                    <p>
                        <strong>Property Size:</strong> 1560 Sq Ft
                    </p>
                    <p>
                        <strong>Garage:</strong> 4
                    </p>
                    <p>
                        <strong>Year Built:</strong> 2021-01-09
                    </p>
                    <p>
                        <strong>Garage Size:</strong> 200 Sq Ft
                    </p>
                </div>

                <h2 className="text-xl font-semibold mb-4">Features</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-gray-700 mb-8">
                    {features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                            {f}
                        </div>
                    ))}
                </div>

                <h2 className="text-xl font-semibold mb-4">Schedule A Tour</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">Date</label>
                        <input
                            type="date"
                            className="w-full border rounded px-3 py-2 text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">Time</label>
                        <select className="w-full border rounded px-3 py-2 text-sm">
                            <option>10:00 am</option>
                            <option>12:00 pm</option>
                            <option>02:00 pm</option>
                            <option>04:00 pm</option>
                        </select>
                    </div>
                </div>

            </div>

            <div className="max-w-[1500px] mx-auto bg-white rounded-xl shadow-sm p-6 mt-10">
                <h2 className="text-xl font-semibold mb-4">4.67 (14 reviews)</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {ratings.map((r, i) => (
                        <div key={i}>
                            <div className="flex justify-between text-sm text-gray-700">
                                <span>{r.name}</span>
                                <span>{r.value}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded h-2 mt-1">
                                <div
                                    className="bg-blue-500 h-2 rounded"
                                    style={{ width: `${(r.value / 5) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    {reviews.length > 0 ? (
                        reviews.map((rev) => (
                            <div key={rev.id} className="border rounded-xl p-4 shadow-sm">
                                <div className="flex items-center gap-3 mb-2">
                                    <Avatar src={rev.user?.avatar || "https://i.pravatar.cc/40"} />
                                    <div>
                                        <div className="font-medium">
                                            {rev.user?.firstName ? `${rev.user.firstName} ${rev.user.lastName}` : "Anonymous"}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center text-yellow-500 mb-2">
                                    {[...Array(Math.round((rev.clean + rev.location + rev.communicate) / 3))].map((_, i) => (
                                        <Star key={i} fontSize="small" />
                                    ))}
                                    <span className="text-xs text-gray-500 ml-2">
                                        ({((rev.clean + rev.location + rev.communicate) / 3).toFixed(1)} stars)
                                    </span>
                                </div>

                                <p className="text-gray-600 text-sm">{rev.comment || "Hali review yo‘q"}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-sm">Hali review yo‘q</p>
                    )}

                </div>



                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {ratings.map((r, i) => (
                        <div key={i}>
                            <div className="flex justify-between text-sm text-gray-700">
                                <span>{r.name}</span>
                                <span>{r.value.toFixed(1)}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded h-2 mt-1">
                                <div
                                    className="bg-blue-500 h-2 rounded"
                                    style={{ width: `${(r.value / 5) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Cleanliness</label>
                        <input
                            type="number"
                            name="clean"
                            value={formData.clean}
                            onChange={(e) =>
                                setFormData({ ...formData, clean: parseFloat(e.target.value) })
                            }
                            min={0}
                            max={5}
                            step={0.1}
                            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <input
                            type="number"
                            name="location"
                            value={formData.location}
                            onChange={(e) =>
                                setFormData({ ...formData, location: parseFloat(e.target.value) })
                            }
                            min={0}
                            max={5}
                            step={0.1}
                            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Communication</label>
                        <input
                            type="number"
                            name="communicate"
                            value={formData.communicate}
                            onChange={(e) =>
                                setFormData({ ...formData, communicate: parseFloat(e.target.value) })
                            }
                            min={0}
                            max={5}
                            step={0.1}
                            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Comment</label>
                        <textarea
                            name="comment"
                            value={formData.comment}
                            onChange={(e) =>
                                setFormData({ ...formData, comment: e.target.value })
                            }
                            rows={4}
                            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 text-sm"
                            placeholder="Write your review..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded"
                    >
                        Send your review
                    </button>
                </form>


            </div>

            <div className="max-w-[1500px] m-auto mt-[50px]">

                <section className="py-10">
                    <div className="text-center">
                        <p className="text-[30px]">Recommended</p>
                        <h1 className="text-gray-500">
                            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
                        </h1>
                    </div>
                    <div className="max-w-[1200px] m-auto mt-[20px]">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
                            navigation={true}
                            modules={[Navigation]}
                            loop={properties.length > 3}
                        >

                            {properties.map((item) => {
                                const avgRating = item.Rating?.length
                                    ? item.Rating.reduce((sum, r) => sum + r.clean, 0) / item.Rating.length
                                    : null;
                                return (
                                    <SwiperSlide key={item.id}>
                                        <div className="w-[350px] overflow-hidden shadow-lg bg-white rounded-lg">
                                            <div className="relative">
                                                <img
                                                    src={
                                                        item.house_img?.[0] || "https://via.placeholder.com/350x200"
                                                    }
                                                    alt={item.title}
                                                    className="w-full h-[200px] object-cover"
                                                />
                                                <div className="absolute top-3 left-3 flex gap-2">
                                                    {item.featured && (
                                                        <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                                            FEATURED
                                                        </span>
                                                    )}
                                                    <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                                        {item.listing_type.toUpperCase()}
                                                    </span>
                                                    <span className="bg-gray-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                                        {item.Category?.name}
                                                    </span>
                                                </div>
                                                <div className="absolute bottom-[-20px] right-4">
                                                    <img
                                                        src={item.User?.avatar || "https://i.pravatar.cc/40"}
                                                        alt="profile"
                                                        className="w-10 h-10 rounded-full border-2 border-white"
                                                    />
                                                </div>
                                            </div>

                                            <div className="p-4">
                                                <h2 className="text-lg font-bold">{item.title}</h2>
                                                <p className="text-gray-500 text-sm">{item.location}</p>
                                                <p className="text-yellow-500">{avgRating} ★</p>

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
                                                            ${item.price}
                                                        </p>
                                                        <p className="text-blue-700 font-bold text-lg">
                                                            ${item.total_price}
                                                        </p>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <Link to={`/product_view`}>
                                                            <IconButton size="small">
                                                                <ArrowOutward fontSize="small" />
                                                            </IconButton>
                                                        </Link>



                                                        <Checkbox
                                                            color="error"
                                                            icon={<FavoriteBorder />}
                                                            checkedIcon={<Favorite />}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </section>

            </div>

            <Footer />
        </>
    );
}
