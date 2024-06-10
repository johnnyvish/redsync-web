import NavBar from "@/components/NavBar";
import { FaCheck } from "react-icons/fa";

export default function Pricing() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <NavBar />
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-36 mb-8">
        <div className="flex flex-col justify-center gap-16 w-[360px] bg-primaryGreen rounded-[32px] p-12 h-[560px]">
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-white">
              One Time Purchase
            </h2>
            <div className="flex justify-start items-end mt-8">
              <h1 className="text-6xl font-bold text-white ">$399</h1>
            </div>
            <div className="flex flex-col gap-8 mt-12">
              <div className="flex gap-4 items-center w-full">
                <div className="flex justify-center items-center p-3 bg-white rounded-full">
                  <FaCheck color="#063A35" />
                </div>
                <h2 className="text-white text-2xl font-semibold">
                  5 biosensors
                </h2>
              </div>
              <div className="flex gap-4 items-center w-full">
                <div className="flex justify-center items-center p-3 bg-white rounded-full">
                  <FaCheck color="#063A35" />
                </div>
                <h2 className="text-white text-2xl font-semibold">
                  Risk scores.
                </h2>
              </div>
              <div className="flex gap-4 items-center w-full">
                <div className="flex justify-center items-center p-3 bg-white rounded-full">
                  <FaCheck color="#063A35" />
                </div>
                <div className="flex flex-col justify-center ">
                  <h2 className="text-white text-2xl font-semibold">
                    Rose A.I.
                  </h2>
                  <h2 className="text-white text-xl font-semibold">
                    {"("}for one year{")"}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <button className="text-xl font-bold bg-white p-2 w-full self-center rounded-[32px] font-semibold text-white w-[160px]">
            <a href="/contact" className="text-primaryGreen">
              Get Started
            </a>
          </button>
        </div>
        <div className="flex flex-col justify-center gap-16 w-[360px] bg-primary rounded-[32px] p-12 h-[560px]">
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-white">Subscription</h2>
            <div className="flex justify-start items-end mt-8 gap-2">
              <h1 className="text-6xl font-bold text-white ">$35</h1>
              <h1 className="text-2xl font-semibold text-white">/ month</h1>
            </div>
            <div className="flex flex-col gap-8 mt-12">
              <div className="flex gap-4 items-center w-full">
                <div className="flex justify-center items-center p-3 bg-white rounded-full">
                  <FaCheck color="#D02F53" />
                </div>
                <h2 className="text-white text-2xl font-semibold">
                  5 biosensors
                </h2>
              </div>
              <div className="flex gap-4 items-center w-full">
                <div className="flex justify-center items-center p-3 bg-white rounded-full">
                  <FaCheck color="#D02F53" />
                </div>
                <h2 className="text-white text-2xl font-semibold">
                  Get risk scores
                </h2>
              </div>
              <div className="flex gap-4 items-center w-full">
                <div className="flex justify-center items-center p-3 bg-white rounded-full">
                  <FaCheck color="#D02F53" />
                </div>
                <h2 className="text-white text-2xl font-semibold">Rose A.I</h2>
              </div>
            </div>
          </div>

          <button className="text-xl font-bold bg-white p-2 w-full self-center rounded-[32px] font-semibold text-white w-[160px]">
            <a href="/sign-up" className="text-primary">
              Get Started
            </a>
          </button>
        </div>
      </div>
    </main>
  );
}
