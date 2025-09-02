'use client';
import React, { useEffect, useRef } from 'react';
import SectionCaption from './SectionCaption';
import Card from './ui/card-stack';
import { useScroll } from 'framer-motion';
import Lenis from 'lenis';

const sections = [
  {
    title: 'Lunera',
    description:
      'Full frontend development for Lunera’s website, creating an engaging, modern digital experience.',
    shortDescription: 'Frontend work for a full-featured agency website.',
    src: 'lunera.png',
    color: '#001e79',
    shadow:
      'shadow-[0px_50px_37px_0px_rgba(94,0,255,0.3),0px_0px_40px_0px_rgba(156,39,176,0.1)]',
    slug: 'Lunera',
  },
  {
    title: 'Smllns Film Club',
    description:
      'Personal project showcasing a curated collection of films I love, with detailed descriptions and highlights.',
    shortDescription: 'My personal film showcase project.',
    src: 'smllnsfilmclub.png',
    color: '#00666d',
    shadow:
      'shadow-[0px_50px_37px_0px_rgba(255,94,158,0.3),0px_0px_40px_0px_rgba(156,39,176,0.1)]',
    slug: 'Films',
  },
  {
    title: 'MoodFlow',
    description:
      'A comprehensive mood tracker with interactive charts and analytics to visualize daily emotions.',
    shortDescription: 'Mood tracking app with rich data visualizations.',
    src: 'moodauth.png',
    color: '#452979',
    shadow:
      'shadow-[0px_50px_37px_0px_rgba(199,0,219,0.3),0px_0px_40px_0px_rgba(156,39,176,0.1)]',
    slug: 'MoodFlow',
  },
  {
    title: 'CanvasBoard',
    description:
      'Real-time collaborative online canvas where multiple users can draw and create together.',
    shortDescription: 'Live collaborative online canvas board.',
    src: 'small.png',
    color: '#00533c',
    shadow:
      'shadow-[0px_50px_37px_0px_rgba(0,179,166,0.3),0px_0px_40px_0px_rgba(156,39,176,0.1)]',
    slug: 'CanvasBoard',
  },
];

const words = [
  { text: 'Here' },
  { text: 'are' },
  { text: 'my' },
  { text: 'projects:', className: 'text-[#3DFF67]' },
];

const useLenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
};

export function Portfolio() {
  const listsRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: listsRef,
    offset: ['start start', 'end end'],
  });

  useLenisScroll();

  return (
    <div className='sm:px-16 xxs:px-1  flex flex-col min-h-screen max-w-screen-2xl mx-auto relative  '>
      <SectionCaption title='Portfolio' words={words} />
      <div ref={listsRef}>
        {sections.map((section, i) => {
          const targetScale = 1 - (sections.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...section}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
