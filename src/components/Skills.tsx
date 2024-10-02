'use client';
import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import SkillCard from './SkillCard';

const skillGroups = [
  [
    { name: 'HTML', img: '/HTMLskill.svg' },
    { name: 'CSS', img: '/addcsskill.svg' },
    { name: 'JavaScript', img: '/JavaScriptskill.svg' },
  ],
  [
    { name: 'Git', img: '/Gitskill.svg' },
    { name: 'React', img: '/Reactskill.svg' },
    { name: 'TailwindCSS', img: '/tsilwind.svg' },
  ],
  [
    { name: 'Next.js', img: '/nextjs.svg' },
    { name: 'Node.js', img: '/Nodeskill.svg' },
    { name: 'Redux', img: '/redux.svg' },
  ],
];
const skillGroup = [
  { name: 'HTML', img: '/HTMLskill.svg' },
  { name: 'CSS', img: '/addcsskill.svg' },
  { name: 'JavaScript', img: '/JavaScriptskill.svg' },
  { name: 'Git', img: '/Gitskill.svg' },
  { name: 'React', img: '/Reactskill.svg' },
  { name: 'TailwindCSS', img: '/tsilwind.svg' },
  { name: 'Next.js', img: '/nextjs.svg' },
  { name: 'Node.js', img: '/Nodeskill.svg' },
  { name: 'Redux', img: '/redux.svg' },
];

const Skills = () => {
  return (
    <div className='z-30'>
      <div className='pt-2 rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden xxs:flex  lg:hidden'>
        <InfiniteMovingCards
          items={skillGroup}
          direction='right'
          speed='normal'
        />
      </div>
      <div className='flex flex-col items-end justify-end gap-4 2xl:gap-6 xxs:hidden  lg:flex'>
        {skillGroups.map((skills, groupIndex) => (
          <div
            key={`skill-group-${groupIndex}`}
            className='flex flex-row gap-4 2xl:gap-5'
          >
            {skills.map((skill, skillIndex) => (
              <SkillCard
                key={`skill-${groupIndex}-${skillIndex}`}
                name={skill.name}
                img={skill.img}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
