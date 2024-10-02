'use client';
import React from 'react';
import { HoverEffect } from './ui/card-hover-effect';
import SectionCaption from './SectionCaption';

interface Feature {
  title: string;
  description: string;
}

const Features = ({
  features,
  title,
  words,
}: {
  features: Feature[];
  title: string;
  words: {
    text: string;
    className?: string;
  }[];
}) => {
  return (
    <div className='min-h-screen'>
      <SectionCaption title={title} words={words} />

      <div className='max-w-5xl mx-auto px-8'>
        <HoverEffect items={features} />
      </div>
    </div>
  );
};

export default Features;
