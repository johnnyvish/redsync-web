"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Image from "next/image";

gsap.registerPlugin(TextPlugin);

export default function Home() {
  const diseases = [
    "heart attacks.",
    "diabetes.",
    "alzheimer's.",
    "dementia.",
    "hypertension.",
    "obesity.",
  ];

  useEffect(() => {
    let tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    diseases.forEach((d, index) => {
      tl.to(".disease", { duration: 1, text: d, ease: "none" }).to(".disease", {
        duration: 1,
        text: "",
        ease: "none",
        delay: 2,
      });
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-8 overflow-hidden bg-[url('/noise.svg')]">
      <nav className="fixed flex justify-between items-center w-[90%] lg:w-[80%] h-[64px] bg-white shadow-2xl rounded-[32px] p-4 z-[1000]">
        <h1 className="text-2xl text-red-800 font-bold p-8">redsync</h1>

        <div className="hidden md:flex justify-center items-center space-x-4 text-xl font-semibold">
          <div className="flex justify-center items-center space-x-4">
            <div className="w-[8px] h-[8px] bg-red-400 rounded-full"></div>
            <button>What</button>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <div className="w-[8px] h-[8px] bg-orange-400 rounded-full"></div>
            <button>Why</button>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <div className="w-[8px] h-[8px] bg-yellow-400 rounded-full"></div>
            <button>Who</button>
          </div>
        </div>
        <div className="md:hidden flex justify-center items-center space-x-4 text-xl font-semibold">
          <div className="flex justify-center items-center space-x-4">
            <div className="w-[8px] h-[8px] rounded-full"></div>
          </div>
        </div>
        <button className="text-xl font-bold bg-red-400 pt-2 pb-2 pl-4 pr-4 rounded-[32px] font-semibold text-white">
          Start Now
        </button>
      </nav>
      <div className="flex flex-col justify-center items-center space-y-12 mt-48 font-semibold text-center">
        <h1 className="text-black text-5xl md:text-6xl lg:text-8xl">
          Don&apos;t just wait for the symptoms.
        </h1>
        <div className="flex justify-center items-center space-x-4 text-2xl md:text-5xl">
          <h2>prevent</h2>
          <h2 className="text-red-400 disease">heart attacks.</h2>
        </div>
      </div>

      <div className="flex flex-col items-center h-full bg-red-400 rounded-[32px] mt-40 text-white pl-8 pr-8 pt-12 pb-12 md:p-12">
        <h2 className="text-white font-bold text-4xl lg:text-6xl">
          How it works
        </h2>

        <div className="grid grid-rows-3 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3 gap-y-8 sm:gap-y-16 md:gap-x-0 lg:gap-x-32  mt-12">
          <div className="flex space-x-4 items-start">
            <Image
              src="/number-1.png"
              width={42}
              height={42}
              alt="Picture of the author"
            />
            <div className="flex flex-col justify-center items-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold lg:w-[200px]">
                Subscribe & Receive Sensors
              </h2>
              <h2 className="text-xl font-semibold text-inline lg:w-[200px]">
                Get 6 medical-grade sensors delivered right to your doorstep.
              </h2>
            </div>
          </div>

          <div className="flex space-x-4 items-start">
            <Image
              src="/number-2.png"
              width={42}
              height={42}
              alt="Picture of the author"
            />
            <div className="flex flex-col justify-center items-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold lg:w-[200px]">
                Measure Your Body Weekly
              </h2>
              <h2 className="text-xl font-semibold text-inline lg:w-[200px]">
                Measure at home, with data synced automatically to our app.
              </h2>
            </div>
          </div>

          <div className="flex space-x-4 items-start">
            <Image
              src="/number-3.png"
              width={42}
              height={42}
              alt="Picture of the author"
            />
            <div className="flex flex-col justify-center items-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold lg:w-[200px]">
                Get Personalized Insights
              </h2>
              <h2 className="text-xl font-semibold text-inline lg:w-[200px]">
                Get actionable advice on what you can do to improve your health.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-[360px] md:w-[480px] lg:w-[1200px] h-[600px] text-black rounded-[32px] mt-24">
        <h2 className="font-bold p-8 md:p-12 text-4xl lg:text-6xl text-center">
          One subscription, 15 measurements:
        </h2>
        <div className="grid grid-rows-7 grid-cols-2 lg:grid-rows-5 lg:grid-cols-3 gap-x-4 md:gap-x-16 lg:gap-x-48 gap-y-16 mt-8">
          <div className="flex justify-center items-center space-x-4">
            <Image
              src="/nutrition.svg"
              width={64}
              height={64}
              alt="Picture of the author"
            />
            <h2 className="text-xl font-bold">Nutrition</h2>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <Image
              src="/heart.svg"
              width={64}
              height={64}
              alt="Picture of the author"
            />

            <h2 className="text-xl font-bold">Heart Rate Variability</h2>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <Image
              src="/blood-pressure.svg"
              width={64}
              height={64}
              alt="Picture of the author"
            />
            <h2 className="text-xl font-bold">Blood Pressure</h2>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <Image
              src="/movement.svg"
              width={64}
              height={64}
              alt="Picture of the author"
            />
            <h2 className="text-xl font-bold">Movement</h2>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <Image
              src="/exercise.svg"
              width={64}
              height={64}
              alt="Picture of the author"
            />
            <h2 className="text-xl font-bold">Exercise</h2>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <Image
              src="/blood-oxygen.svg"
              width={64}
              height={64}
              alt="Picture of the author"
            />
            <h2 className="text-xl font-bold">Blood Oxygen</h2>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <Image
              src="/sleep.svg"
              width={64}
              height={64}
              alt="Picture of the author"
            />
            <h2 className="text-xl font-bold">Sleep</h2>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <Image
              src="/temperature.svg"
              width={64}
              height={64}
              alt="Picture of the author"
            />
            <h2 className="text-xl font-bold">Temperature</h2>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <Image
              src="/weight.svg"
              width={64}
              height={64}
              alt="Picture of the author"
            />
            <h2 className="text-xl font-bold">Weight</h2>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <Image
              src="/fat.svg"
              width={64}
              height={64}
              alt="Picture of the author"
            />
            <h2 className="text-xl font-bold">Fat Distribution</h2>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <Image
              src="/blood-cholesterol.svg"
              width={64}
              height={64}
              alt="Picture of the author"
            />
            <h2 className="text-xl font-bold">Blood Cholesterol</h2>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <Image
              src="/blood-sugar.svg"
              width={64}
              height={64}
              alt="Picture of the author"
            />
            <h2 className="text-xl font-bold">Blood Sugar</h2>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <Image
              src="/waist.svg"
              width={64}
              height={64}
              alt="Picture of the author"
            />
            <h2 className="text-xl font-bold">Waist Circumference</h2>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <Image
              src="/water.svg"
              width={64}
              height={64}
              alt="Picture of the author"
            />
            <h2 className="text-xl font-bold">Water Intake</h2>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <Image
              src="/drug.svg"
              width={64}
              height={64}
              alt="Picture of the author"
            />
            <h2 className="text-xl font-bold">Drug Intake</h2>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-8 text-inline"></div>
      </div>

      <section className="min-h-screen w-full"></section>
    </main>
  );
}
