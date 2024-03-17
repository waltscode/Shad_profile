import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {DrawerDialogDemo} from '../comps/draw';
import {ModeToggle} from '../ui/mode-toggle';
import '../../assets/css/styles.css';
import {
    navigationMenuTriggerStyle,
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuContent,
    NavigationMenuTrigger,
    NavigationMenuLink,
    NavigationMenuIndicator,
    NavigationMenuViewport,
} from '../ui/navigation-menu'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 shadow w-full">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="/">
                            <img src="https://api.dicebear.com/8.x/bottts/png" alt="Logo" className="h-8 w-8 mr-2" />
                            <span className="text-white font-semibold">John Walters</span>
                        </a>
                    </div>
                    <div className="flex items-center space-x-4">
        <DrawerDialogDemo />
        <ModeToggle />
      </div>
                    <div className="md:block">
                        <div className="ml-4 flex items-center">
                            <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Menu</a>
                            <div className="relative ml-3">
                                <button
                                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring focus:ring-white"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        {isOpen ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        )}
                                    </svg>
                                </button>
                                {isOpen && (
                                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <a href="/portfolio" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Portfolio</a>
                                            <a href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Contact</a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Resume</a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}