'use client';
import React from 'react';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

const SectionCaption = ({
  title,
  words,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  title: string;
}) => {
  return (
    <div className='relative z-10 pt-24 xxs:px-6  sm:px-0'>
      <h1 className='text-left text-[#3DFF67] font-normal md:text-base lg:text-lg 2xl:text-2xl'>
        {title}
      </h1>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
};

export default SectionCaption;
