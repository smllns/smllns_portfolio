'use client';

import React from 'react';
import { toast } from 'react-hot-toast';

const showToast = (message: string, icon: string) => {
  toast.success(message, {
    icon: icon,
    duration: 4000,
    position: 'bottom-center',
    style: {
      borderRadius: '8px',
      background: '#3DFF67',
      color: '#000',
      fontSize: '18px',
      padding: '16px',
      minWidth: '300px',
      zIndex: 9999,
    },
  });
};

const handleDownloadClick = () => {
  showToast('CV downloaded successfully!', '📄');
};

const Navbar = () => {
  const items = ['Portfolio', 'CV', 'Contacts'];

  return (
    <nav className='w-full bg-transparent flex justify-center py-12 z-10'>
      <ul className='flex space-x-10 2xl:space-x-20'>
        {items.map((item) => (
          <li key={item}>
            {item === 'CV' ? (
              <a
                href='/Mariia-Smolianskaia-cv.pdf'
                download='Mariia-Smolianskaia-cv.pdf'
                onClick={handleDownloadClick}
                className='text-white hover:text-gray-200 transition md:text-base lg:text-lg xl:text-xl 2xl:text-3xl'
              >
                {item}
              </a>
            ) : (
              <a
                href={`#${item.toLowerCase()}`}
                className='text-white hover:text-gray-200 transition md:text-base lg:text-lg xl:text-xl 2xl:text-3xl'
              >
                {item}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
