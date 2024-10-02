'use client';
import React from 'react';
import { HoverBorderGradient } from './ui/hover-border-gradient';

const ProjectNav = () => {
  return (
    <div className='flex justify-center px-4 pt-10'>
      <HoverBorderGradient
        containerClassName='rounded-full'
        as='button'
        className=' bg-[#1b1b1b] text-white  flex items-center space-x-2'
      >
        <svg
          className='w-6 h-6 mr-2'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <polyline points='15 6 9 12 15 18' />{' '}
        </svg>
        <span>Back to Homepage</span>
      </HoverBorderGradient>
    </div>
  );
};

export default ProjectNav;
