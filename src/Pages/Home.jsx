import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './../assets/joanna-kosinska-RE-8WswW95o-unsplash.jpg';

const Home = () => {
    return (
        <div
            className='bg-cover bg-center h-full'
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}>
            <div className='bg-gray-900 bg-opacity-50 h-full flex flex-col justify-center items-center'>
                <h1 className='text-white text-5xl font-bold leading-tight text-center md:text-6xl lg:text-7xl xl:text-8xl'>
                    Welcome to <span className='text-indigo-400'>EduSite</span>
                </h1>
                <p className='mt-4 mb-8 px-10 text-white text-lg text-center md:text-2xl'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
                <Link
                    to='/courses'
                    className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-4 px-6 rounded-md transition-colors duration-300'>
                    Explore Courses
                </Link>
            </div>
        </div>
    );
};

export default Home;
