'use client';
import React from 'react';
import Contacts from '@/components/Contacts';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import { BackgroundAnimation } from '@/components/ui/bg-animation';
import LoadingWrapper from '@/components/LoadingWrapper';

export default function Home() {
  return (
    <LoadingWrapper>
      <div>
        <Hero />
        <div id='portfolio' className='bg-[#1b1b1b]'>
          <Portfolio />
        </div>
        <BackgroundAnimation>
          <div id='contacts'>
            <Contacts />
          </div>
          <div className='absolute bottom-0 left-0 w-screen z-20 xxs:h-[60px] lg:h-[87px] bg-black flex items-center justify-left' />
        </BackgroundAnimation>
      </div>
    </LoadingWrapper>
  );
}
