"use client";

import CardFunctions from "@/components/CardFunctions";
import ButtonFunctions from "@/components/ButtonFunctions";
import CardTreatments from "@/components/CardTreatments";
import DropdownAnswer from "@/components/DropdownAnswer";
import Link from "next/link";

export default function Home() {
  const CardsFunctions = [
    {
      title: "Mental Health",
      url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXZjeGx1OXV6eTEwbGt3aGZrdW10MTVldGIwYWg1aml6ZmRsMHZxZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SklfP8y3V40ycCzVjW/giphy.gif",
      description: "Relief for anxiety and depression is in reach",
    },
    {
      title: "Skin",
      url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExajk5aWZ0Y2IyaWZkc3Zkdmd1amgwMnMwOGpyY3pqeWhna2Fva2hkYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MlORWCGld7QaFLIryX/giphy-downsized-large.gif",
      description: "Treatments developed with dermatologists",
    },
    {
      title: "Hair",
      url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjQydnJpcHdtbjZmbjY1MzA0Z2JuMXZqbnB4ZGV3Zng0ZW5sNng4dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o8doWe0rL5vBUv0bK/giphy.gif",
      description: "Regrow thicker, fuller hair",
    },
    {
      title: "Weight",
      url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOG1obTdnN2o3NWIzdXJwM3QzNThiamc3cGtmZ2NmbDFuZ29sNzg4ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EpmwLl2tOctSqfDMBU/giphy-downsized-large.gif",
      description: "Curve cravings, and control your appetite",
    },
    {
      title: "Sleep",
      url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXp4dHpiNDFyYW5qcjA3eGQ4aWlkN2RoNmdiM3Q4bnJ0eXFyd2c4cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3vRe6zG5KjgAtAXe/giphy.gif",
      description: "Bring out your best in the bedroom",
    },
  ];

  const CardsTreatments = [
    {
      title: "Sleep",
      url: "/TreatmentSleep.jpg",
      description: "Night Mint",
    },
    {
      title: "Heart",
      url: "TreatmentHair.jpg",
      description: "Longetivity Mint",
    },

    {
      title: "Stress",
      url: "TreatmentAnxiety.jpg",
      description: "Relaxation pills",
    },
    {
      title: "Skin",
      url: "TreatmentSkin.jpg",
      description: "Custom Sunscreen",
    },
  ];

  const questionsAndAnswers = [
    {
      question: "What does Smart Rose offer?",
      answer:
        "Smart Rose offers personalized health packages that include smart tools like rings and monitors, along with clinically proven supplements to help you improve your sleep, heart health, and overall well-being.",
    },
    {
      question: "How do the Smart Rose packages work?",
      answer:
        "Each package includes easy-to-use health tools and supplements. You receive everything you need at home, and our smart devices track your health while the supplements support your long-term wellness.",
    },
    {
      question: "What are the different Smart Rose packages?",
      answer:
        "We offer Sleep, Heart, and Core Body packages, each designed for specific health needs, as well as an Ultra package that includes advanced health tests for comprehensive health management.",
    },
  ];

  const ButtonsFunctions = [
    {
      title: "Have great sleep",
      color: "#5C8CB5",
      imageUrl:
        "https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit,q_auto:eco,b_rgb:fff/Hims/homepage/STOR-5134/updated-atf-tiles/tiles-sex-d",
      introText: "You're on your way to better sleep.",
    },
    {
      title: "Prevent heart disease",
      color: "#8A3A34",
      imageUrl:
        "https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit,q_auto:eco,b_rgb:fff/Hims/homepage/STOR-5134/atf-tiles/tiles-hair-d",
      introText: "You're on your way to prevent heart disease.",
    },
    {
      title: "Live longer",
      color: "#CF9457",
      imageUrl:
        "https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit,q_auto:eco,b_rgb:fff/Hims/homepage/STOR-5134/atf-tiles/tiles-wl-d",
      introText: "You're on your way to live longer.",
    },
    {
      title: "Tackle stress",
      color: "#01A76F",
      imageUrl:
        "https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit,q_auto:eco,b_rgb:fff/Hims/homepage/STOR-5134/atf-tiles/tiles-mh-d",
      introText: "You're on your way to tackle stress.",
    },
    {
      title: "Slow down aging",
      color: "#7441B1",
      imageUrl:
        "https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit,q_auto:eco,b_rgb:fff/Hims/homepage/STOR-5134/atf-tiles/tiles-pe-d",
      introText: "You're on your way to slow down aging.",
    },
    {
      title: "Improve everyday health",
      color: "#AC7758",
      imageUrl:
        "https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit,q_auto:eco,b_rgb:fff/Hims/homepage/STOR-5134/atf-tiles/tiles-skin-d",
      introText: "You're on your way to improving your everyday health.",
    },
  ];

  const ScrollableCardContainer = ({ children, className = "" }) => {
    return (
      <div
        className={`flex overflow-x-auto w-full py-8 gap-4 pl-[4vw] md:pl-[16vw] pr-[4vw] no-scrollbar ${className}`}
      >
        {children}
      </div>
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <nav className="w-full flex justify-start items-center p-4 fixed bg-white z-[999]">
        <Link href="/" className="flex justify-center items-center gap-2">
          <img src="/Rose.png" className="w-6 h-6" />
          <h1 className="text-2xl md:text-3xl font-bold">Smart Rose</h1>
        </Link>
      </nav>
      <section className="w-[90%] flex flex-col items-left bg-white pb-16 md:pb-32">
        <h2 className="text-4xl md:text-6xl font-semibold mt-20 mb-12">
          <span className="bg-gradient-to-r from-[#D88C6C] via-[#C17262] to-[#A65355] inline-block text-transparent bg-clip-text">
            Smart health tools,
          </span>{" "}
          <br />
          to help you live longer
        </h2>
        <div className="w-full flex flex-col justify-center items-center gap-4">
          {ButtonsFunctions.map((card, index) => (
            <ButtonFunctions
              key={index}
              title={card.title}
              color={card.color}
              imageUrl={card.imageUrl}
              introText={card.introText}
            />
          ))}
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-start bg-[#FAF8F2]">
        <h2 className="text-3xl md:text-6xl font-semibold text-black pl-[4vw] md:pl-[16vw] pt-8 md:pt-16">
          A simple way to feel great
          <br />
        </h2>
        <h2 className="text-3xl md:text-6xl font-semibold pl-[4vw] md:pl-[16vw] bg-gradient-to-r from-[#D88C6C] via-[#C17262] to-[#A65355] inline-block text-transparent bg-clip-text">
          on your own terms
        </h2>
        <ScrollableCardContainer>
          {CardsFunctions.map((card, index) => (
            <CardFunctions
              key={index}
              title={card.title}
              url={card.url}
              description={card.description}
            />
          ))}
        </ScrollableCardContainer>
      </section>
      <section className="w-full flex flex-col justify-center items-start bg-[#FAF8F2] py-8">
        <div className="flex justify-center items-start pl-[4vw] md:pl-[16vw]">
          <h2 className="text-3xl md:text-6xl font-semibold">
            <span className="bg-gradient-to-r from-[#D88C6C] via-[#C17262] to-[#A65355] inline-block text-transparent bg-clip-text">
              Supplements
            </span>
            <br />
            that are clinically proven
          </h2>
        </div>
        <ScrollableCardContainer>
          {CardsTreatments.map((card, index) => (
            <CardTreatments
              key={index}
              title={card.title}
              url={card.url}
              description={card.description}
            />
          ))}
        </ScrollableCardContainer>
        <p className="text-left text-[0.7rem] md:text-sm text-gray-500 pl-[4vw] md:pl-[16vw]">
          *These statements have not been evaluated by the Food and Drug
          Adminstration. This product is not intended to diagnose, treat, cure,
          or prevent any disease.
        </p>
      </section>
      <section className="w-full flex flex-col justify-center items-start bg-[#FAF8F2] pt-8 pb-16 gap-4">
        <div className="flex justify-center items-start pl-[4vw] md:pl-[16vw] pb-8">
          <h2 className="text-4xl md:text-6xl font-semibold leading-[3rem] md:leading-[4rem]">
            Have questions?
            <br />
            <span className="bg-gradient-to-r from-[#D88C6C] via-[#C17262] to-[#A65355] inline-block text-transparent bg-clip-text">
              Get answers
            </span>
          </h2>
        </div>
        {questionsAndAnswers.map((qa, index) => (
          <DropdownAnswer
            key={index}
            question={qa.question}
            answer={qa.answer}
          />
        ))}
      </section>
    </main>
  );
}
