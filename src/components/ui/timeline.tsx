'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className='w-full bg-transparent' ref={containerRef}>
      <div ref={ref} className='relative mx-auto pb-20'>
        {data.map((item, index) => (
          <div
            key={index}
            className='flex justify-between xxs:flex-col  md:flex-row  md:pt-20 xxs:pt-10  gap-10 '
          >
            {/* Sticky Title */}
            <div className='sticky top-40  z-40 flex flex-row self-start items-center '>
              <div className='h-10 absolute left-3 w-10 rounded-full bg-white flex items-center justify-center'>
                <div className='h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2' />
              </div>
              <h3 className='block xxs:hidden  md:block text-3xl pl-20 font-bold w-[293px] text-white'>
                {item.title}
              </h3>
            </div>
            <h3 className='block xxs:block  md:hidden xxs:text-2xl  sm:text-3xl xxs:pl-20  mt-[-50px] font-bold w-[293px] text-white'>
              {item.title}
            </h3>
            {/* Timeline Content */}
            <div className='relative md:pt-20  xs:pt-5 w-full h-full xxs:pb-8  sm:pb-0'>
              {item.content}
            </div>
          </div>
        ))}
        {/* Timeline Vertical Line */}
        <div
          style={{
            height: height - 5 + 'px',
          }}
          className='absolute  left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]'
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className='absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-green-600 via-green-300 to-transparent from-[0%] via-[10%] rounded-full'
          />
        </div>
      </div>
    </div>
  );
};
