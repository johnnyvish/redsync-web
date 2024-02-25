"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ReactLenis } from "@studio-freight/react-lenis";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const app = useRef(null);
  const tl = useRef();

  const diseases = [
    "heart attacks.",
    "diabetes.",
    "alzheimer's.",
    "hypertension.",
    "obesity.",
  ];

  useEffect(() => {
    let tl = gsap.timeline({
      onComplete: () => startAnimation(),
    });

    const startAnimation = () => {
      tl.clear();
      tl.to(".disease", { duration: 0, text: "", ease: "none" });
      diseases.forEach((d, index) => {
        tl.to(".disease", { duration: 1, text: d, ease: "none" }).to(
          ".disease",
          { duration: 1, text: "", ease: "none", delay: 2 }
        );
      });
    };

    startAnimation();
  }, []);

  // useEffect(() => {
  //   // Create a timeline with ScrollTrigger configuration
  //   let tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".sensors-section", // Shared trigger element for all animations
  //       start: "center center", // Animation starts when the trigger element is in the center of the viewport
  //       end: "bottom top", // Animation ends when the bottom of the trigger element reaches the top of the viewport
  //       pin: true, // Pin the trigger element while the animation is active
  //       scrub: 1, // Smooth scrubbing effect for the animation
  //       markers: true, // Display markers for debugging
  //     },
  //   });

  //   tl.to(".scale-sensor", { left: 200 })
  //     .to(".tape-sensor", { left: 0 }, "<") // "<" means start at the same time as the previous animation
  //     .to(".blood-pressure-sensor", { left: 0 }, "<")
  //     .to(".smart-ring-sensor", { left: 0 }, "<")
  //     .to(".glucose-sensor", { left: 0 }, "<")
  //     .to(".nfc-sensor", { left: 0 }, "<");
  // }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Create a timeline and attach it to the ScrollTrigger
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".sensors-section", // Shared trigger element for all animations
            start: "center center", // Animation starts when the trigger element is in the center of the viewport
            end: "bottom top", // Animation ends when the bottom of the trigger element reaches the top of the viewport
            pin: true, // Pin the trigger element while the animation is active
            scrub: 1, // Smooth scrubbing effect for the animation
          },
        })
        .to(".scale-sensor", { left: "25%", bottom: "25%" })
        .to(".tape-sensor", { right: "25%", bottom: "25%" }, "<") // "<" means start at the same time as the previous animation
        .to(".blood-pressure-sensor", { left: "25%", top: "25%" }, "<")
        .to(".smart-ring-sensor", { right: "25%", top: "25%" }, "<")
        .to(".glucose-sensor", { left: "10%" }, "<")
        .to(".nfc-sensor", { right: "10%" }, "<")
        .to(".pricing", { opacity: 1 }, "<");
    }, app.current);

    return () => ctx.revert(); // Cleanup the context when the component unmounts
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <ReactLenis root>
      <main
        ref={app}
        className="flex min-h-screen flex-col items-center overflow-hidden bg-blue-400"
      >
        <nav className="fixed flex justify-between items-center w-[90%] lg:w-[80%] h-[64px] bg-white shadow-2xl rounded-[32px] p-4 z-[1000] mt-4">
          <div className="flex justify-center items-center space-x-2 p-8 w-[160px]">
            <img src="/logo.png" className="w-[32px] h-[32px]"></img>
            <div className="flex justify-center items-center">
              <h1 className="text-2xl text-red-700 font-bold">red</h1>
              <h1 className="text-2xl text-black font-bold">sync</h1>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center space-x-4 text-xl font-semibold">
            <div className="flex justify-center items-center space-x-4">
              <div className="w-[8px] h-[8px] bg-red-500 rounded-full"></div>
              <button>Home</button>
            </div>

            <div className="flex justify-center items-center space-x-4">
              <div className="w-[8px] h-[8px] bg-orange-400 rounded-full"></div>
              <button>About</button>
            </div>

            <div className="flex justify-center items-center space-x-4">
              <div className="w-[8px] h-[8px] bg-yellow-400 rounded-full"></div>
              <button>Pricing</button>
            </div>
          </div>
          <div className="md:hidden flex justify-center items-center space-x-4 text-xl font-semibold">
            <div className="flex justify-center items-center space-x-4">
              <div className="w-[8px] h-[8px] rounded-full"></div>
            </div>
          </div>
          <button className="text-xl font-bold bg-red-500 p-2 rounded-[32px] font-semibold text-white w-[160px]">
            Sign Up
          </button>
        </nav>
        <div className="flex flex-col justify-center items-center w-full bg-white">
          <div className="hero-section flex flex-col items-center min-h-screen w-full bg-[url('/noise.svg')] pt-80 pb-24">
            <h1 className="text-6xl lg:text-8xl font-bold text-black text-center">
              Don&apos;t Die Early.
            </h1>
            <div className="flex justify-center items-center space-x-2 sm:space-x-4 text-3xl md:text-4xl lg:text-5xl mt-8">
              <h2>prevent</h2>
              <h2 className="text-red-400 disease">heart attacks.</h2>
            </div>
            <div className="flex flex-col items-center w-[90%] bg-red-400 rounded-[32px] p-8 md:pl-12 md:pr-12 md:pt-12 md:pb-16 mt-36 md:mt-40 text-white">
              <h2 className="text-5xl md:text-7xl font-bold text-center">
                How it works
              </h2>
              <div className="grid grid-rows-3 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3 gap-y-8 sm:gap-y-16 md:gap-x-0 lg:gap-x-32 mt-12">
                <div className="flex space-x-4 items-start">
                  <img
                    className="w-10 h-10"
                    src="/number-1.png"
                    alt="Picture of the author"
                  />
                  <div className="flex flex-col justify-center items-center space-y-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-center">
                      Subscribe & Receive Sensors
                    </h3>
                    <h3 className="text-5xl font-semibold">📦</h3>
                  </div>
                </div>

                <div className="flex space-x-4 items-start">
                  <img
                    className="w-10 h-10"
                    src="/number-2.png"
                    alt="Picture of the author"
                  />
                  <div className="flex flex-col justify-center items-center space-y-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-center">
                      Measure Your Body Weekly
                    </h3>
                    <h3 className="text-5xl font-semibold">📆</h3>
                  </div>
                </div>

                <div className="flex space-x-4 items-start">
                  <img
                    className="w-10 h-10"
                    src="/number-3.png"
                    alt="Picture of the author"
                  />
                  <div className="flex flex-col justify-center items-center space-y-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-center">
                      Receive Insights & Improve Health
                    </h3>
                    <div>
                      <h3 className="text-5xl font-semibold">📈</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="measurements-section flex flex-col items-center min-h-screen w-full bg-[url('/noise.svg')]">
            <h2 className="how-it-works text-4xl lg:text-6xl font-bold text-black text-center mt-24">
              One subscription, <br></br>
              <span className="text-red-700">20+</span> measurements:
            </h2>

            <div className="grid grid-rows-10 grid-cols-2 lg:grid-rows-5 lg:grid-cols-4 gap-x-8 md:gap-x-16 lg:gap-x-48 gap-y-16 mt-24 w-[90%] pb-24">
              <div className="flex justify-center items-center space-x-4">
                <img
                  src="/nutrition.svg"
                  width={64}
                  height={64}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Nutrition</h2>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <Image
                  src="/water.svg"
                  width={64}
                  height={64}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Water Intake</h2>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <Image
                  src="/drug.svg"
                  width={64}
                  height={64}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Drug Intake</h2>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <Image
                  src="/movement.svg"
                  width={64}
                  height={64}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Daily Movement</h2>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <Image
                  src="/exercise.svg"
                  width={64}
                  height={64}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Exercise</h2>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <Image
                  src="/weight.svg"
                  width={64}
                  height={64}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Weight</h2>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <Image
                  src="/fat.svg"
                  width={64}
                  height={64}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">
                  Fat + Muscle Distribution
                </h2>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <Image
                  src="/waist.svg"
                  width={64}
                  height={64}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Waist Circumference</h2>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <Image
                  src="/blood-sugar.svg"
                  width={64}
                  height={64}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Blood Sugar</h2>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <Image
                  src="/blood-cholesterol.svg"
                  width={64}
                  height={64}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Blood Cholesterol</h2>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <Image
                  src="/blood-pressure.svg"
                  width={64}
                  height={64}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Blood Pressure</h2>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <Image
                  src="/blood-oxygen.svg"
                  width={64}
                  height={64}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Blood Oxygen</h2>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <Image
                  src="/heart.svg"
                  width={64}
                  height={64}
                  alt="Picture of the author"
                />

                <h2 className="text-md font-bold w-32">
                  Heart Rate Variability
                </h2>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <Image
                  src="/vo2.svg"
                  width={64}
                  height={64}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Vo2 Max</h2>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <Image
                  src="/stress.svg"
                  width={64}
                  height={64}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Physiological Stress</h2>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <Image
                  src="/respiratory.svg"
                  width={64}
                  height={64}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Respiratory Rate</h2>
              </div>

              <div className="flex justify-center items-center space-x-4">
                <Image
                  src="/mental-health.svg"
                  width={64}
                  height={64}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Mental Health</h2>
              </div>

              <div className="flex justify-center items-center space-x-4">
                <Image
                  src="/temperature.svg"
                  width={64}
                  height={64}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Body Temperature</h2>
              </div>

              <div className="flex justify-center items-center space-x-4">
                <Image
                  src="/sleep.svg"
                  width={64}
                  height={64}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Sleep</h2>
              </div>

              <div className="flex justify-center items-center space-x-4">
                <Image
                  src="/menstrual.svg"
                  width={64}
                  height={64}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Menstrual Cycle</h2>
              </div>
            </div>
          </div>
          <div className="sensors-section relative min-h-screen w-full bg-[url('/noise.svg')]">
            <img
              className="z-[5] scale-sensor absolute w-[120px] h-[120px] md:w-[160px] md:h-[160px] left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 rounded-[32px] shadow-2xl"
              src="/scale-sensor.png"
            ></img>
            <img
              className="z-[4] tape-sensor absolute w-[120px] h-[120px] md:w-[160px] md:h-[160px] right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 rounded-[32px] shadow-2xl"
              src="/tape-sensor.png"
            ></img>
            <img
              className="z-[3] blood-pressure-sensor absolute w-[120px] h-[120px] md:w-[160px] md:h-[160px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[32px] shadow-2xl"
              src="/blood-pressure-sensor.png"
            ></img>
            <img
              className="z-[2] smart-ring-sensor absolute w-[120px] h-[120px] md:w-[160px] md:h-[160px] right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-[32px] shadow-2xl"
              src="/smart-ring-sensor.png"
            ></img>
            <img
              className="z-[1] glucose-sensor absolute w-[120px] h-[120px] md:w-[160px] md:h-[160px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[32px] shadow-2xl"
              src="/glucose-sensor.png"
            ></img>
            <img
              className="z-[0] nfc-sensor absolute w-[120px] h-[120px] md:w-[160px] md:h-[160px] right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-[32px] shadow-2xl"
              src="/nfc-sensor.png"
            ></img>
            <div className="pricing opacity-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center space-y-8">
              <h1 className="font-bold text-4xl md:text-7xl text-black">
                $30/mo
              </h1>
              <button className="text-xl font-bold bg-red-500 p-2 rounded-[32px] font-semibold text-white w-[160px]">
                Start Now
              </button>
            </div>
          </div>
          <div className="sensors-section relative min-h-screen w-full"></div>
        </div>
      </main>
    </ReactLenis>
  );
}
