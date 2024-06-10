"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ReactLenis } from "@studio-freight/react-lenis";
import NavBar from "@/components/NavBar";

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

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".sensors-section",
            start: "center center",
            end: "bottom top",
            pin: true,
            scrub: 1,
          },
        })
        .to(".smart-ring-sensor", { right: "45%", bottom: "45%" }, "<")
        .to(".scale-sensor", { left: "45%", top: "45%" }, "<")
        .to(".nfc-sensor", { right: "45%" }, "<")
        .to(".blood-pressure-sensor", { left: "25%", bottom: "20%" })
        .to(".smart-ring-sensor", { right: "24%", bottom: "20%" }, "<") // "<" means start at the same time as the previous animation
        .to(".scale-sensor", { left: "28%", top: "18%" }, "<")
        .to(".tape-sensor", { right: "19%", top: "19%" }, "<")
        .to(".glucose-sensor", { left: "8%", top: "44%" }, "<")
        .to(".nfc-sensor", { right: "4%", bottom: "44%" }, "<")
        .from(".pricing", { opacity: 0, scale: 0 }, "<");
    }, app.current);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".sensors-section",
            start: "center-=500 center",
            end: "bottom top",
            scrub: 1,
          },
        })
        .to(".landing-page", { background: "#D02F53" })
        .to(".navbar", { y: -100 }, "<");
    }, app.current);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".how-it-works",
            start: "top-=200 center",
            end: "center center",
            scrub: 1,
          },
        })
        .to(".bullet-1", { opacity: 1 })
        .from(".bullet-1", { y: 36 }, "<")
        .to(".bullet-2", { opacity: 1 }) // "<" means start at the same time as the previous animation
        .from(".bullet-2", { y: 36 }, "<")
        .to(".bullet-3", { opacity: 1 })
        .from(".bullet-3", { y: 36 }, "<");
    }, app.current);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".measurements",
            start: "top-=500 center",
            end: "center center",
            scrub: 1,
          },
        })
        .from(".icon", { scale: 0, stagger: 0.2 });
    }, app.current);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Dummy object for animating the number
    const counter = { value: 0 };

    // Target the element you want to update
    const numberElement = document.querySelector(".counter-measurements");

    // Create a GSAP timeline
    const tl = gsap.timeline({
      repeat: -1, // Repeat the timeline infinitely
      onRepeat: () => {
        counter.value = 0; // Reset counter value on each repeat
      },
    });

    // First part: animate the number from 0 to 20
    tl.to(counter, {
      value: 20,
      duration: 2, // Duration of the animation to go from 0 to 20
      ease: "none", // Choose an easing function
      onUpdate: () => {
        // Update the text content during the animation
        numberElement.textContent = Math.floor(counter.value) + "+";
      },
    })
      // Second part: add a pause
      .call(() => {}, [], "+=5"); // Pause for 5 seconds
  }, []);

  return (
    <ReactLenis root>
      <main
        ref={app}
        className="flex min-h-screen flex-col items-center overflow-hidden"
      >
        <NavBar />
        <div className="landing-page flex flex-col justify-center items-center w-full bg-white">
          <div className="hero-section flex flex-col items-center min-h-screen w-full bg-[url('/noise.svg')] pt-80 pb-24">
            <h1 className="text-6xl lg:text-8xl font-bold text-black text-center">
              Don&apos;t Die Early.
            </h1>
            <div className="flex justify-center items-center space-x-2 sm:space-x-4 text-3xl md:text-4xl lg:text-5xl mt-8">
              <h2>prevent</h2>
              <h2 className="text-primary disease">heart attacks.</h2>
            </div>
            <div className="how-it-works flex flex-col items-center w-[90%] md:w-[50%] bg-primary rounded-[32px] p-8 md:pl-12 md:pr-12 md:pt-12 md:pb-16 mt-36 md:mt-40 text-white">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center">
                How it works
              </h2>
              <div className="grid grid-rows-3 grid-cols-1 gap-y-8 sm:gap-y-16 md:gap-x-0 lg:gap-x-32 mt-12">
                <div className="bullet-1 opacity-0 flex flex-col justify-center items-center space-y-8">
                  <div className="flex space-x-4 items-start">
                    <div className="min-w-10 min-h-10 bg-white rounded-full flex justify-center items-center">
                      <p className="text-xl font-bold text-primary">1</p>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold">
                      Subscribe & Receive Sensors
                    </h3>
                  </div>
                  <h3 className="text-5xl font-semibold">📦</h3>
                </div>

                <div className="bullet-2 opacity-0 flex flex-col justify-center items-center space-y-8">
                  <div className="flex space-x-4 items-start">
                    <div className="min-w-10 min-h-10 bg-white rounded-full flex justify-center items-center">
                      <p className="text-xl font-bold text-primary">2</p>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">
                      Measure Your Body Weekly
                    </h3>
                  </div>
                  <h3 className="text-5xl font-semibold">📆</h3>
                </div>

                <div className="bullet-3 opacity-0 flex flex-col justify-center items-center space-y-8">
                  <div className="flex space-x-4 items-start">
                    <div className="min-w-10 min-h-10 bg-white rounded-full flex justify-center items-center">
                      <p className="text-xl font-bold text-primary">3</p>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold">
                      Receive Insights, Improve Health
                    </h3>
                  </div>
                  <h3 className="text-5xl font-semibold">📈</h3>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center bg-transparent mt-28">
              <h1 className="text-5xl lg:text-[6rem] font-bold text-center text-primary">
                What Sensors?
              </h1>

              <div className="flex flex-col justify-center items-center gap-4 mt-8">
                <h2 className="text-4xl lg:text-8xl font-bold text-primaryGreen">
                  Smart Ring
                </h2>
                <h2 className="text-4xl lg:text-8xl font-bold text-primaryGreen">
                  Food Scale
                </h2>
                <h2 className="text-4xl lg:text-8xl font-bold text-primaryGreen">
                  Weight Scale
                </h2>
                <h2 className="text-4xl lg:text-8xl font-bold text-primaryGreen">
                  Blood Pressure
                </h2>

                <h2 className="text-4xl lg:text-8xl font-bold text-primaryGreen">
                  Waist Circumference
                </h2>
              </div>
            </div>

            <div className="rose-section flex flex-col items-center w-[90%] md:w-[50%] bg-[#063A35] rounded-[32px] p-8 md:pl-12 md:pr-12 md:pt-12 md:pb-16 mt-28 text-white">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center">
                Too much data?
              </h2>

              <div className="grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-4 w-full h-full mt-12">
                <div className="flex justify-center items-center w-[100%] md:w-[80%] rounded-[32px]">
                  <img
                    src="/story-resting-heart.png"
                    className="rounded-[20px] md:rounded-[48px]"
                  />
                </div>
                <div className="flex flex-col gap-4 justify-center items-center w-[100%] bg-transparent rounded-2xl">
                  <div className="flex w-full justify-center items-center">
                    <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
                      <p className="text-xl font-bold text-primaryGreen">1</p>
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-center">
                    Our AI will analyze your data.
                  </h2>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center w-[100%] bg-transparent rounded-2xl">
                  <div className="flex w-full justify-center items-center">
                    <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
                      <p className="text-xl font-bold text-primaryGreen">2</p>
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-center">
                    Get weekly AI coaching.
                  </h2>
                </div>
                <div className="flex justify-center items-center w-[100%] md:w-[80%] bg-transparent rounded-2xl">
                  <img
                    src="/story-rose.png"
                    className="rounded-[20px] md:rounded-[48px]"
                  />
                </div>
                <div className="flex justify-center items-center w-[100%] md:w-[80%] bg-transparent rounded-2xl">
                  <img
                    src="/story-disease-scores.png"
                    className="rounded-[20px] md:rounded-[48px]"
                  />
                </div>
                <div className="flex flex-col gap-4 justify-center items-center w-[100%] bg-transparent rounded-2xl">
                  <div className="flex w-full justify-center items-center">
                    <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
                      <p className="text-xl font-bold text-primaryGreen">3</p>
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-center">
                    Live longer.
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="measurements-section flex flex-col items-center w-full pb-24">
            <h2 className="text-4xl lg:text-6xl font-bold text-black text-center">
              One subscription, <br></br>
              <span className="counter-measurements text-primary">
                20+
              </span>{" "}
              measurements:
            </h2>

            <div className="measurements grid grid-rows-10 grid-cols-2 md:grid-rows-5 md:grid-cols-4 gap-y-8 mt-12 w-[90%] md:w-[80%} lg:w-[64%]">
              <div className="icon flex justify-center items-center space-x-4">
                <img
                  src="/nutrition.svg"
                  width={32}
                  height={32}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Nutrition</h2>
              </div>
              <div className="icon flex justify-center items-center space-x-4">
                <Image
                  src="/water.svg"
                  width={32}
                  height={32}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Water Intake</h2>
              </div>
              <div className="icon flex justify-center items-center space-x-4">
                <Image
                  src="/drug.svg"
                  width={32}
                  height={32}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Drug Intake</h2>
              </div>
              <div className="icon flex justify-center items-center space-x-4">
                <Image
                  src="/movement.svg"
                  width={32}
                  height={32}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Daily Movement</h2>
              </div>
              <div className="icon flex justify-center items-center space-x-4">
                <Image
                  src="/exercise.svg"
                  width={32}
                  height={32}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Exercise</h2>
              </div>
              <div className="icon flex justify-center items-center space-x-4">
                <Image
                  src="/weight.svg"
                  width={32}
                  height={32}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Weight</h2>
              </div>
              <div className="icon flex justify-center items-center space-x-4">
                <Image
                  src="/muscles.svg"
                  width={32}
                  height={32}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">
                  Fat + Muscle Distribution
                </h2>
              </div>
              <div className="icon flex justify-center items-center space-x-4">
                <Image
                  src="/waist.svg"
                  width={32}
                  height={32}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Waist Circumference</h2>
              </div>
              <div className="icon flex justify-center items-center space-x-4">
                <Image
                  src="/emotional-being.png"
                  width={32}
                  height={32}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Emotional state</h2>
              </div>
              <div className="icon flex justify-center items-center space-x-4">
                <Image
                  src="/cognitive.svg"
                  width={32}
                  height={32}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Cognitive Function</h2>
              </div>
              <div className="icon flex justify-center items-center space-x-4">
                <Image
                  src="/blood-pressure.svg"
                  width={32}
                  height={32}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Blood Pressure</h2>
              </div>
              <div className="icon flex justify-center items-center space-x-4">
                <Image
                  src="/blood-oxygen.svg"
                  width={32}
                  height={32}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Blood Oxygen</h2>
              </div>
              <div className="icon flex justify-center items-center space-x-4">
                <Image
                  src="/heart.svg"
                  width={32}
                  height={32}
                  alt="Picture of the author"
                />

                <h2 className="text-md font-bold w-32">
                  Heart Rate Variability
                </h2>
              </div>
              <div className="icon flex justify-center items-center space-x-4">
                <Image
                  src="/vo2.svg"
                  width={32}
                  height={32}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Vo2 Max</h2>
              </div>
              <div className="icon flex justify-center items-center space-x-4">
                <Image
                  src="/stress.svg"
                  width={32}
                  height={32}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Physiological Stress</h2>
              </div>
              <div className="icon flex justify-center items-center space-x-4">
                <Image
                  src="/respiratory.svg"
                  width={32}
                  height={32}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Respiratory Rate</h2>
              </div>

              <div className="icon flex justify-center items-center space-x-4">
                <Image
                  src="/mental-health.svg"
                  width={32}
                  height={32}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Mental Health</h2>
              </div>

              <div className="icon flex justify-center items-center space-x-4">
                <Image
                  src="/temperature.svg"
                  width={32}
                  height={32}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Body Temperature</h2>
              </div>

              <div className="icon flex justify-center items-center space-x-4">
                <Image
                  src="/sleep.svg"
                  width={32}
                  height={32}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Sleep</h2>
              </div>

              <div className="icon flex justify-center items-center space-x-4">
                <Image
                  src="/menstrual.svg"
                  width={32}
                  height={32}
                  alt="Picture of the author"
                />
                <h2 className="text-md font-bold w-32">Menstrual Cycle</h2>
              </div>
            </div>
          </div>
          <div className="z-[1000] sensors-section relative min-h-screen w-[100%]">
            <img
              className="z-[6] blood-pressure-sensor absolute w-[100px] h-[100px] md:w-[200px] md:h-[200px] left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 rounded-[24px] shadow-2xl"
              src="/smart-rings.png"
            ></img>
            <img
              className="z-[5] tape-sensor absolute w-[80px] h-[80px] md:w-[160px] md:h-[160px]  right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-[24px] shadow-2xl"
              src="/tape-sensor.png"
            ></img>
            <img
              className="z-[4] scale-sensor absolute w-[80px] h-[80px] md:w-[160px] md:h-[160px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24px] shadow-2xl"
              src="/blood-pressure-sensor.png"
            ></img>
            <img
              className="z-[3] glucose-sensor bg-white absolute w-[100px] h-[100px] md:w-[200px] md:h-[200px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24px] shadow-2xl"
              src="/Designer.png"
            ></img>
            <img
              className="z-[2] smart-ring-sensor absolute w-[100px] h-[100px] md:w-[200px] md:h-[200px] right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 rounded-[24px] shadow-2xl"
              src="/scale-sensor.png"
            ></img>
            <img
              className="z-[1] nfc-sensor absolute w-[80px] h-[80px] md:w-[160px] md:h-[160px] right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-[24px] shadow-2xl"
              src="/food-scale.jpeg"
            ></img>

            <div className="pricing absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center space-y-4 md:space-y-8">
              <h2 className="font-bold text-4xl md:text-6xl text-white text-center">
                Starting at
                <br />
                $35/mo
              </h2>
              <h3 className="w-[100%] md:w-[64%] text-md md:text-2xl text-white font-semibold text-center">
                Get 5 sensors, 20+ measurements and Rose AI,
                {"\n"} all in one monthly subscription.
              </h3>

              <button className="text-md md:text-2xl font-bold bg-white p-2 md:p-4 rounded-[32px] font-semibold text-primary w-[120px] md:w-[180px]">
                <a href="/sign-up">Start Now</a>
              </button>
            </div>
          </div>
          <div className="relative min-h-screen w-full z-0"></div>
        </div>
      </main>
    </ReactLenis>
  );
}
