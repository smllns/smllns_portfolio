'use client';
import React from 'react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Image from 'next/image';

interface ProjectHeaderProps {
  cardName: string;
  cardImg: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ cardName, cardImg }) => {
  return (
    <div className='min-h-screen flex flex-col overflow-hidden'>
      <div className='flex justify-center xxs:my-[-10px] sm:my-[-0px] md:my-[-70px] lg:my-[-50px] xl:my-[0] z-50' />

      <ContainerScroll
        key={cardName}
        titleComponent={
          <>
            <h1 className='text-4xl font-semibold text-white'>
              Dive into the world of <br />
              <span className='text-4xl md:text-[5rem] lg:text-[6rem] font-bold mt-1 leading-none'>
                {cardName}
              </span>
            </h1>
          </>
        }
      >
        <div className='w-full max-w-[1400px] max-h-[820px] mx-auto'>
          <div className='relative w-full' style={{ paddingBottom: '59%' }}>
            <Image
              src={`/${cardImg}`}
              alt={cardName}
              layout='fill'
              className='rounded-2xl h-full object-cover object-left-top'
              draggable={false}
            />
          </div>
        </div>
      </ContainerScroll>
      <div className='flex justify-center xxs:my-[-200px] sm:my-[-80px] md:my-[-130px] lg:my-[-85px] xl:my-[-10px] z-50' />
    </div>
  );
};

export default ProjectHeader;
