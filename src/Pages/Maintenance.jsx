import React from 'react';
import { FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Maintenance = () => {
    return (
        <div className='flex flex-col h-full justify-center items-center'>
            <FaTools className='text-4xl mb-4' />
            <h1 className='text-2xl font-bold mb-2'>Site under maintenance</h1>
            <p className='text-lg text-center'>
                We are currently performing some technical work on our site. Please check back soon.
            </p>
            <Link
                to='/'
                className='mt-10 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-4 px-6 rounded-md transition-colors duration-300'>
                Back to Home
            </Link>
        </div>
    );
};

export default Maintenance;
