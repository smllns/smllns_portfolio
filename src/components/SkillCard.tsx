'use client';
import React from 'react';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import Image from 'next/image';
const SkillCard = ({ name, img }: { name: string; img: string }) => (
  <CardContainer>
    <CardBody className='flex flex-row items-center justify-center gap-2 2xl:gap-3 w-fit h-10 2xl:h-12 rounded-2xl bg-[#00000033] px-4 overflow-visible'>
      <CardItem translateZ='100'>
        <Image
          src={img}
          height={24}
          width={24}
          className='group-hover/card:shadow-xl 2xl:h-10 2xl:w-10'
          style={{ minWidth: '24px', minHeight: '24px' }}
          alt={name}
        />
      </CardItem>
      <CardItem
        as='p'
        translateZ='60'
        className='text-lg 2xl:text-2xl text-white'
      >
        {name}
      </CardItem>
    </CardBody>
  </CardContainer>
);

export default SkillCard;
