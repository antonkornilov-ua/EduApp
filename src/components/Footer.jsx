import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const socialMediaLinks = [
        { name: 'Facebook', link: 'https://www.facebook.com' },
        { name: 'Twitter', link: 'https://www.twitter.com' },
        { name: 'Instagram', link: 'https://www.instagram.com' },
    ];

    return (
        <footer className='bg-gray-900 text-gray-400'>
            <div className='max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='text-sm'>&copy; {new Date().getFullYear()} EduApp. All Rights Reserved.</div>
                    <div className='flex space-x-4 my-4 md:my-0'>
                        {socialMediaLinks.map((link) => (
                            <a href={link.link} key={link.name} target='_blank' rel='noopener noreferrer' className='hover:text-white'>
                                {link.name === 'Facebook' ? (
                                    <FaFacebook size={24} />
                                ) : link.name === 'Twitter' ? (
                                    <FaTwitter size={24} />
                                ) : link.name === 'Instagram' ? (
                                    <FaInstagram size={24} />
                                ) : null}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
