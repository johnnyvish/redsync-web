"use client";

import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function Congratulations() {
  // State to manage the trigger for signIn
  const [attemptSignIn, setAttemptSignIn] = useState(false);

  useEffect(() => {
    // Only proceed if attemptSignIn is true
    if (attemptSignIn) {
      const deepLinkURLiOS = "myapp://";
      const deepLinkURLAndroid = "myapp://";
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
  }, [attemptSignIn]); // This effect depends on attemptSignIn

  // Function to trigger sign in attempt
  const handleSignInClick = () => {
    setAttemptSignIn(true);
  };

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center w-[320px] sm:w-[400px] md:w-[640px] lg:w-[800px] h-[520px] bg-white rounded-2xl">
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
        />

        <h1 className="text-2xl md:text-4xl font-bold text-center w-[50%]">
          🎉 Congratulations 🎉 <br /> on taking your first step to better
          health!
        </h1>
        <button
          className="mt-8 bg-[#FF2D55] rounded-2xl w-[120px] h-[60px]"
          onClick={handleSignInClick} // Use the trigger function here
        >
          <p className="text-white p-2 text-2xl font-bold">Sign In</p>
        </button>
      </div>
    </main>
  );
}
