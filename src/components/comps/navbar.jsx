import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { DrawerDemo} from './draw';
import { ModeToggle } from '../ui/mode-toggle';
import {  IcRoundHome, Menu } from './icons'
import { Button } from '../ui/button';



export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false); 
    };

    return (
        <nav className="bg-primary shadow w-full fixed z-40 top-0 sm:w-full">
            <div className="max-w-full sm:mx-full px-4 sm:px-6 lg:px-8 ">
                <div className="flex items-center md:justify-between h-16">
                    <div className="flex items-center mr-1 ">
                        <Button className='home-icon'>
                            <Link to="/">
                                <IcRoundHome />
                            </Link>
                        </Button>
                    </div>
                    <div className="flex items-center space-x-4 ml-2">
                        <ModeToggle />
                        <DrawerDemo />
                    </div>
                    <Button>
                        <div className="">
                            <div className="ml-2 flex items-center">
                                <div className="relative ml-1" ref={menuRef}>
                                    <Menu
                                        className="bg-primary  rounded-full  hover:text-white focus:outline-none focus:ring focus:ring-white home-icon"
                                        onClick={handleMenuClick}
                                    >
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            {isOpen ? (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            ) : (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            )}
                                        </svg>
                                    </Menu>
                                    {isOpen && (
                                        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                <Link to="/portfolio" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" onClick={handleLinkClick}>
                                                    <img src="/images/folder.png" alt="Folder Icon" className="small-avatar" />
                                                    <span className="ml-2">Portfolio</span>
                                                </Link>
                                                <Link to="/about" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" onClick={handleLinkClick}>
                                                    <img src="/images/profile-icon.png" alt="Resume Icon" className="small-avatar" />
                                                    <span className="ml-2">About Me</span>
                                                </Link>
                                                <Link to="/contact" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" onClick={handleLinkClick}>
                                                    <img src="/images/contact.png" alt="Contact Icon" className="small-avatar" />
                                                    <span className="ml-2">Contact</span>
                                                </Link>
                                               
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Button>
                </div>
            </div>
        </nav>
    );
}