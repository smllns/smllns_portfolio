'use client';
import React from 'react';
import ProjectPage from '@/components/ProjectPage';
import generateTabContent from '@/components/ui/generateTabContent';

const features = [
  {
    title: 'Mood Tracking',
    description:
      'Log your mood for each day and track emotional patterns over time for better self-awareness and reflection.',
  },
  {
    title: 'Interactive Charts',
    description:
      'View your mood data through customizable charts and graphs powered by Recharts, helping you analyze your emotional trends.',
  },
  {
    title: 'Custom Calendar',
    description:
      'Track moods directly on a custom, interactive calendar built with React DayPicker for a clear visual timeline.',
  },
  {
    title: 'User Data Table',
    description:
      'Access a complete view of your mood data in an interactive and customizable table using TanStack Table.',
  },
  {
    title: 'Responsive Design',
    description:
      'Optimized for mobile, tablet, and desktop views to ensure a seamless experience across all devices.',
  },
  {
    title: 'Dark and Light Themes',
    description:
      'Switch between dark and light themes with ease, using TailwindCSS for a personalized experience.',
  },
  {
    title: 'Authentication',
    description:
      'Secure user login and data storage through Firebase, ensuring your mood data is private and protected.',
  },
  {
    title: 'Account Management',
    description:
      'Update your profile details, including name, email, username, and password. Easily delete your account or clear all mood data directly from the app.',
  },
  {
    title: 'Articles & Resources',
    description:
      'Read mood-related articles and resources to learn more about emotional well-being and mental health management.',
  },
  {
    title: 'ShadCN Components',
    description:
      'Enhance your UI/UX with a collection of reusable, accessible components provided by ShadCN.',
  },
  {
    title: 'PDF Export',
    description:
      'Export your mood data and history as a PDF using jsPDF, making it easy to share or archive your progress.',
  },
];

const technologies = [
  {
    title: 'React (Next.js)',
    description:
      'Framework for building the app’s user interface, providing server-side rendering and static site generation.',
  },
  {
    title: 'TypeScript',
    description:
      'Ensures type safety and improves code quality, making development more predictable and robust.',
  },
  {
    title: 'TailwindCSS',
    description:
      'Utility-first CSS framework for styling, enabling custom themes and responsive layouts.',
  },
  {
    title: 'ShadCN',
    description:
      'UI components library for building accessible and customizable React components.',
  },
  {
    title: 'Aceternity UI Library',
    description:
      'Customizable UI components used in the Hero section of the project for a unique look and feel.',
  },
  {
    title: 'Recharts',
    description:
      'Library for rendering interactive charts and graphs to visualize mood data.',
  },
  {
    title: 'Firebase',
    description:
      'Provides user authentication and data storage for persistent mood tracking.',
  },
  {
    title: 'Framer Motion',
    description:
      'Used to add smooth animations and transitions to the UI for an enhanced user experience.',
  },
  {
    title: 'React DayPicker',
    description:
      'Library for creating a custom calendar interface to select dates for mood tracking.',
  },
  {
    title: 'React Hook Form',
    description:
      'Library for handling form submissions efficiently, reducing boilerplate code.',
  },
  {
    title: 'TanStack Table',
    description:
      'Tool for displaying detailed information about the user’s mood data in a customizable and interactive table format.',
  },
  {
    title: 'Zod',
    description:
      'Library for schema validation and form data validation alongside React Hook Form.',
  },
  {
    title: 'Simplex Noise',
    description:
      'Used for generating dynamic, animated background waves to create a visually engaging experience.',
  },
  {
    title: 'jsPDF',
    description:
      'Generates and exports user data to PDF format for download, enabling easy sharing and archiving.',
  },
];

const words = [
  { text: 'The' },
  { text: 'tabs' },
  { text: 'of' },
  { text: 'MoodFlow:', className: 'text-[#3DFF67]' },
];

const tabs = [
  {
    title: 'Auth',
    value: 'Authentication',
    content: generateTabContent('Auth Tab', '/moodauth.png'),
  },
  {
    title: 'Home',
    value: 'Home',
    content: generateTabContent('Home Tab', '/moodstarter.png'),
  },
  {
    title: 'Calendar',
    value: 'Calendar',
    content: generateTabContent('Mood Calendar Tab', '/moodcalendar.png'),
  },
  {
    title: 'Statistics',
    value: 'Statistics',
    content: generateTabContent('Mood Statistics Tab', '/moodstats.png'),
  },
  {
    title: 'Weather',
    value: 'Weather',
    content: generateTabContent('Mood vs Weather Tab', '/moodweather.png'),
  },
  {
    title: 'Sleep',
    value: 'Sleep',
    content: generateTabContent('Mood vs Sleep Tab', '/moodsleep.png'),
  },
  {
    title: 'Factors',
    value: 'Factors',
    content: generateTabContent('Mood vs Factors Tab', '/moodfactors.png'),
  },
  {
    title: 'Articles',
    value: 'Articles',
    content: generateTabContent('Mood Articles Tab', '/moodarticles.png'),
  },
  {
    title: 'Settings',
    value: 'Settings',
    content: generateTabContent('Settings Tab', '/moodsettings.png'),
  },
];

const MoodFlowPage = () => {
  return (
    <ProjectPage
      cooklab={true}
      mood={true}
      link='https://moodflow-by-smllns.vercel.app/'
      title='Explore MoodFlow by yourself'
      linkTitle='moodflow.com'
      description='Click here to find out the best mood tracker app!'
      features={features}
      words={words}
      technologies={technologies}
      cardImg='MoodFlowStarterPage.png'
      cardName='MoodFlow'
      tabs={tabs}
      imgOne='moodstarter.png'
      imgTwo='moodwhite.png'
      imgThree='moodauth.png'
      imgFour='moodauthwhite.png'
    />
  );
};

export default MoodFlowPage;
