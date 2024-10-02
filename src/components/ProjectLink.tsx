'use client';
import React from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { GoogleGeminiEffect } from './ui/google-gemini-effect';

const ProjectLink = ({
  link,
  title,
  linkTitle,
  description,
}: {
  link: string;
  title: string;
  linkTitle: string;
  description: string;
}) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.6], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.6], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.6], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.6], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.6], [0, 1.2]);
  return (
    <div
      className='h-[200vh]  w-full  rounded-md relative pt-40 overflow-clip'
      ref={ref}
    >
      <GoogleGeminiEffect
        title={title}
        linkTitle={linkTitle}
        link={link}
        description={description}
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
};

export default ProjectLink;
