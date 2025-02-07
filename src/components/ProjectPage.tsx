'use client';
import React from 'react';
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
const words2 = [
  { text: 'Themes' },
  { text: 'of' },
  { text: 'MoodFlow:', className: 'text-[#3DFF67]' },
];

interface Feature {
  title: string;
  description: string;
}

interface WordItem {
  text: string;
  className?: string;
}
interface Tab {
  title: string;
  value: string;
  content: React.ReactNode;
}

interface ProjectPageProps {
  cooklab: boolean;
  mood?: boolean;
  link: string;
  title: string;
  linkTitle: string;
  description: string;
  features: Feature[];
  technologies: Feature[];
  words: WordItem[];
  tabs?: Tab[];
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
  mood,
  link,
  title,
  linkTitle,
  description,
  features,
  words,
  technologies,
  cardImg,
  cardName,
  tabs,
  imgOne = '',
  imgTwo = '',
  imgThree = '',
  imgFour = '',
  comparingTitle = '',
}) => {
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
          {mood && (
            <Comparing
              imgOne={imgOne}
              imgTwo={imgTwo}
              imgThree={imgThree}
              imgFour={imgFour}
              words={words2}
              title='Theming'
            />
          )}
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
            tabs &&
            tabs.length > 0 && (
              <div className='min-h-screen pb-5'>
                <div className='relative z-10 pt-24 xxs:px-6 xs:px-6 sm:px-0 xxs:pb-6 sm:pb-20 md:pb-6 lg:pb-0'>
                  <TypewriterEffectSmooth words={words} />
                </div>
                <div className='h-[20rem] md:h-[40rem] [perspective:1000px] flex flex-col max-w-5xl mx-auto w-full items-start justify-start mb-24'>
                  <Tabs tabs={tabs} />
                </div>
              </div>
            )
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

export default ProjectPage;
