"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useRouter, useSearchParams } from "next/navigation";

export default function GreatSexSurvey() {
  const textContainerRef = useRef(null);
  const imageRef = useRef(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [introText, setIntroText] = useState("");
  const [key, setKey] = useState(0);
  const [timestamp, setTimestamp] = useState(Date.now());

  useEffect(() => {
    const params = searchParams.get("introText") || "";
    setIntroText(params);
    setKey((prevKey) => prevKey + 1);
  }, [searchParams]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animation for the first text
    tl.fromTo(
      textContainerRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
      .to(textContainerRef.current, { opacity: 0, duration: 1, delay: 1.5 })
      // Animation for the second text (replacing the first)
      .call(() => {
        if (textContainerRef.current) {
          textContainerRef.current.textContent =
            "First up, answer these questions so we can help.";
        }
      })
      .fromTo(
        textContainerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "+=0.3"
      )
      .to(textContainerRef.current, { opacity: 0, duration: 1, delay: 1.5 })
      .call(() => {
        router.push("/");
      });

    gsap.to(imageRef.current, {
      opacity: 0,
      duration: 1,
      delay: 6,
    });

    return () => {
      tl.kill();
    };
  }, [introText, router]);

  return (
    <div
      key={key}
      className="bg-[#FAF8F2] min-h-screen w-full flex items-center flex-col"
    >
      <nav className="w-full flex justify-start items-center z-[999]">
        <Link href="/">
          <h1 className="text-3xl md:text-5xl font-bold pt-16 pl-8">biorose</h1>
        </Link>
      </nav>
      <div className="flex flex-col items-left justify-center w-full pt-4">
        <div className="flex items-center justify-center w-40">
          <img
            ref={imageRef}
            src={`/SurveyRose.gif?t=${timestamp}`}
            className="w-full"
            alt="Loading animation"
          />
        </div>
        <div className="mt-8 w-[70%] pl-8" style={{ color: "#BD7558" }}>
          <p
            ref={textContainerRef}
            className="text-2xl font-semibold opacity-0"
          >
            {introText}
          </p>
        </div>
      </div>
    </div>
  );
}
