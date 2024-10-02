'use client';
import React from 'react';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Image from 'next/image';

const Hero = () => {
  const handleScrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <BackgroundGradientAnimation>
        <div className='sm:px-16 xxs:px-2  flex flex-col min-h-screen min-w-[360px] mx-auto max-w-screen-2xl'>
          <Navbar />
          <div className='flex min-w-[360px] xxs:flex-col xxs:items-center xxs:justify-end  lg:flex-row  lg:justify-between lg:items-end z-30 flex-grow'>
            <About />
            <Skills />
          </div>
          <div className='flex justify-center xxs:my-5 sm:my-10 z-50'>
            <Image
              src='/CaretDoubleDown.svg'
              height={1000}
              width={1000}
              className='h-8 w-8 cursor-pointer transition-transform duration-300 opacity-[0.4] hover:opacity-[0.8] fill-current  text-gray-500 hover:text-gray-800   hover:scale-110 active:scale-95'
              alt='arrows'
              onClick={handleScrollToPortfolio}
            />
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default Hero;
