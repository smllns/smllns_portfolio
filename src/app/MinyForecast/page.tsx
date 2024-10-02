'use client';
import React from 'react';
import ProjectPage from '@/components/ProjectPage';
import LoadingWrapper from '@/components/LoadingWrapper';

const features = [
  {
    title: 'Weekly Forecast',
    description:
      'Provides an accurate 8-day weather forecast to help you plan ahead.',
  },
  {
    title: 'Clothing Suggestions',
    description:
      'Recommends appropriate clothing based on the current weather conditions.',
  },
  {
    title: 'Location-Aware Forecast',
    description:
      'Automatically detects your location to provide a precise weather forecast for your city.',
  },
  {
    title: 'Suggestive Search',
    description:
      'As you type, suggests existing cities for a faster and more accurate search experience.',
  },
  {
    title: 'Favorites',
    description:
      'Save your favorite locations to quickly check the weather and switch between them with ease.',
  },
  {
    title: 'Themes',
    description:
      'Automatically adjusts the app theme based on the time of day, with the option to change manually.',
  },
  {
    title: 'Detailed Weather Information',
    description:
      'Displays current temperature, "feels like" temperature, wind speed, pressure, humidity, UV index, visibility, and sunrise/sunset times.',
  },
  {
    title: 'Dynamic Weather Icons',
    description:
      'Bright and animated icons provide a visual representation of the current weather conditions.',
  },
  {
    title: 'Country Flags',
    description:
      'Displays country flags for cities to clearly distinguish locations and avoid any mix-ups, making it easier to identify and select your city.',
  },
];
const words = [
  { text: 'Themes' },
  { text: 'of' },
  { text: 'MinyForecast:', className: 'text-[#3DFF67]' },
];

const technologies = [
  {
    title: 'HTML',
    description:
      'The foundational markup language used to structure the content and layout of the MinyForecast web pages.',
  },
  {
    title: 'JavaScript (JS)',
    description:
      'The primary programming language used to build the logic and functionality of the MinyForecast application.',
  },
  {
    title: 'CSS',
    description:
      'A styling language used to design and layout the front-end of the application, ensuring a visually appealing and responsive user interface.',
  },
  {
    title: 'Navigator.geolocation',
    description:
      "A built-in web API used to detect and retrieve the user's geographical location (latitude and longitude) for accurate weather predictions.",
  },
  {
    title: 'OpenStreetMap',
    description:
      "A collaborative project providing free geographic data used in MinyForecast to get the city and country based on the user's coordinates.",
  },
  {
    title: 'VisualCrossing',
    description:
      "An external weather API used to retrieve detailed and accurate weather data, including forecasts based on the user's location.",
  },
  {
    title: 'OpenWeatherMap',
    description:
      'A weather API used in MinyForecast to get the country code based on the city name, allowing the display of the correct country flag alongside the weather information.',
  },
];

const MinyForecastPage = () => {
  return (
    <LoadingWrapper>
      <ProjectPage
        cooklab={false}
        link='https://miny-forecast.netlify.app/'
        title='Explore MinyForecast by yourself'
        linkTitle='minyforecast.com'
        description='Click here to find out the best weather forecast!'
        features={features}
        words={words}
        technologies={technologies}
        cardImg='minyforecast.png'
        cardName='MinyForecast'
        imgOne='morning.png'
        imgTwo='night.png'
        imgThree='day.png'
        imgFour='evening.png'
        comparingTitle='Theming'
      />
    </LoadingWrapper>
  );
};

export default MinyForecastPage;
