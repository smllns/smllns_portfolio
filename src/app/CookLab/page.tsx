'use client';
import React from 'react';
import ProjectPage from '@/components/ProjectPage';
import generateTabContent from '@/components/ui/generateTabContent';

const features = [
  {
    title: 'Responsive Design',
    description:
      'The application is designed to be fully responsive, ensuring a seamless experience across various devices and screen sizes, including mobile devices.',
  },
  {
    title: 'User Authentication',
    description:
      'Sign up and log in to your CookLab account to access personalized features.',
  },
  {
    title: 'Favorites',
    description: 'Save your favorite recipes for easy access later.',
  },
  {
    title: 'Recipe Discovery',
    description:
      'Browse a vast collection of recipes, filter by category, cuisine, dietary restrictions, and more.',
  },
  {
    title: 'Detailed Instructions',
    description: 'Simple step-by-step instructions for every recipe.',
  },
  {
    title: 'Ingredients',
    description:
      'Overall ingredient list and additional ingredients mentioned in every step!',
  },
  {
    title: 'Recipe Categories',
    description:
      'Filter recipes by categories such as Breakfast, Vegan, Main, Dessert, Snack, and Drink to find exactly what you’re looking for.',
  },
  {
    title: 'Recipe Suggestions',
    description:
      'Discover recipes through random suggestions, in different places of the website for inspiration.',
  },
  {
    title: 'Chef Guide',
    description:
      'Learn to become a professional chef with our comprehensive guide located in the “Everyone Can Be a Chef in Their Own Kitchen” block.',
  },
  {
    title: 'Contact Us Form',
    description:
      'Submit any messages or inquiries via the built-in contact form.',
  },
  {
    title: 'Print, Share, and Favorite Buttons',
    description:
      'Easily print, share, and favorite recipes to keep track of your cooking adventures and share them with others.',
  },
  {
    title: 'Email Subscription',
    description:
      'Subscribe now to receive the latest recipes, cooking tips, and food inspiration tailored just for you, delivered directly to your inbox.',
  },
];

const technologies = [
  {
    title: 'React.js',
    description:
      'A JavaScript library for building fast and interactive user interfaces for web applications.',
  },
  {
    title: 'Chakra UI',
    description:
      'A simple, modular, and accessible component library for React to build responsive UIs quickly.',
  },
  {
    title: 'Firebase',
    description:
      'A comprehensive backend platform offering user authentication, real-time database, and other cloud services.',
  },
  {
    title: 'React Router',
    description:
      'A library for routing in React applications, enabling navigation between different views and components.',
  },
  {
    title: 'Framer Motion',
    description:
      'A library used for creating smooth and interactive animations in React applications.',
  },
  {
    title: 'React Icons',
    description:
      'A library of popular icons integrated as React components to add icons to your UI easily.',
  },
  {
    title: 'Swiper Slider',
    description:
      'A modern library for creating swipeable, touch-friendly sliders and carousels in web applications.',
  },
  {
    title: 'Axios',
    description:
      'A promise-based HTTP client used to make API requests from browsers or Node.js environments.',
  },
  {
    title: 'Spoonacular API',
    description:
      'A comprehensive food and recipe API, providing a vast database of recipes, ingredients, and nutritional information.',
  },
];

const words = [
  { text: 'The' },
  { text: 'tabs' },
  { text: 'of' },
  { text: 'CookLab:', className: 'text-[#3DFF67]' },
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

const CookLabPage = () => {
  return (
    <ProjectPage
      cooklab={true}
      link='https://cook-lab.vercel.app/'
      title='Explore CookLab by yourself'
      linkTitle='cooklab.com'
      description='Click here to find out the best recipe app!'
      features={features}
      words={words}
      technologies={technologies}
      cardImg='cooklab.png'
      cardName='CookLab'
      tabs={tabs}
    />
  );
};

export default CookLabPage;
