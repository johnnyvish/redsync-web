"use client";

import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    ScrollTrigger.refresh();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".purple-container",
        start: "top top",
        end: () =>
          `+=${document.querySelector(".purple-container").offsetHeight * 8}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(".main-container", { backgroundColor: "#ADD8E6", duration: 5 }, 0)
      .to(".bg-green-400", { scale: 2.5, duration: 5 })
      .to(".bg-green-400", {
        right: "28%",
        top: "70%",
        scale: 1,
        duration: 3,
      })
      .to(".bg-red-400", { scale: 2.5, duration: 5 })
      .to(".bg-red-400", {
        left: "28%",
        top: "70%",
        scale: 1,
        duration: 3,
      })
      .to(".bg-blue-400", { scale: 2.5, duration: 5 })
      .to(".bg-blue-400", {
        right: "28%",
        top: "28%",
        scale: 1,
        duration: 3,
      })
      .to(".bg-yellow-400", { scale: 2.5, duration: 5 })
      .to(".bg-yellow-400", {
        left: "28%",
        top: "28%",
        scale: 1,
        duration: 3,
      });

    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
  return (
    <main className="main-container flex flex-col w-full bg-[#fcf0f4]">
      <div className="fixed top-8 left-8 flex text-3xl font-bold z-[1000] bg-white rounded-[2rem] pt-2 pb-2 pl-4 pr-4">
        <h1 className="text-red-800">Red</h1>
        <h1 className="text-gray-800">Sync</h1>
      </div>
      <nav className="fixed top-8 z-[1000] w-full px-4 md:px-0">
        <div className="max-w-[95%] md:max-w-none mx-auto md:mx-0 md:absolute md:right-10">
          <ul className="flex justify-center md:justify-end space-x-4 font-semibold bg-white/90 rounded-[32px] pl-8 pr-8 pt-4 pb-4 text-md sm:text-xl text-gray-800">
            <li>
              <a href="#" className="hover:text-red-800">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-800">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-800">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-800">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="min-h-screen flex flex-col justify-center items-center text-4xl md:text-8xl font-bold text-gray-800">
        <div className="flex justify-center items-center md:w-[800px]">
          <div className="sync flex flex-col space-y-4 justify-center items-center opacity-1">
            <h2 className="text-black text-3xl md:text-6xl self-center text-center">
              Don't treat health symptoms.
            </h2>
            <h2 className="text-black text-3xl md:text-6xl self-center text-center">
              Prevent{" "}
              <span className="disease text-red-800">heart disease</span>.
            </h2>
          </div>
        </div>
      </div>

      {/* Replace <img> with <Image> from next/image */}
      <div className="icon absolute left-[16%] md:left-[10%] top-[60%] -translate-x-1/2 -translate-y-1/2 h-16 w-16 md:h-28 md:w-28 -rotate-12">
        <Image src="/heart.svg" alt="Heart" layout="fill" objectFit="contain" />
      </div>
      <div className="icon absolute left-[24%] md:left-[12%] top-[24%] -translate-x-1/2 -translate-y-1/2 h-16 w-16 md:h-28 md:w-28 -rotate-12">
        <Image
          src="/blood-pressure.svg"
          alt="Blood Pressure"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="icon absolute left-[12%] md:left-[20%] top-[30%] -translate-x-1/2 -translate-y-1/2 h-16 w-16 md:h-28 md:w-28 -rotate-12">
        <Image src="/water.svg" alt="Water" layout="fill" objectFit="contain" />
      </div>
      <div className="icon absolute left-[28%] md:left-[24%] top-[80%] -translate-x-1/2 -translate-y-1/2 h-16 w-16 md:h-28 md:w-28 -rotate-12">
        <Image src="/scale.svg" alt="Scale" layout="fill" objectFit="contain" />
      </div>
      <div className="icon absolute right-[12%] md:right-[10%] top-[60%] translate-x-1/2 -translate-y-1/2 h-16 w-16 md:h-28 md:w-28 rotate-12">
        <Image src="/food.svg" alt="Food" layout="fill" objectFit="contain" />
      </div>
      <div className="icon absolute right-[16%] md:right-[20%] top-[30%] translate-x-1/2 -translate-y-1/2 h-16 w-16 md:h-28 md:w-28 rotate-12">
        <Image src="/tape.svg" alt="Tape" layout="fill" objectFit="contain" />
      </div>
      <div className="icon absolute right-[14%] md:right-[24%] top-[80%] translate-x-1/2 -translate-y-1/2 h-16 w-16 md:h-28 md:w-28 rotate-12">
        <Image src="/blood.svg" alt="Blood" layout="fill" objectFit="contain" />
      </div>
      <div className="icon absolute right-[10%] md:right-[5%] top-[70%] md:top-[80%] translate-x-1/2 -translate-y-1/2 h-16 w-16 md:h-28 md:w-28 rotate-12">
        <Image src="/sleep.svg" alt="Sleep" layout="fill" objectFit="contain" />
      </div>

      <div className="info-box absolute flex justify-center items-center h-[340px] w-[92%] md:w-[480px] bg-blue-200 rounded-[32px] left-1/2 top-[928px] md:top-[892px] -translate-x-1/2 -translate-y-1/2 shadow-2xl">
        <div className="flex flex-col items-center space-y-8 text-center text-md md:text-xl p-4 text-black">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            How does it work?
          </h2>
          <h3 className="info-point-1">
            1. We send you medical-grade sensors. 📦🔬
          </h3>
          <h3 className="info-point-2">
            2. You take daily and weekly measurements of your body. 📆📏
          </h3>
          <h3 className="info-point-3">
            3. Red provide you insights and keep you accountable for action.📈🔴
          </h3>
        </div>
      </div>
      <div className="section-2 min-h-screen relative flex justify-center items-center w-[98%] self-center mt-40 md:mt-48 rounded-[32px]"></div>
      <div className="purple-container min-h-screen relative flex justify-center items-center w-[98%] self-center mt-40 md:mt-48 rounded-[32px]">
        <div className="z-[995] absolute flex flex-col space-y-4 justify-center items-center left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 bg-yellow-400 h-[100px] w-[100px] md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-[2rem] shadow-2xl floating">
          <img
            src="/blood-pressure-monitor.png"
            className="self-center rounded-[2rem] p-4"
          />
        </div>
        <div className="z-[996] absolute flex flex-col space-y-4 justify-center items-center left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 bg-blue-400 h-[100px] w-[100px] md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-[2rem] shadow-2xl floating">
          <img
            src="/glucose-sensor.png"
            className="self-center rounded-[2rem] p-4"
          />
        </div>
        <div className="z-[997] absolute flex flex-col space-y-4 justify-center items-center left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 bg-red-400 h-[100px] w-[100px] md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-[2rem] shadow-2xl floating">
          <img
            src="/scale-sensor.png"
            className="self-center rounded-[2rem] p-4"
          />
        </div>
        <div className="z-[998] absolute flex flex-col space-y-4 justify-center items-center left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 bg-green-400 h-[100px] w-[100px] md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-[2rem] shadow-2xl floating">
          <img
            src="/smart-ring.png"
            className="self-center rounded-[2rem] p-4"
          />
        </div>
        <div className="absolute flex flex-col space-y-8 justify-center items-center left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2  rounded-[2rem]">
          <h1 className="font-bold text-7xl text-black">$30/mo</h1>
          <button className="flex justify-center items-center h-[42px] w-[108px] md:h-[64px] md:w-[160px] bg-red-800 rounded-[32px] shadow-2xl mt-4 md:mt-12">
            <p className="text-[1rem] md:text-[1.3rem] text-gray-800 font-semibold text-white">
              Subscribe
            </p>
          </button>
        </div>
      </div>
      <div className="main-container flex justify-center items-center w-[100%] self-center mt-28 h-[800vh] bg-[#f3f3e9] rounded-[32px]"></div>
      <footer className="w-full bg-gray-800 py-4 mt-8">
        <div className="max-w-screen-lg mx-auto text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Red Sync. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span className="text-gray-500">|</span>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Terms of Use
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Designed by Red Sync Team
          </p>
        </div>
      </footer>
    </main>
  );
}
