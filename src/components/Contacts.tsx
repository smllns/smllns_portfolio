'use client';
import React from 'react';
import { RiLinkedinBoxLine } from 'react-icons/ri';
import { LuGithub } from 'react-icons/lu';
import { MdOutlineMail, MdOutlineArrowOutward } from 'react-icons/md';
import { PiFileTextDuotone } from 'react-icons/pi';
import { Toaster, toast } from 'react-hot-toast';
import SectionCaption from './SectionCaption';

export function Contacts() {
  const words = [
    {
      text: 'Stay',
    },
    {
      text: 'Connected:',
      className: 'text-[#3DFF67]',
    },
  ];
  const buttons = [
    {
      label: 'LinkedIn',
      icon: <RiLinkedinBoxLine />,
      arrow: <MdOutlineArrowOutward />,
      link: 'https://www.linkedin.com/in/smllns/',
    },
    {
      label: 'GitHub',
      icon: <LuGithub />,
      arrow: <MdOutlineArrowOutward />,
      link: 'https://github.com/smllns',
    },
    {
      label: 'Email: marysmoly@gmail.com',
      icon: <MdOutlineMail />,
      arrow: <MdOutlineArrowOutward />,
      link: 'marysmoly@gmail.com',
      isEmail: true,
    },
  ];

  const showToast = (message: string, icon: string) => {
    toast.success(message, {
      icon: icon,
      duration: 4000,
      position: 'bottom-center',
      style: {
        borderRadius: '8px',
        background: '#3DFF67',
        color: '#000',
        fontSize: '18px',
        padding: '16px',
        minWidth: '300px',
        zIndex: 9999,
      },
    });
  };

  const handleEmailClick = (email: string) => {
    navigator.clipboard.writeText(email);
    showToast('Email copied successfully!', '🖤');
  };

  const handleDownloadClick = () => {
    showToast('CV downloaded successfully!', '📄');
  };

  return (
    <div className=' xxs:px-1 sm:px-16  flex flex-col min-h-screen max-w-screen-2xl mx-auto  relative overflow-y-auto  pb-16'>
      <SectionCaption title='Contacts' words={words} />

      <div className='flex flex-1 flex-col justify-center items-center z-50'>
        <div className='flex xxs:flex-col xxs:gap-4 xxs:pb-7  sm:flex-col sm:gap-6 sm:pb-10  lg:flex-row lg:gap-2 lg:pb-7 md:pb-14 md:gap-7'>
          {buttons.map(({ label, icon, arrow, link, isEmail }) => (
            <a
              key={label}
              href={!isEmail ? link : undefined}
              target={!isEmail ? '_blank' : undefined}
              rel={!isEmail ? 'noopener noreferrer' : undefined}
              onClick={
                isEmail
                  ? (e) => {
                      e.preventDefault();
                      handleEmailClick(link);
                    }
                  : undefined
              }
              className='flex items-center justify-between px-4 py-2 md:text-base xxs:w-[255px] xxs:h-[70px] xxs:text-xs  sm:w-[400px] sm:h-[70px] md:w-[480px] md:h-[80px] lg:w-[315px] xl:w-[400px] 2xl:w-[480px] lg:h-[68px] xl:h-[72px] 2xl:h-[80px] rounded-md border border-[#878EA1] bg-black text-white lg:text-sm xl:text-base hover:shadow-[4px_4px_0px_0px_#3DFF67] transition duration-200 cursor-pointer'
            >
              <span className='mr-2 '>
                {React.cloneElement(icon, {
                  className: 'w-7 h-7 text-[#878EA1]',
                })}
              </span>
              <span>{label}</span>
              <span className='ml-2 '>
                {' '}
                {React.cloneElement(arrow, {
                  className: 'w-5 h-5 text-[#3DFF67]',
                })}
              </span>{' '}
            </a>
          ))}
        </div>
        <div className='relative z-50'>
          <Toaster toastOptions={{ style: { zIndex: 9999 } }} />
        </div>
        <a
          href='/cv.pdf'
          download='cv.pdf'
          onClick={handleDownloadClick}
          className='flex items-center justify-between  px-4 py-2 xxs:w-[255px] xxs:h-[70px] xxs:text-xs   md:text-base sm:w-[400px] sm:h-[70px] md:w-[480px] md:h-[80px] lg:w-full xl:w-[1150px] 2xl:w-[1400px] lg:h-[68px] xl:h-[72px] 2xl:h-[80px]  rounded-md border border-[#3DFF67] bg-black text-white text-sm hover:shadow-[4px_4px_0px_0px_#3DFF67] transition duration-200'
        >
          <span className='mr-2'>
            <PiFileTextDuotone className='w-7 h-7 text-[#878EA1]' />
          </span>
          <span>Download CV</span>
          <span className='ml-2'>
            <MdOutlineArrowOutward className='w-5 h-5 text-[#3DFF67]' />
          </span>
        </a>
      </div>

      <div className='absolute bottom-0 left-0 w-screen z-30 xxs:h-[60px] xs:h-[60px]  lg:h-[87px] bg-black flex items-center justify-left'>
        <p className='text-[#3DFF67] xxs:pl-5  md:pl-16'>
          © {new Date().getFullYear()} All rights reserved by{' '}
          <a
            href='https://www.linkedin.com/in/smllns/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-pink-500 no-underline font-normal transition-all duration-300 ease-in-out hover:font-bold'
          >
            smllns
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contacts;
