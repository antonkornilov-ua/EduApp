import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const linkDesktopClass = 'hover:bg-gray-200 rounded-md px-3 py-2 font-medium';
    const linkMobileClasses = 'hover:bg-gray-200 rounded-md block px-3 py-2 font-medium';

    return (
        <nav className='bg-white shadow-xl'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex items-center'>
                        <Link to='/' className='flex-shrink-0 text-indigo-400 font-bold text-2xl'>
                            EduSite
                        </Link>
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-10 flex space-x-4 '>
                            <Link to='/' className={linkDesktopClass}>
                                Home
                            </Link>
                            <Link to='/courses' className={linkDesktopClass}>
                                Courses
                            </Link>
                            <Link to='/maintenance' className={linkDesktopClass}>
                                About us
                            </Link>
                            <Link to='/maintenance' className={linkDesktopClass}>
                                Contact us
                            </Link>
                        </div>
                    </div>

                    <div className='md:hidden flex'>
                        <button
                            type='button'
                            className='text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600'
                            aria-label='toggle-menu'
                            onClick={toggle}>
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden `}>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <Link onClick={toggle} to='/' className={linkMobileClasses}>
                            Home
                        </Link>
                        <Link onClick={toggle} to='/courses' className={linkMobileClasses}>
                            Courses
                        </Link>
                        <Link onClick={toggle} to='/maintenance' className={linkMobileClasses}>
                            About us
                        </Link>
                        <Link onClick={toggle} to='/maintenance' className={linkMobileClasses}>
                            Contact us
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
