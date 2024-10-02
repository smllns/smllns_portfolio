'use client';

import React from 'react';
import { Compare } from './ui/compare';
import SectionCaption from './SectionCaption';

const renderCompare = (firstImage: string, secondImage: string) => {
  return (
    <div className='relative w-full xxs:max-w-[500px] lg:max-w-[1400px]'>
      <Compare
        firstImage={firstImage}
        secondImage={secondImage}
        firstImageClassName='object-cover object-left-top w-full'
        secondImageClassName='object-cover object-left-top w-full'
        className='max-w-[1400px] max-h-[820px]'
        slideMode='hover'
        autoplay={true}
      />
    </div>
  );
};

const Comparing = ({
  imgOne,
  imgTwo,
  imgThree,
  imgFour,
  words,
  title,
}: {
  imgOne: string;
  imgTwo: string;
  imgThree: string;
  imgFour: string;
  words: {
    text: string;
    className?: string;
  }[];
  title: string;
}) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <SectionCaption title={title} words={words} />
      <div className='w-full  flex-grow flex xxs:flex-col lg:flex-row items-center justify-center xxs:gap-20 xs:gap-14 sm:gap-8 md:gap-10 md:px-10 lg:px-0 '>
        {renderCompare(imgOne, imgTwo)}
        {renderCompare(imgThree, imgFour)}
      </div>
    </div>
  );
};

export default Comparing;
