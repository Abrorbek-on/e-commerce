import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Chiqish() {
    return (
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
                    <Link to="/login"><Button className="!w-[150px] !text-white !border" variant="Outlined">Login</Button></Link>
                </div>
            </nav>
        </header>


    )
}

export default Chiqish