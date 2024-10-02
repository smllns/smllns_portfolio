'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface LoadingWrapperProps {
  children: React.ReactNode; // The content to render after loading
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    });

    return () => clearTimeout(timer); // Clean up the timer
  });

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-[#1b1b1b]'>
        <Image src='/loader.gif' alt='Loading...' width='100' height='100' />
      </div>
    );
  }

  return <>{children}</>; // Render the children once loading is complete
};

export default LoadingWrapper;
