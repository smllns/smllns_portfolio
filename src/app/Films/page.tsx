'use client';
import React from 'react';
import ProjectPage from '@/components/ProjectPage';
import LoadingWrapper from '@/components/LoadingWrapper';
import generateTabContent from '@/components/ui/generateTabContent';

const features = [
  {
    title: 'Visual Experience & Intro',
    description:
      'The site opens with a visually striking introduction, combining experimental layouts, smooth animations to create a unique cinematic browsing experience.',
  },
  {
    title: 'Full Movie Collection',
    description:
      'Access my entire rated movie collection from Letterboxd, featuring over 2000 titles.',
  },
  {
    title: 'Powerful Search',
    description:
      'Search movies quickly by title and year to find exactly what you’re looking for.',
  },
  {
    title: 'Detailed Movie Pages',
    description:
      'Explore movie details with external data integration from TMDb API.',
  },
  {
    title: 'Curated Movie Lists',
    description:
      'Four curated lists: Unhinged Women Who Self Destruct, Unusual Animation, Manic Pixie Dream Girling, and Personal Favourites.',
  },
  {
    title: 'Contact Page',
    description: 'Find all my social media links on a dedicated contact page.',
  },
  {
    title: 'Smooth Animations',
    description:
      'High-quality animations and transitions enhance the browsing experience.',
  },
  {
    title: 'Responsive Design',
    description:
      'Fully responsive design ensures a smooth experience on both desktop and mobile.',
  },
];

const words = [
  { text: 'The' },
  { text: 'tabs' },
  { text: 'of' },
  { text: 'Smllns Film Club:', className: 'text-[#3DFF67]' },
];

const tabs = [
  {
    title: 'Intro',
    value: 'Intro',
    content: generateTabContent('Intro Tab', '/intro.png'),
  },
  {
    title: 'Main',
    value: 'Main',
    content: generateTabContent('Main Tab', '/main.png'),
  },
  {
    title: 'Library',
    value: 'Library',
    content: generateTabContent('Library Tab', '/lib.png'),
  },
  {
    title: 'Lists',
    value: 'Lists',
    content: generateTabContent('Lists Tab', '/lists.png'),
  },
  {
    title: 'Contacts',
    value: 'Contacts',
    content: generateTabContent('Contacts Tab', '/contacts.png'),
  },
];

const technologies = [
  {
    title: 'React (Next.js) + TypeScript',
    description:
      'The main framework and language used to build the interactive front-end, enabling server-side rendering, routing, and type-safe development.',
  },
  {
    title: 'Tailwind CSS',
    description:
      'Used for styling and layout, allowing rapid design of responsive, modern, and consistent UI components.',
  },
  {
    title: 'PapaParse',
    description:
      'A library for loading and parsing CSV data, used to import and manage large movie lists efficiently.',
  },
  {
    title: 'TMDb API',
    description:
      'Integrated to fetch movie posters, metadata, and other external data to enhance the movie library pages.',
  },
  {
    title: 'MongoDB',
    description:
      'Used to cache movie posters and metadata, improving performance and reducing repeated API requests.',
  },
  {
    title: 'Framer Motion & GSAP',
    description:
      'Animation libraries used to create smooth transitions, interactive elements, and engaging visual effects throughout the site.',
  },
  {
    title: 'Lenis',
    description:
      'Provides smooth scrolling experience, enhancing the overall navigation and feel of the site.',
  },
  {
    title: 'React Three Fiber + @react-three/drei',
    description:
      'Used for creating 3D backgrounds and visual effects, with helper components from @react-three/drei for convenience.',
  },
  {
    title: 'React Icons',
    description: 'Used to display UI icons consistently across the project.',
  },
  {
    title: 'Various UI Libraries',
    description:
      'Includes hover.dev, Cult UI, UI Layouts, Magic UI, Aceternity UI, SparkUi for ready-made components and layouts, speeding up development.',
  },
  {
    title: 'Cursify',
    description:
      'Custom animated cursor library to add playful and unique interactivity on the website.',
  },
];

const FilmClubPage = () => {
  return (
    <LoadingWrapper>
      <ProjectPage
        cooklab={true}
        link='https://smllns-film-club.vercel.app/moviesMain'
        title='Explore Smllns Film Club by yourself'
        linkTitle='smllns-film-club.com'
        description='Click here to find out the best film collection!'
        features={features}
        words={words}
        technologies={technologies}
        cardImg='filmClub.png'
        cardName='Smllns Film Club'
        tabs={tabs}
      />
    </LoadingWrapper>
  );
};

export default FilmClubPage;
