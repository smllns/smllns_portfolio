'use client';
import React from 'react';
import ProjectPage from '@/components/ProjectPage';

const features = [
  {
    title: 'Real-time Collaboration',
    description:
      'Built with Liveblocks, ensuring all user actions are instantly visible to everyone.',
  },
  {
    title: 'User Cursors',
    description:
      'Displays the cursors of all users in real-time for a collaborative experience.',
  },
  {
    title: 'Shapes',
    description:
      'Add various shapes including rectangles, circles, triangles, lines, or freehand drawings on the canvas.',
  },
  {
    title: 'Text',
    description:
      'Insert and place text anywhere on the canvas, fully customizable for clarity.',
  },
  {
    title: 'Images',
    description:
      'Upload and add images to the canvas, securely stored using Firebase for easy access.',
  },
  {
    title: 'Comments and Replies',
    description:
      'Users can add comments directly on the canvas and reply using text or emojis.',
  },
  {
    title: 'Live Chat',
    description:
      "Add comments next to the cursor that are visible to all users, accessible via '/' or the context menu.",
  },
  {
    title: 'Reactions',
    description:
      "Express reactions with animated emojis around the cursor, accessible via 'e' or the context menu.",
  },
  {
    title: 'Shape Modification',
    description:
      'Modify shape properties such as dimensions (width, height), color, stroke, and text (font, size, boldness).',
  },
  {
    title: 'Canvas Navigation',
    description:
      'Move around the canvas by grabbing and dragging, and zoom in/out using the mouse wheel for precise adjustments.',
  },
  {
    title: 'Background Color',
    description:
      'Change the background color of the canvas, synced in real-time for all users.',
  },
  {
    title: 'Undo/Redo/Delete/Clear',
    description:
      'Undo, redo, delete objects, or clear the entire canvas with keyboard shortcuts and context menu options.',
  },
];

const technologies = [
  {
    title: 'Next.js and React',
    description:
      'A powerful framework built on top of React for building server-rendered and statically-generated applications with optimized performance.',
  },
  {
    title: 'TypeScript',
    description:
      'A typed superset of JavaScript that adds static types to the codebase, enhancing type safety, error prevention, and robustness.',
  },
  {
    title: 'Tailwind CSS',
    description:
      'A utility-first CSS framework for creating custom designs quickly and responsively without leaving the HTML structure.',
  },
  {
    title: 'Firebase',
    description:
      'A comprehensive backend platform used for storing uploaded images and providing cloud-based services.',
  },
  {
    title: 'Fabric.js',
    description:
      'A powerful JavaScript library that provides object-based canvas functionality for rendering and manipulating elements on the canvas.',
  },
  {
    title: 'Liveblocks',
    description:
      'A real-time collaboration platform that synchronizes user actions across different devices, enabling real-time canvas interaction.',
  },
  {
    title: 'Shadcn',
    description:
      'A collection of UI components used to build various parts of the interface, ensuring a polished and accessible user experience.',
  },
];

const words = [
  { text: 'Creativity' },
  { text: 'with' },
  { text: 'CanvasBoard:', className: 'text-[#3DFF67]' },
];

const CanvasBoardPage = () => {
  return (
    <ProjectPage
      cooklab={false}
      link='https://canvasboard-by-smllns.vercel.app/'
      title='Explore CanvasBoard by yourself'
      linkTitle='canvasboard.com'
      description='Click here to find out the best online cooperation tool!'
      features={features}
      words={words}
      technologies={technologies}
      cardImg='small.png'
      cardName='CanvasBoard'
      imgOne='empty.png'
      imgTwo='full.png'
      imgThree='small.png'
      imgFour='large.png'
      comparingTitle='Use cases'
    />
  );
};

export default CanvasBoardPage;
