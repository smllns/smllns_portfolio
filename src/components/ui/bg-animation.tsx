'use client';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export const BackgroundAnimation = ({
  backgroundColor = 'rgb(27, 27, 27)',
  // rgb(65, 172, 89)
  firstColor = '65, 172, 89',
  // rgb(78, 26, 150)
  secondColor = '78, 26, 150',
  // rgb(196, 52, 187)
  thirdColor = '196, 52, 187',
  // rgb(73, 181, 208)
  fourthColor = '73, 181, 208',
  // rgb(44, 95, 145)
  fifthColor = '44, 95, 145',
  size = '80%',
  blendingValue = 'hard-light',
  children,
  className = '',
  containerClassName = '',
}: {
  backgroundColor?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  const circleStyles = (color: string) => ({
    background: `radial-gradient(circle at center, rgba(${color}, 0.8) 0%, rgba(${color}, 0) 50%) no-repeat`,
    mixBlendMode: blendingValue as any,
    width: size,
    height: size,
  });

  return (
    <div
      className={cn(
        'min-h-screen w-full relative overflow-hidden top-0 left-0',
        containerClassName
      )}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={cn('', className)}>{children}</div>
      <div
        className={cn(
          'gradients-container pointer-events-none h-full w-full blur-lg absolute top-0 left-0',
          isSafari ? 'blur-2xl' : '[filter:url(#blurMe)_blur(40px)]'
        )}
      >
        <div
          className={cn(
            'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
            'origin-center animate-firstTwo opacity-100'
          )}
          style={circleStyles(firstColor)}
        ></div>

        <div
          className={cn(
            'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
            'origin-[calc(50%-200px)_calc(50%-200px)] animate-secondTwo opacity-100'
          )}
          style={circleStyles(secondColor)}
        ></div>

        <div
          className={cn(
            'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
            'origin-[calc(50%+200px)_calc(50%-200px)] animate-thirdTwo opacity-100'
          )}
          style={circleStyles(thirdColor)}
        ></div>

        <div
          className={cn(
            'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
            'origin-[calc(50%-100px)_calc(50%-100px)] animate-fourthTwo opacity-70'
          )}
          style={circleStyles(fourthColor)}
        ></div>

        <div
          className={cn(
            'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
            'origin-[calc(50%-100px)_calc(50%-100px)] animate-fifthTwo opacity-100'
          )}
          style={circleStyles(fifthColor)}
        ></div>
      </div>
    </div>
  );
};
