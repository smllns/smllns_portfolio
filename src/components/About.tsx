'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { HeroHighlight, Highlight } from './ui/hero-highlight';
import { BackgroundGradient } from './ui/background-gradient';

const About = () => {
  return (
    <div className='flex flex-col items-start justify-start xxs:w-full  lg:w-[624px] 2xl:w-[800px]'>
      {/* Picture */}
      <div className='xxs:hidden lg:block'>
        <BackgroundGradient className='rounded-[22px]  lg:w-[150px] lg:h-[150px] 2xl:w-[220px] 2xl:h-[220px]  overflow-hidden p-[3px] '>
          <img
            src='/avatar.jpg'
            alt='Maria S.'
            className='  w-full h-full object-cover rounded-[22px]  '
          />
        </BackgroundGradient>
      </div>

      {/* Container for image and highlighted text on smaller screens */}
      <div className='relative flex  flex-row items-center justify-center gap-4  lg:hidden'>
        {/* Picture */}
        <BackgroundGradient className='rounded-[22px] xxs:w-[140px] xxs:h-[140px]  sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px] overflow-hidden p-[3px]'>
          <img
            src='/avatar.jpg'
            alt='Maria S.'
            className='w-full h-full rounded-[22px]'
          />
        </BackgroundGradient>

        {/* Introduction Text */}
        <div className='text-left xxs:hidden sm:block sm:ml-4 sm:pt-2 '>
          <HeroHighlight>
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className='font-normal text-lg  md:text-xl 2xl:text-3xl mb-2 text-white text-left'
            >
              Hi, My name is{' '}
              <Highlight className='text-white font-semibold'>
                Mariia Smolianskaia
              </Highlight>{' '}
              and I&apos;m a{/* Main Title */}
              <span className='md:hidden'>
                <Highlight className=' font-bold mb-4 text-white'>
                  Frontend Developer
                </Highlight>
              </span>
              <div className='py-3 sm:hidden md:block'>
                <Highlight className='md:text-3xl font-bold mb-4 text-white'>
                  Frontend Developer
                </Highlight>
              </div>
            </motion.h1>
          </HeroHighlight>
        </div>
      </div>

      {/* Introduction Text */}
      <div className='text-left mt-4 sm:hidden  lg:block'>
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className='font-normal text-lg 2xl:text-3xl mb-2 text-white   text-left '
          >
            Hi, My name is{' '}
            <span className='inline xxs:py-1  lg:py-0   '>
              <Highlight className='text-white xs:font-semibold lg:font-medium '>
                Mariia Smolianskaia
              </Highlight>
            </span>{' '}
            and I&apos;m a{/* Main Title */}
            <div className='xxs:py-1  lg:py-3'>
              <Highlight className='xxs:text-xl  lg:text-4xl xl:text-5xl  font-bold mb-4 text-white'>
                Frontend Developer
              </Highlight>
            </div>
          </motion.h1>
        </HeroHighlight>
        {/* Description Text */}
      </div>
      <div className='sm:text-base  sm:pt-4 sm:pb-2  lg:pb-0 lg:pt-0 lg:text-md xl:text-xl  font-normal leading-relaxed text-white'>
        I specialize in transforming ideas into seamless, responsive, and
        efficient web applications. My focus is on building innovative and
        effective solutions that solve real-world problems while ensuring
        performance and reliability.
      </div>
    </div>
  );
};

export default About;
