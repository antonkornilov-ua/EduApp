import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';
import coursesList from './../helpers/coursesList';
import categoriesList from '../helpers/categoriesList';
import difficultiesList from '../helpers/difficultiesList';

import { FiSearch } from 'react-icons/fi';
import { MdFilterListAlt } from 'react-icons/md';

const Courses = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [selectedDifficulty, setSelectedDifficulty] = useState('All Levels');

    const handleCategoryChange = (category) => setSelectedCategory(category);

    const handleDifficultyChange = (difficulty) => setSelectedDifficulty(difficulty);

    const filteredCourses = coursesList.filter(
        (course) =>
            (selectedCategory === 'All Categories' || course.category === selectedCategory) &&
            (selectedDifficulty === 'All Levels' || course.difficulty === selectedDifficulty) &&
            (course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                course.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    return (
        <div className='bg-gray-100'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='flex md:justify-around items-center flex-col md:flex-row gap-6 mb-8'>
                    <div className='max-w-lg w-64 relative'>
                        <span className='absolute pt-2 pl-3 flex items-center'>
                            <FiSearch className='h-5 w-5 text-gray-500' />
                        </span>
                        <input
                            type='text'
                            className='block w-full bg-white border border-gray-400 rounded-md py-2 px-10 pr-8 text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 sm:text-sm'
                            placeholder='Search by keyword'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className='max-w-lg w-64 relative'>
                        <span className='absolute pt-2 pl-3 flex items-center'>
                            <MdFilterListAlt className='h-5 w-5 text-gray-500' />
                        </span>
                        <select
                            className='block w-full appearance-none bg-white border border-gray-400 text-gray-700 py-2 px-10 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-blue-400 focus:shadow-outline-blue sm:text-sm sm:leading-5'
                            value={selectedDifficulty}
                            onChange={(e) => handleDifficultyChange(e.target.value)}>
                            {difficultiesList.map((difficulty) => (
                                <option key={difficulty} value={difficulty}>
                                    {difficulty}
                                </option>
                            ))}
                        </select>
                        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                            <svg className='h-5 w-5' viewBox='0 0 20 20' fill='none' stroke='currentColor'>
                                <path d='M7 7l3-3 3 3m0 6l-3 3-3-3' />
                            </svg>
                        </div>
                    </div>
                    <div className='max-w-lg w-64 relative'>
                        <span className='absolute pt-2 pl-3 flex items-center'>
                            <MdFilterListAlt className='h-5 w-5 text-gray-500' />
                        </span>
                        <select
                            className='block w-full appearance-none  bg-white border border-gray-400 text-gray-700 py-2 px-10 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-blue-400 focus:shadow-outline-blue sm:text-sm sm:leading-5'
                            value={selectedCategory}
                            onChange={(e) => handleCategoryChange(e.target.value)}>
                            {categoriesList.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                            <svg className='h-5 w-5' viewBox='0 0 20 20' fill='none' stroke='currentColor'>
                                <path d='M7 7l3-3 3 3m0 6l-3 3-3-3' />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className='grid lg:grid-cols-3 gap-10 grid-cols-1'>
                    {filteredCourses.map(({ id, title, description, category, difficulty, thumbnail }) => (
                        <CourseCard
                            id={id}
                            title={title}
                            description={description}
                            category={category}
                            difficulty={difficulty}
                            thumbnail={thumbnail}
                            key={id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;
