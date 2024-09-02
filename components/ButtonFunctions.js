import { gsap } from "gsap";
import { useRef } from "react";
import Link from "next/link";

export default function ButtonFunctions({ title, imageUrl, color, introText }) {
  const buttonRef = useRef(null);
  const words = title.split(" ");
  const lastWord = words.pop();
  const restOfTitle = words.join(" ");

  return (
    <Link
      ref={buttonRef}
      href={{
        pathname: "/survey",
        query: {
          introText: introText,
          title: title,
        },
      }}
      className="h-20 md:h-28 border-[1px] border-gray-200 rounded-2xl w-full self-center hover:border-gray-600 hover:border-2 p-6 flex justify-between items-center"
      onMouseEnter={() => {
        gsap.to(buttonRef.current, {
          duration: 0.1,
          scale: 1.03,
        });
      }}
      onMouseLeave={() => {
        gsap.to(buttonRef.current, {
          duration: 0.1,
          scale: 1,
        });
      }}
    >
      <h1 className="text-lg lg:text-xl font-semibold">
        {restOfTitle} <span style={{ color: color }}>{lastWord}</span>
      </h1>
      <div className="flex justify-center items-center gap-2">
        {/* <img className="w-24 rounded-2xl" src={imageUrl} /> */}
        <div
          className="rounded-2xl px-3 py-2 md:px-4 md:py-3"
          style={{ backgroundColor: color }}
        >
          <h2 className="text-white font-semibold text-[0.7rem] md:text-[0.9rem]">
            Start
          </h2>
        </div>
      </div>
    </Link>
  );
}
