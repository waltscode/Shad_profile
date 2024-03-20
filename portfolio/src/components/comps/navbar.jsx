import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DrawerDialogDemo } from '../comps/draw';
import { ModeToggle } from '../ui/mode-toggle';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';



export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 shadow w-full">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="/">
                            <Avatar>
                                <AvatarImage src="/images/home.png" />
                            </Avatar>
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
                                        <a href="/about" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                <img src="/images/profile-icon.png" alt="Resume Icon" className="small-avatar" />
                                                <span className="ml-2">About Me</span>
                                            </a>
                                            <a href="/portfolio" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                <img src="/images/folder.png" alt="Folder Icon" className="small-avatar" />
                                                <span className="ml-2">Portfolio</span>
                                            </a>
                                            <a href="/contact" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                <img src="/images/contact.png" alt="Contact Icon" className="small-avatar" />
                                                <span className="ml-2">Contact</span>
                                            </a>
                                            <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                <img src="/images/resume.png" alt="Resume Icon" className="small-avatar" />
                                                <span className="ml-2">Resume</span>
                                            </a>
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