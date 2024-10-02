'use client';
import React, { useEffect, useState } from 'react';
import { PinContainer } from './ui/3d-pin';
import { Timeline } from './ui/timeline';
import { useRouter } from 'next/navigation';
import SectionCaption from './SectionCaption';

interface Card {
  name: string;
  description: string;
  title: string;
  href: string;
  img: string;
}

const words = [
  { text: 'Here' },
  { text: 'are' },
  { text: 'my' },
  { text: 'projects:', className: 'text-[#3DFF67]' },
];

const cards: Card[] = [
  {
    name: 'MinyForecast',
    description: 'Simple and user-friendly weather forecast app.',
    title: 'Discover MinyForecast',
    href: 'https://miny-forecast.netlify.app/',
    img: 'minyforecast.png',
  },
  {
    name: 'CookLab',
    description:
      'Web application for discovering, sharing, and exploring recipes.',
    title: 'Reveal CookLab',
    href: 'https://cook-lab.vercel.app/',
    img: 'cooklab.png',
  },
  {
    name: 'CanvasBoard',
    description:
      'Online canvas board where multiple users can cooperate in real-time.',
    title: 'Learn about CanvasBoard',
    href: 'https://canvasboard-by-smllns.vercel.app/',
    img: 'canvas.png',
  },
];

const CardContent = ({ card }: { card: Card }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/${card.name}`);
  };

  return (
    <div onClick={handleCardClick}>
      <PinContainer key={card.name} title={card.title}>
        <div className='flex flex-col xl:p-4 lg:p-2 tracking-tight text-slate-100/50 xxs:w-[13rem] xxs:h-[13rem]  sm:w-[16rem] sm:h-[16rem]  xl:w-[20rem] xl:h-[20rem] 2xl:w-[25rem] 2xl:h-[25rem]'>
          <h3 className='font-bold 2xl:text-2xl text-base text-slate-100'>
            {card.name}
          </h3>
          <div className='text-base font-normal mt-2'>
            <span className='text-slate-500 2xl:text-xl'>
              {card.description}
            </span>
          </div>
          <div
            className='flex flex-1 w-full rounded-lg mt-4'
            style={{
              backgroundImage: `url('${card.img}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
      </PinContainer>
    </div>
  );
};

export function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const timelineData = cards.map((card) => ({
    title: card.name,
    content: <CardContent card={card} />,
  }));

  return (
    <div className='sm:px-16 xxs:px-1  flex flex-col min-h-screen max-w-screen-2xl mx-auto relative  '>
      <SectionCaption title='Portfolio' words={words} />
      {/* Centered Flex Container for Cards */}
      <div className='relative z-10 flex flex-1 justify-center items-center'>
        {/* smaller screens */}
        <div className=' xxs:flex  lg:hidden w-full  '>
          <Timeline data={timelineData} />
        </div>
        {/* larger screens */}
        <div className='flex flex-row xxs:hidden   lg:flex xl:gap-4 2xl:gap-24'>
          {cards.map((card) => (
            <CardContent key={card.name} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
