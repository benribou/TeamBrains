import React from 'react';
import logo from "../assets/logo_teambrains.svg"

const NavBar = () => {
    return (
        <nav className="bg-white p-4 fixed w-full z-10 shadow-lg">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-12 w-32 mr-2"/>
                </div>

                <div className="flex-1 mx-4">
                    <input type="text" placeholder="Rechercher..." className="text-xs w-full p-2 rounded bg-gray-100"/>
                </div>

                <div className="flex items-center">
                    <a href="#" className="text-gray-700 hover:text-green-tb px-4 py-2 rounded-md text-sm font-medium">Home</a>
                    <a href="#" className="text-gray-700 hover:text-green-tb px-4 py-2 rounded-md text-sm font-medium">Projets</a>
                    <a href="#" className="text-gray-700 hover:text-green-tb px-4 py-2 rounded-md text-sm font-medium">Contact</a>
                    <a href="#" className="text-gray-700 hover:text-green-tb px-4 py-2 rounded-md text-sm font-medium">Se connecter</a>
                    <a href="#" className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-600">S'inscrire</a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
