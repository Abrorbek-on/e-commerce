import { Email, Facebook, GitHub, Instagram, KeyboardArrowUp, LinkedIn, LocationOn, Telegram, Twitter } from '@mui/icons-material'
import { Phone } from 'lucide-react'
import React from 'react'

function Footer() {
    return (
        <footer className="bg-[#0f2c46] text-white pt-10 mt-[120px]">
            <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
                <div>
                    <h3 className="font-semibold mb-4">Contact Us</h3>
                    <div className="flex items-start mb-3">
                        <LocationOn className="text-blue-400 mr-2" />
                        <p className="text-sm">
                            Fergana vil. Toshloq tumani
                        </p>
                    </div>
                    <div className="flex items-center mb-3">
                        <Phone className="text-blue-400 mr-2" />
                        <p className="text-sm">+998 90 571 2009</p>
                    </div>
                    <div className="flex items-center mb-3">
                        <Email className="text-blue-400 mr-2" />
                        <p className="text-sm">abrorjonk9@gmail.com</p>
                    </div>

                    <div className="flex space-x-4 mt-4">
                        <a
                            href="https://t.me/ka0o9"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Telegram className="cursor-pointer hover:text-blue-400" />
                        </a>

                        <a
                            href="https://github.com/Abrorbek-on"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHub className="cursor-pointer hover:text-blue-400" />
                        </a>

                        <a
                            href="https://instagram.com/Abrorbek_09"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Instagram className="cursor-pointer hover:text-blue-400" />
                        </a>

                        <a
                            href="https://linkedin.com/in/Abrorbek Karimov"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedIn className="cursor-pointer hover:text-blue-400" />
                        </a>

                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Discover</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Chicago</li>
                        <li>Los Angeles</li>
                        <li>Miami</li>
                        <li>New York</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Lists by Category</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Apartments</li>
                        <li>Condos</li>
                        <li>Houses</li>
                        <li>Offices</li>
                        <li>Retail</li>
                        <li>Villas</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Lists by Category</h3>
                    <ul className="space-y-2 text-sm">
                        <li>About Us</li>
                        <li>Terms & Conditions</li>
                        <li>Support Center</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-10 py-4 px-6 flex justify-between items-center max-w-[1500px] m-auto">
                <div className="flex items-center space-x-2">
                    <img src="assets/logo.png" alt="" />
                </div>
                <p className="text-sm text-gray-400">
                    Copyright © 2021 CreativeLayers. All Right Reserved.
                </p>
                <button className="bg-blue-600 p-2 rounded">
                    <KeyboardArrowUp className="text-white" />
                </button>
            </div>
        </footer>

    )
}

export default Footer