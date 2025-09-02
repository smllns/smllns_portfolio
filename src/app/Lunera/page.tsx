'use client';
import React from 'react';
import ProjectPage from '@/components/ProjectPage';
import generateTabContent from '@/components/ui/generateTabContent';

const features = [
  {
    title: 'Responsive Design',
    description:
      'The Lunera website is fully responsive, ensuring a seamless experience on desktop, tablet, and mobile devices.',
  },
  {
    title: 'Interactive Animations',
    description:
      'Smooth, high-quality animations enhance user engagement and make navigation feel dynamic and modern.',
  },
  {
    title: 'Custom Themes',
    description:
      'Supports multiple visual themes for a stylish, brand-aligned look and feel across the site.',
  },
  {
    title: 'Preloader & Menu',
    description:
      'Includes a sleek preloader and interactive menu for smooth transitions between pages and sections.',
  },
  {
    title: 'Portfolio & Project Cards',
    description:
      'Displays work examples in interactive, pop-up cards with hover effects and smooth entrance animations.',
  },
  {
    title: 'Contact Form',
    description:
      'A fully functional contact form allows clients to easily get in touch with Lunera for inquiries and collaborations.',
  },
  {
    title: 'Smooth UX',
    description:
      'Overall site experience is polished and fluid, with seamless scrolling, hover effects, and transitions.',
  },
  {
    title: 'Showcasing Agency Work',
    description:
      'Designed to effectively highlight Lunera’s projects and services with visually engaging layouts and interactive elements.',
  },
  {
    title: 'High Performance',
    description:
      'Optimized for speed and smoothness, ensuring quick loading and responsive interactions.',
  },
];
const technologies = [
  {
    title: 'React.js & Next.js',
    description:
      'The main framework and library used to build a fast, server-side rendered, and interactive front-end for the Lunera website.',
  },
  {
    title: 'TypeScript',
    description:
      'Used alongside React for type safety, better code maintainability, and reducing runtime errors.',
  },
  {
    title: 'Tailwind CSS & tw-animate-css',
    description:
      'A utility-first CSS framework and animation library used to design responsive, modern layouts and smooth animations.',
  },
  {
    title: 'Framer Motion & Motion',
    description:
      'Libraries used to implement smooth transitions, interactive animations, and engaging motion effects throughout the site.',
  },
  {
    title: 'React Icons & Lucide React',
    description:
      'Icon libraries integrated as React components to add scalable, customizable icons to the UI.',
  },
  {
    title: 'Next Themes & @theme-toggles/react',
    description:
      'Used for implementing theme toggles (light/dark mode) and managing site-wide theme state.',
  },
  {
    title: 'Sonner',
    description:
      'A toast/notification library used to display subtle interactive messages to the user.',
  },
  {
    title: 'React Wavify',
    description:
      'Used to create animated wave effects for decorative elements on the site.',
  },
  {
    title: 'Clsx & class-variance-authority & tailwind-merge',
    description:
      'Utility libraries used for conditional class names, managing variants, and merging Tailwind classes efficiently.',
  },
];

const words = [
  { text: 'The' },
  { text: 'themes' },
  { text: 'of' },
  { text: 'Lunera:', className: 'text-[#3DFF67]' },
];

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

const LuneraPage = () => {
  return (
    <ProjectPage
      cooklab={false}
      link='https://lunera.studio/'
      title='Explore Lunera by yourself'
      linkTitle='lunera.studio'
      description='Click here to find out the best digital agency!'
      features={features}
      words={words}
      technologies={technologies}
      cardImg='luneradark.png'
      cardName='Lunera'
      imgOne='lun1.png'
      imgTwo='lun2.png'
      imgThree='lun3.png'
      imgFour='lun4.png'
    />
  );
};

export default LuneraPage;
