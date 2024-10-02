'use client';
import React from 'react';
import Image from 'next/image';
import ProjectNav from './ProjectNav';
import ProjectHeader from './ProjectHeader';
import ProjectLink from './ProjectLink';
import Features from './Features';
import Comparing from './Comparing';
import Contacts from './Contacts';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import { Tabs } from './ui/tabs';
import LoadingWrapper from './LoadingWrapper';

const wordsFeatures = [
  { text: 'Here' },
  { text: 'are' },
  { text: 'the' },
  { text: 'main' },
  { text: 'features:', className: 'text-[#3DFF67]' },
];

const wordsTechno = [
  { text: 'The' },
  { text: 'main' },
  { text: 'technologies:', className: 'text-[#3DFF67]' },
];

//tabs for cookLab project

const generateTabContent = (title: string, img: string) => {
  return (
    <div className='w-full flex flex-col overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black'>
      <p className='self-start pb-4 flex-shrink-0 text-base sm:text-xl md:text-2xl lg:text-4xl'>
        {title}
      </p>
      <div className='w-full  flex justify-center items-center flex-grow'>
        <PagesContent img={img} />
      </div>
    </div>
  );
};

interface Feature {
  title: string;
  description: string;
}

interface WordItem {
  text: string;
  className?: string;
}

interface ProjectPageProps {
  cooklab: boolean;
  link: string;
  title: string;
  linkTitle: string;
  description: string;
  features: Feature[];
  technologies: Feature[];
  words: WordItem[];
  imgOne?: string;
  imgTwo?: string;
  imgThree?: string;
  imgFour?: string;
  comparingTitle?: string;
  cardName: string;
  cardImg: string;
}

const ProjectPage: React.FC<ProjectPageProps> = ({
  cooklab,
  link,
  title,
  linkTitle,
  description,
  features,
  words,
  technologies,
  cardImg,
  cardName,
  imgOne = '',
  imgTwo = '',
  imgThree = '',
  imgFour = '',
  comparingTitle = '',
}) => {
  //tabs for cookLab project
  const tabs = [
    {
      title: 'Home',
      value: 'Home',
      content: generateTabContent('Home Tab', '/home.png'),
    },
    {
      title: 'Recipes',
      value: 'Recipes',
      content: generateTabContent('Recipes Tab', '/recipes.png'),
    },
    {
      title: 'Contact',
      value: 'Contact',
      content: generateTabContent('Contact Tab', '/contact.png'),
    },
    {
      title: 'About us',
      value: 'About us',
      content: generateTabContent('About Us Tab', '/about.png'),
    },
    {
      title: 'Recipe',
      value: 'Recipe',
      content: generateTabContent('Recipe Tab', '/recipe.png'),
    },
  ];
  return (
    <LoadingWrapper>
      <div className=' bg-[#1b1b1b] relative '>
        <ProjectNav />
        <ProjectHeader cardImg={cardImg} cardName={cardName} />
        <div className='max-w-screen-2xl mx-auto sm:px-16 xxs:px-1 xs:px-1'>
          <ProjectLink
            link={link}
            title={title}
            linkTitle={linkTitle}
            description={description}
          />
          <Features
            title='Features'
            features={features}
            words={wordsFeatures}
          />
          {!cooklab ? (
            <Comparing
              imgOne={imgOne}
              imgTwo={imgTwo}
              imgThree={imgThree}
              imgFour={imgFour}
              words={words}
              title={comparingTitle}
            />
          ) : (
            <div className='min-h-screen pb-5'>
              <div className='relative z-10 pt-24  xxs:px-6 xs:px-6 sm:px-0 xxs:pb-6 sm:pb-20 md:pb-6 lg:pb-0'>
                <TypewriterEffectSmooth words={words} />
              </div>
              <div className='h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start mb-24'>
                <Tabs tabs={tabs} />
              </div>
            </div>
          )}
          <Features
            title='Technologies'
            features={technologies}
            words={wordsTechno}
          />
        </div>
        <Contacts />
        <div className='absolute bottom-0 left-0 w-screen z-20 xxs:h-[60px] lg:h-[87px] bg-black flex items-center justify-left' />
      </div>
    </LoadingWrapper>
  );
};

//content for cookLab project

const PagesContent = ({ img }: { img: string }) => {
  return (
    <div className='relative w-full h-auto max-w-[90%] mx-auto'>
      <Image
        src={img}
        alt='project page'
        width={1000}
        height={1000}
        className='w-full  object-contain rounded-xl'
      />
    </div>
  );
};

export default ProjectPage;
