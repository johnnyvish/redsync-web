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
    <main className="flex justify-center items-center  min-h-screen">
      <div className="flex justify-center items-center shadow-2xl w-[320px] sm:w-[400px] md:w-[640px] lg:w-[800px] h-[520px] bg-white rounded-2xl">
        <div className="hidden md:flex justify-center items-center w-[40%] h-full">
          <img src="/logo.png" className="w-[80%] ml-12"></img>

          {/* <img
            className="rounded-2xl self-center mt-12 ml-12 w-[90%]"
            src="https://media.discordapp.net/attachments/1143722023214911530/1219021076290474054/DALLE_2024-03-17_16.33.45_-_Create_an_image_of_a_modern_minimalistic_logo_for_a_tech_company_named_redsync._The_logo_should_be_simple_and_consist_of_the_companys_name_with_a_.webp?ex=6609c8d8&is=65f753d8&hm=b5bb7ced7f5ed804432d0940b80ba0fcdd38a588f6cf87ef312b46a8fe98e8ac&=&format=webp&width=1064&height=1064"
          ></img> */}
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full md:w-[60%] h-full"
        >
          <h1 className="text-4xl font-bold mt-12">Sign Up</h1>
          <div className="flex flex-col mt-8 space-y-2 w-[80%]">
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
          <div className="flex flex-col mt-6 space-y-2 w-[80%]">
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
          <div className="flex flex-col mt-6 space-y-2 w-[80%]">
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
            className="mt-8 px-4 w-[80%] py-2 bg-red-600 text-white font-bold rounded-lg"
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
