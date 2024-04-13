"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [syncCode, setSyncCode] = useState("");
  const router = useRouter();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const handleSyncCodeChange = (e) => setSyncCode(e.target.value);

  const validateSyncCode = async (code) => {
    const response = await fetch("/api/isValidSyncCode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ syncCode: code }),
    });
    const data = await response.json();
    return data.isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const isValidCode = await validateSyncCode(syncCode);
    if (!isValidCode) {
      alert("Invalid Access Code.");
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
          syncCode: syncCode,
        }),
      });

      const data = await response.json();

      if (data.status === 200) {
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
    <main className="flex justify-center items-center  min-h-screen bg-red-200">
      <div className="flex justify-center items-center shadow-2xl w-[320px] sm:w-[400px] md:w-[640px] lg:w-[800px] h-[600px] bg-white rounded-2xl">
        <div className="hidden md:flex justify-center items-center w-[40%] h-full">
          <img src="/EllieBody.png" className="w-[80%] ml-12"></img>
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
          <div className="flex flex-col mt-6 space-y-2 w-[80%]">
            <label
              className="block text-gray-700 text-sm font-bold"
              htmlFor="SyncCode"
            >
              Sync Code
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="SyncCode"
              type="text"
              placeholder="Sync Code"
              value={syncCode}
              onChange={handleSyncCodeChange}
              required
            />
          </div>
          <button
            type="submit"
            className="mt-8 px-4 w-[80%] py-2 bg-[#FF2D55] text-white font-bold rounded-lg"
          >
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
}
