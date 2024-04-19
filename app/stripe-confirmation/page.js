"use client";

import { useRouter } from "next/navigation";
import { CiCircleCheck } from "react-icons/ci";

export default function StripeConfirmation() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center w-full h-screen overflow-hidden">
      <div className="mt-20 flex flex-col justify-center items-center">
        <CiCircleCheck size={80} color="#24B47E" />
        <h1 className="mt-4 font-bold text-2xl w-[80%] text-center">
          Thanks for subscribing
        </h1>
        <h2 className="mt-4 font-bold text-gray-500 text-center text-sm mt-4 w-[60%]">
          A payment to THEREDSYNC.COM will appear on your statement.
        </h2>
      </div>

      <div className="receipt-container mt-28 w-[360px] h-[64px] bg-transparent flex justify-between items-center text-[#949494]">
        <h2 className="font-bold text-sm p-4">THEREDSYNC.COM</h2>
        <h2 className="font-bold text-[#E6E6E6] text-sm py-4">
          -------------------
        </h2>
        <h2 className="font-bold text-sm p-4">$30.00</h2>
      </div>

      <button
        onClick={() => {
          router.push("/congratulations");
        }}
        className="bg-[#FF2D55] mt-28 rounded-2xl w-[160px] h-[52px] text-white font-bold text-xl"
      >
        Continue
      </button>

      {/* <img src="/stripe-confirmation.png" className="w-[480px]"></img> */}
    </div>
  );
}
