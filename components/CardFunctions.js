import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export default function CardFunctions({ url, title, description }) {
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
      <h1 className="absolute top-4 left-4 md:top-8 md:left-8 text-xl md:text-6xl font-semibold text-white z-[1]">
        {title}
      </h1>
      <img
        className="w-[240px] md:w-[520px] rounded-2xl brightness-[80%]"
        src={url}
      />
      <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 flex flex-col gap-4">
        <h2 className="text-white text-md md:text-3xl font-semibold w-[80%]">
          {description}
        </h2>
        <div className="w-full flex justify-between items-center gap-4">
          <button className="bg-white text-black text-[0.7rem] md:text-lg rounded-full w-[50%] h-10 md:h-16 hover:bg-white/80">
            Learn More
          </button>
          <button className="bg-black/30 backdrop-blur-md text-white text-[0.7rem] md:text-lg rounded-full w-[50%] h-10 md:h-16 hover:bg-white/80 hover:text-black">
            Get started
          </button>
        </div>
      </div>
    </Link>
  );
}
