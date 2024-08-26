import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export default function CardTreatments({ url, title, description }) {
  const cardRef = useRef(null);

  return (
    <Link
      href="/"
      ref={cardRef}
      className="relative flex justify-center items-center flex-shrink-0"
      onMouseEnter={() => {
        gsap.to(cardRef.current, {
          duration: 0.1,
          scale: 1.02,
        });
      }}
      onMouseLeave={() => {
        gsap.to(cardRef.current, {
          duration: 0.1,
          scale: 1.0,
        });
      }}
    >
      <div className="absolute top-4 left-4 md:top-6 md:left-6 flex justify-center items-start flex-col">
        <h1 className="text-md md:text-xl text-white">{title}</h1>
        <h2 className="text-md md:text-2xl font-semibold text-white">
          {description}
        </h2>
      </div>
      <img className="w-[240px] md:w-[360px] rounded-2xl" src={url}></img>
      <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 flex flex-col justify-center items-center gap-4">
        <p className="text-[0.7rem] text-white hover:no-underline underline">
          Important safety info
        </p>
        <div className="w-full flex justify-between items-center gap-2 md:gap-4">
          <button className="bg-white text-black text-[0.8rem] md:text-[0.9rem] rounded-full w-[50%] h-10 md:h-12 hover:bg-white/80">
            Get started
          </button>
          <button className="bg-transparent border-white border-[1px] text-white text-[0.8rem] md:text-[0.9rem] rounded-full w-[50%] h-10 md:h-12 hover:bg-white/30">
            Learn More
          </button>
        </div>
      </div>
    </Link>
  );
}
