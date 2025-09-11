import React, { useState } from 'react'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Button, Menu, MenuItem, IconButton } from '@mui/material';
import HouseIcon from "@mui/icons-material/House";
import SearchIcon from "@mui/icons-material/Search";
import PaidIcon from "@mui/icons-material/Paid";
import TuneIcon from "@mui/icons-material/Tune";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from 'react-router-dom';

function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
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

                <section className="max-w-[1500px] m-auto h-[80px]">
                    <div className="flex gap-x-4 items-center h-full px-4">
                        <Button
                            className="px-4 w-[600px] py-3.5"
                            variant="outlined"
                            startIcon={<HouseIcon />}
                        >
                            Enter an address, neighborhood, city, or ZIP code
                        </Button>

                        <Button
                            className="px-4 w-[130px] py-3.5"
                            variant="outlined"
                            startIcon={<CheckCircleIcon />}
                        >
                            Status
                        </Button>

                        <Button
                            className="px-4 w-[130px] py-3.5"
                            variant="outlined"
                            startIcon={<PaidIcon />}
                        >
                            Price
                        </Button>

                        <Button
                            className="px-4 w-[130px] py-3.5"
                            variant="outlined"
                            startIcon={<TuneIcon />}
                        >
                            Advanced
                        </Button>

                        <Button
                            className="px-4 py-3.5 w-[200px]"
                            variant="contained"
                            startIcon={<SearchIcon />}
                        >
                            Search
                        </Button>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Navbar;
