import React from "react";
import { Link } from "react-router-dom";
import { FaBell, FaCog, FaUser, FaUserPlus } from "react-icons/fa";

const NavBar = () => {
    return (
        <nav className="bg-white shadow-lg ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="hidden md:flex md:items-center md:space-x-6"> {/* Increased spacing */}
                        <Link to="/notifications" className="text-gray-700 flex items-center space-x-2">
                            <FaBell size={24} color="#6b7280" />
                            <span>Notifications</span>
                        </Link>
                        <Link to="/settings" className="text-gray-700 flex items-center space-x-2">
                            <FaCog size={24} color="#6b7280" />
                            <span>Settings</span>
                        </Link>
                        <Link to="/profile" className="text-gray-700 flex items-center space-x-2">
                            <FaUser size={24} color="#6b7280" />
                            <span>Profile</span>
                        </Link>
                        <Link to="/requests" className="text-gray-700 flex items-center space-x-2">
                            <FaUserPlus size={24} color="#6b7280" />
                            <span>Requests</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;