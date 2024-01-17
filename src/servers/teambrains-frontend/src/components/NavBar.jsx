import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo_teambrains.svg";

const NavBar = () => {
    return (
        <nav className="bg-white p-4 fixed w-full z-10 shadow-lg">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <NavLink to="/">
                    <img src={logo} alt="Logo" className="h-12 w-32 mr-2"/>
                    </NavLink>
                </div>

                <div className="flex-1 mx-4">
                    <input type="text" placeholder="Rechercher..." className="text-xs w-full p-2 rounded bg-gray-100"/>
                </div>

                <div className="flex items-center">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-green-tb px-4 py-2 rounded-md text-sm font-medium" : "text-gray-700 hover:text-green-tb px-4 py-2 rounded-md text-sm font-medium"}>Home</NavLink>
                    <NavLink to="/projets" className={({ isActive }) => isActive ? "text-green-tb px-4 py-2 rounded-md text-sm font-medium" : "text-gray-700 hover:text-green-tb px-4 py-2 rounded-md text-sm font-medium"}>Projets</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "text-green-tb px-4 py-2 rounded-md text-sm font-medium" : "text-gray-700 hover:text-green-tb px-4 py-2 rounded-md text-sm font-medium"}>Contact</NavLink>
                    <NavLink to="/connexion" className={({ isActive }) => isActive ? "text-green-tb px-4 py-2 rounded-md text-sm font-medium" : "text-gray-700 hover:text-green-tb px-4 py-2 rounded-md text-sm font-medium"}>Se connecter</NavLink>
                    <NavLink to="/inscription" className={({ isActive }) => isActive ? "bg-gray-600 text-white px-3 py-2 rounded-md text-sm font-medium" : "bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-600"}>S'inscrire</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
