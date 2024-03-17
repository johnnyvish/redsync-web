"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaHeart } from "react-icons/fa6";
import { IoMdWater } from "react-icons/io";
import { CgGym } from "react-icons/cg";
import { FaMoon } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { FaPills } from "react-icons/fa6";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("/api/addUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      console.log(data);

      if (response.status === 200) {
        console.log("Signup successful", data);
        router.push("/congratulations");
      } else {
        throw new Error(data.message || "An error occurred during signup.");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <main className="flex justify-center items-center bg-red-200  min-h-screen">
      <div className="flex justify-center items-center shadow-2xl w-[320px] sm:w-[400px] md:w-[640px] lg:w-[800px] h-[520px] bg-white rounded-2xl">
        <div className="relative hidden md:flex justify-center items-center w-[40%] h-full">
          <div className="absolute left-0 top-0 flex p-8">
            <h1 className="text-2xl text-[#FF2D55] font-bold">red</h1>
            <h1 className="text-2xl text-black font-bold">sync</h1>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full md:w-[60%] h-full"
        >
          <h1 className="text-4xl font-bold mt-12">Sign Up</h1>
          <div className="flex flex-col mt-8 space-y-2 w-[64%]">
            <label
              className="block text-gray-700 text-sm font-bold"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="flex flex-col mt-6 space-y-2 w-[64%]">
            <label
              className="block text-gray-700 text-sm font-bold"
              htmlFor="Password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="flex flex-col mt-6 space-y-2 w-[64%]">
            <label
              className="block text-gray-700 text-sm font-bold"
              htmlFor="ConfirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="ConfirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          <button
            type="submit"
            className="mt-8 px-4 w-[64%] py-2 bg-[#FF2D55] text-white font-bold rounded-lg"
          >
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
}

{
  /* <div className="relative">
            <div className="absolute left-[80px] top-1/2 rounded-full bg-[#FF2D55]">
              <div className="p-4 text-white">
                <FaHeart />
              </div>
            </div>
            <div className="absolute rounded-full left-[40px] top-[120px] bg-[#FF2D55]">
              <div className="p-4 text-white">
                <IoMdWater />
              </div>
            </div>
            <div className="absolute rounded-full left-[64px] top-[64px] bg-[#FF2D55]">
              <div className="p-4 text-white">
                <CgGym />
              </div>
            </div>
            <div className="absolute rounded-full left-[24px] -top-[32px] bg-[#FF2D55]">
              <div className="p-4 text-white">
                <FaMoon />
              </div>
            </div>
            <div className="absolute rounded-full -left-[20px] top-[60px] bg-[#FF2D55]">
              <div className="p-4 text-white">
                <MdFastfood />
              </div>
            </div>
            <div className="absolute rounded-full left-[32px] top-[12px] bg-[#FF2D55]">
              <div className="p-4 text-white">
                <FaPills />
              </div>
            </div>
          </div> */
}
