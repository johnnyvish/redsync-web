"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const descriptionData = {
  "Have great sleep": {
    title: "Unlock the Best Sleep of Your Life",
    description:
      "Struggling with restless nights? Our Sleep Package is designed just for you. With our smart ring, sleep mask, and clinically proven sleep supplements, you'll finally experience the deep, restorative sleep you deserve. Wake up refreshed, energized, and ready to conquer the day.",
    callToAction: "Start Sleeping Better Tonight",
    price:
      "$285 upfront, including your first month's supplements. Optional $30/month for ongoing sleep support.",
    buttonText: "Buy Now",
  },
  "Prevent heart disease": {
    title: "Take Control of Your Heart Health",
    description:
      "Your heart deserves the best care. Our Heart Package includes a smart ring, a blood pressure monitor, an advanced heart rate monitor, and monthly doses of clinically tested cocoa powder. It's everything you need to keep your heart strong and healthy.",
    callToAction: "Protect Your Heart Today",
    price:
      "$385 upfront, including your first month's cocoa powder. Optional $45/month for continued heart support.",
    buttonText: "Buy Now",
  },
  "Live longer": {
    title: "Enhance Your Longevity with Proven Science",
    description:
      "Why just live, when you can live longer and healthier? Our Core Body Package is crafted to help you extend your life and vitality. With our smart ring, waist monitor, and clinically proven longevity supplements, you'll be equipped to maintain your health for years to come.",
    callToAction: "Start Your Journey to a Longer Life",
    price:
      "$335 upfront, including your first month's supplements. Optional $45/month for continued longevity support.",
    buttonText: "Buy Now",
  },
  "Tackle stress": {
    title: "Reduce Stress, Live Better",
    description:
      "Stress doesn't have to control your life. Our Stress Package is your key to a calmer, more balanced state of mind. With our advanced tools and supplements, you'll be better equipped to handle whatever life throws your way.",
    callToAction: "Embrace Calmness Today",
    price:
      "$0 upfront. Download the free biorose app. Optional subscription available.",
    buttonText: "Buy Now",
  },
  "Slow down aging": {
    title: "Reclaim Your Youthful Vitality",
    description:
      "Aging is inevitable, but you can slow it down with our Ultra Package. This comprehensive solution includes everything you need to maintain your youthful energy and health. From genetic sequencing to advanced supplements, we've got you covered.",
    callToAction: "Start Aging in Reverse",
    price: "Price TBD, likely around $2000/year.",
    buttonText: "Join the Waitlist",
  },
  "Improve everyday health": {
    title: "Enhance Your Longevity with Proven Science",
    description:
      "Why just live, when you can live longer and healthier? Our Core Body Package is crafted to help you extend your life and vitality. With our smart ring, waist monitor, and clinically proven longevity supplements, you'll be equipped to maintain your health for years to come.",
    callToAction: "Start Your Journey to a Longer Life",
    price:
      "$335 upfront, including your first month's supplements. Optional $45/month for continued longevity support.",
    buttonText: "Buy Now",
  },
};

export default function Description() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DescriptionContent />
    </Suspense>
  );
}

function DescriptionContent() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const data = descriptionData[title] || {};

  return (
    <div className="bg-[#FAF8F2] min-h-screen w-full flex flex-col items-center">
      <nav className="w-full flex justify-start items-center z-[999]">
        <Link href="/">
          <h1 className="text-3xl md:text-5xl font-bold pt-8 md:pt-16 pl-8">
            Smart Rose
          </h1>
        </Link>
      </nav>
      <div className="w-full max-w-4xl md:pt-16 pl-8 pt-16">
        <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
        <p className="text-lg mb-6">{data.description}</p>
        <h3 className="text-2xl font-semibold mb-2">{data.callToAction}</h3>
        <p className="text-lg mb-6">{data.price}</p>
        <button className="bg-[#BD7558] text-white px-6 py-2 mt-8 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-colors">
          {data.buttonText}
        </button>
      </div>
    </div>
  );
}
