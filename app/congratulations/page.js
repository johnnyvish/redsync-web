"use client";

import { useState, useEffect } from "react";

import Confetti from "react-confetti";

export default function Congratulations() {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [isClient, setClient] = useState(false);
  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setDimensions({
      width,
      height,
    });
    setClient(true);
  }, []);

  const handleSignIn = () => {
    if (typeof window !== "undefined") {
      const deepLinkURLiOS = "redsync:///(app)/(pages)/SignIn";
      const deepLinkURLAndroid = "redsync:///(app)/(pages)/SignIn";
      const fallbackURL = "https://theredsync.com";

      const userAgent = navigator.userAgent || window.navigator.userAgent;

      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = deepLinkURLiOS;
      } else if (/android/i.test(userAgent)) {
        window.location.href = deepLinkURLAndroid;
      } else {
        window.location.href = fallbackURL;
      }

      setTimeout(() => {
        if (!document.hidden) {
          window.location.href = fallbackURL;
        }
      }, 2500);
    }
  };

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center w-[320px] sm:w-[400px] md:w-[640px] lg:w-[800px] h-[520px] bg-white rounded-2xl">
        {isClient && (
          <Confetti
            width={dimensions.width}
            height={dimensions.height}
            recycle={false}
          />
        )}

        <div className="flex flex-col justify-center items-center space-y-20">
          <h1 className="text-3xl md:text-4xl font-bold text-center w-[80%]">
            Congratulations on taking your first step to better health!
          </h1>
          <h1 className="text-8xl">🎉</h1>
          <button
            className="mt-8 bg-[#FF2D55] rounded-2xl w-[160px] h-[60px]"
            onClick={handleSignIn}
          >
            <p className="text-white p-2 text-2xl font-bold">My Profile</p>
          </button>
        </div>
      </div>
    </main>
  );
}
