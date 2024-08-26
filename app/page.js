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
      title: "Sex",
      url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXp4dHpiNDFyYW5qcjA3eGQ4aWlkN2RoNmdiM3Q4bnJ0eXFyd2c4cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3vRe6zG5KjgAtAXe/giphy.gif",
      description: "Bring out your best in the bedroom",
    },
    {
      title: "Weight",
      url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOG1obTdnN2o3NWIzdXJwM3QzNThiamc3cGtmZ2NmbDFuZ29sNzg4ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EpmwLl2tOctSqfDMBU/giphy-downsized-large.gif",
      description: "Curve cravings, and control your appetite",
    },
    {
      title: "Hair",
      url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjQydnJpcHdtbjZmbjY1MzA0Z2JuMXZqbnB4ZGV3Zng0ZW5sNng4dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o8doWe0rL5vBUv0bK/giphy.gif",
      description: "Regrow thicker, fuller hair",
    },
  ];

  const CardsTreatments = [
    {
      title: "Hair",
      url: "https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit,q_auto:eco/Hims/homepage/STOR-5134/Product/product-tile-hair-d",
      description: "Hair Hybrids",
    },
    {
      title: "Sex",
      url: "https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit,q_auto:eco/Hims/homepage/STOR-5134/Product/product-tile-sex-d",
      description: "Hard Mints",
    },
    {
      title: "Weight",
      url: "https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit,q_auto:eco/Hims/homepage/STOR-5134/Product/product-tile-wl-d",
      description: "GLP-1 Injections",
    },
    {
      title: "Anxiety",
      url: "https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit,q_auto:eco/Hims/homepage/STOR-5134/Product/product-tile-mh-d",
      description: "Generic for Lexapro",
    },
    {
      title: "Skin",
      url: "https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit,q_auto:eco/Hims/homepage/STOR-5134/Product/product-tile-skin-d",
      description: "Custom Anti-aging Cream",
    },
  ];

  const questionsAndAnswers = [
    {
      question: "How does telehealth work?",
      answer:
        "Telehealth allows you to consult with healthcare professionals remotely using video calls, phone calls, or messaging platforms. It's convenient and accessible from the comfort of your home.",
    },
    {
      question: "Are online prescriptions safe?",
      answer:
        "Yes, online prescriptions from licensed healthcare providers are safe. They follow the same regulations and standards as in-person prescriptions, ensuring your safety and proper medical care.",
    },
    {
      question: "What conditions can be treated through telehealth?",
      answer:
        "Many conditions can be treated via telehealth, including minor illnesses, mental health issues, skin conditions, and chronic disease management. However, some conditions may require in-person visits.",
    },
    {
      question: "WHat's up dawg?",
      answer:
        "Telehealth platforms use secure, encrypted connections to protect your privacy. Healthcare providers are also bound by HIPAA regulations to maintain the confidentiality of your medical information.",
    },
    {
      question: "Can I get a refill for my prescription through telehealth?",
      answer:
        "In many cases, yes. Depending on the medication and your medical history, healthcare providers can often authorize prescription refills through telehealth consultations.",
    },
  ];

  const ButtonsFunctions = [
    {
      title: "Have great sex",
      color: "#5C8CB5",
      imageUrl:
        "https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit,q_auto:eco,b_rgb:fff/Hims/homepage/STOR-5134/updated-atf-tiles/tiles-sex-d",
      introText: "You're on your way to better sex.",
    },
    {
      title: "Regrow hair",
      color: "#8A3A34",
      imageUrl:
        "https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit,q_auto:eco,b_rgb:fff/Hims/homepage/STOR-5134/atf-tiles/tiles-hair-d",
      introText: "You're on your way to regrow hair.",
    },
    {
      title: "Lose weight",
      color: "#CF9457",
      imageUrl:
        "https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit,q_auto:eco,b_rgb:fff/Hims/homepage/STOR-5134/atf-tiles/tiles-wl-d",
      introText: "You're on your way to lose weight.",
    },
    {
      title: "Tackle anxiety",
      color: "#01A76F",
      imageUrl:
        "https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit,q_auto:eco,b_rgb:fff/Hims/homepage/STOR-5134/atf-tiles/tiles-mh-d",
      introText: "You're on your way to tackle anxiety.",
    },
    {
      title: "Have longer sex",
      color: "#7441B1",
      imageUrl:
        "https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit,q_auto:eco,b_rgb:fff/Hims/homepage/STOR-5134/atf-tiles/tiles-pe-d",
      introText: "You're on your way to longer sex.",
    },
    {
      title: "Get smooth skin",
      color: "#AC7758",
      imageUrl:
        "https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit,q_auto:eco,b_rgb:fff/Hims/homepage/STOR-5134/atf-tiles/tiles-skin-d",
      introText: "You're on your way to smooth skin.",
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
        <Link href="/">
          <h1 className="text-2xl md:text-3xl font-bold">biorose</h1>
        </Link>
      </nav>
      <section className="w-[90%] flex flex-col items-left bg-white pb-16 md:pb-32">
        <h2 className="text-4xl md:text-6xl font-semibold mt-20 mb-12">
          <span className="bg-gradient-to-r from-[#D88C6C] via-[#C17262] to-[#A65355] inline-block text-transparent bg-clip-text">
            Convenient,
          </span>{" "}
          quality
          <br />
          care 100% online
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
            Popular{" "}
            <span className="bg-gradient-to-r from-[#D88C6C] via-[#C17262] to-[#A65355] inline-block text-transparent bg-clip-text">
              treatments
            </span>
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
          *Hard Mints and Hard Hybrids are compounded products and have not been
          approved by the FDA. The FDA does not verify the safety or
          effectiveness of compounded drugs.
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
