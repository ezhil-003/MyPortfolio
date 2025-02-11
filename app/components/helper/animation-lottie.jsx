"use client"; // Add this at top for client components

import { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
const LottieComponent = dynamic(() => import('lottie-react'), {
  ssr: false,
});

const AnimationLottie = ({ animationPath }) => {
  

  // useEffect(() => {
  //   // Client-side only code
  //   if (typeof window !== 'undefined') {
  //     // Your animation initialization code
  //   }
  // }, []);

  return (
    <LottieComponent
      animationData={animationPath}
      loop={true}
      autoplay={true}
    />
  );
};

export default AnimationLottie;