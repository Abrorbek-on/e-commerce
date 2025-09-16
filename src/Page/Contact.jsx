import { useState, useEffect } from "react";
import axios from "axios";
import {
    Dialog,
    DialogContent,
    Typography,
    CircularProgress,
    Card,
    CardContent,
    IconButton
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Menu, MenuItem } from "@mui/material";

function ContactModal({ open, onClose, loading, success }) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogContent sx={{ textAlign: "center", p: 4 }}>
                {loading ? (
                    <>
                        <CircularProgress size={60} sx={{ color: "green" }} />
                        <Typography mt={2} fontWeight="bold">
                            Yuborilmoqda...
                        </Typography>
                    </>
                ) : success ? (
                    <>
                        <CheckCircleIcon sx={{ fontSize: 60, color: "green" }} />
                        <Typography mt={2} fontWeight="bold">
                            Muvaffaqiyatli jo'natildi  <br />
                            Admin javobini kuting
                        </Typography>
                    </>
                ) : (
                    <>
                        <ErrorIcon sx={{ fontSize: 60, color: "red" }} />
                        <Typography mt={2} fontWeight="bold">
                            Xatolik yuz berdi
                        </Typography>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
}

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);
        setModalOpen(true);

        try {
            const res = await axios.post(
                "https://fn3.fixoo.uz/api/contact",
                formData,
                { headers: { "Content-Type": "application/json" } }
            );
            if (res.data.message.includes("yuborildi")) {
                setSuccess(true);
            } else {
                setSuccess(false);
            }
        } catch (err) {
            setSuccess(false);
        } finally {
            setLoading(false);
        }
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    useEffect(() => {
        if (success !== null && !loading) {
            const timer = setTimeout(() => {
                setModalOpen(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [success, loading]);

    useEffect(() => {
        if (success) {
            setFormData({ fullName: "", phone: "", message: "" });
        }
    }, [success]);

    return (
        <>
            <header className='max-w-[1920px] mx-auto bg-[#0d263b] h-[80px]'>
                <nav className='max-w-[1500px] m-auto flex justify-between items-center h-full'>
                    <div>
                        <img src="assets/logo.png" alt="Houzing img" />
                    </div>
                    <div>
                        <ul className="flex text-white gap-[30px]">
                            <li><Link to="/home">Home</Link></li>
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
                                <Link to="/" className='text-red-500'>Chiqish</Link>
                            </MenuItem>
                        </Menu>
                    </div>
                </nav>
            </header>

            <section>
                <div className="max-w-[1200px] m-auto mt-[20px]">
                    <a className="text-blue-500" href="">
                        Bog`lanish
                    </a>
                    <br />
                    <strong className="text-[35px]">
                        Savollaringiz bo`lsa murojaat qiling
                    </strong>
                </div>

                <div className="max-w-[1200px] m-auto justify-between flex gap-4 mt-[20px]">
                    <Card sx={{ minWidth: 350, boxShadow: 3 }}>
                        <CardContent>
                            <PhoneIcon color="primary" fontSize="large" />
                            <Typography variant="h6" fontWeight="bold">
                                Telefon
                            </Typography>
                            <Typography variant="body1">+998(90) 840 03 85</Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ minWidth: 350, boxShadow: 3 }}>
                        <CardContent>
                            <EmailIcon color="primary" fontSize="large" />
                            <Typography variant="h6" fontWeight="bold">
                                Elektron Pochta
                            </Typography>
                            <Typography variant="body1">abrorjonk9@gmail.com</Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ minWidth: 350, boxShadow: 3 }}>
                        <CardContent>
                            <LocationOnIcon color="primary" fontSize="large" />
                            <Typography variant="h6" fontWeight="bold">
                                Manzil
                            </Typography>
                            <Typography variant="body1">
                                Fergana vil, Fergana sh, <br /> Najot Talim
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section>
                <div className="max-w-[1200px] m-auto h-[600px] mt-[50px] border">
                    <strong className="text-[35px] flex justify-center pt-[50px]">
                        Murojaatlarni shu yerdan jo'nating!
                    </strong>

                    <form className="mt-[50px]" onSubmit={handleSubmit}>
                        <div className="text-center">
                            <label className="mr-[26%]">To'liq ismingizni kiriting</label>
                            <br />
                            <input
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="border rounded-sm border-gray-500 outline-none w-[40%] h-[50px] p-[15px]"
                                type="text"
                                placeholder="F.I.SH"
                                required
                            />
                        </div>
                        <br />

                        <div className="text-center">
                            <label className="mr-[35%]">Telefon</label>
                            <br />
                            <input
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="border rounded-sm border-gray-500 outline-none w-[40%] h-[50px] p-[15px]"
                                type="text"
                                placeholder="+998"
                                required
                            />
                        </div>
                        <br />

                        <div className="text-center">
                            <label className="mr-[36%]">Xabar</label>
                            <br />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="border rounded-sm border-gray-500 outline-none w-[40%] h-[100px] p-[15px]"
                                placeholder="Matn"
                                required
                            />
                        </div>
                        <br />

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-blue-500 text-white w-[40%] h-[40px] rounded-sm disabled:opacity-50"
                            >
                                {loading ? "Yuborilmoqda..." : "Yuborish"}
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <ContactModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                loading={loading}
                success={success}
            />

            <Footer />
        </>
    );
}
