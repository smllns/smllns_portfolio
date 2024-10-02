'use client';

import React from 'react';

const Navbar = () => {
  return (
    <nav className='w-full bg-transparent flex justify-center py-12 z-10'>
      <ul className='flex space-x-10 2xl:space-x-20'>
        {['Portfolio', 'CV', 'Contacts'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className='text-white hover:text-gray-200 transition md:text-base lg:text-lg xl:text-xl 2xl:text-3xl'
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
