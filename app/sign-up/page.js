"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { signIn } from "next-auth/react";
import { MdOutlineLock } from "react-icons/md";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const validatePassword = (password) => {
    const minLength = 8;
    return password.length >= minLength;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!validatePassword(password)) {
      alert(
        "Password does not meet the security requirements! You must have a minimum length of 8 characters, at least one number, one special character, one uppercase letter, and one lowercase letter."
      );
      return;
    }

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/settings",
    });

    if (result?.error) {
      alert("Email already exists");
    } else {
      router.push(result.url || "/settings");
    }
  };

  return (
    <main className="flex justify-center items-center h-screen bg-primary overflow-hidden">
      <div className="flex justify-center items-center shadow-2xl w-[320px] sm:w-[400px] md:w-[640px] lg:w-[800px] bg-white rounded-2xl">
        <div className="hidden md:flex justify-center items-center w-[40%] h-full">
          <img src="/Rose.png" className="w-[80%] ml-12"></img>
        </div>

        <div className="flex flex-col justify-center items-center w-full md:w-[60%] h-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center w-full"
          >
            <h1 className="text-4xl font-bold mt-12">Create account</h1>
            <div className="flex flex-col mt-8 space-y-2 w-[80%]">
              <label
                className="block text-gray-700 text-sm font-bold"
                htmlFor="Email"
              >
                Email
              </label>
              <div className="flex items-center shadow appearance-none border rounded-lg w-full">
                <div className="pl-3">
                  <MdOutlineMail />
                </div>
                <input
                  className="flex-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col mt-6 space-y-2 w-[80%]">
              <label
                className="block text-gray-700 text-sm font-bold"
                htmlFor="Password"
              >
                Password
              </label>
              <div className="flex items-center shadow appearance-none border rounded-lg w-full">
                <div className="pl-3">
                  <MdOutlineLock /> {/* Icon for the password input */}
                </div>
                <input
                  className="flex-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col mt-6 space-y-2 w-[80%]">
              <label
                className="block text-gray-700 text-sm font-bold"
                htmlFor="ConfirmPassword"
              >
                Confirm Password
              </label>
              <div className="flex items-center shadow appearance-none border rounded-lg w-full">
                <div className="pl-3">
                  <MdOutlineLock />
                </div>
                <input
                  className="flex-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="ConfirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 px-4 w-[80%] py-2 bg-primary text-white font-bold rounded-lg"
            >
              Create account
            </button>
          </form>
          <h2 className="text-xl font-semibold mt-4">or</h2>
          <div className="flex flex-col justify-center items-center w-full">
            <button
              onClick={() => signIn("google", { callbackUrl: "/settings" })}
              className="mt-4 mb-8 px-4 w-[80%] py-2 border-2 border-primary text-black font-semibold rounded-lg"
            >
              Sign up with <span className="text-[#4285F4]">G</span>
              <span className="font-bold text-[#EA4335]">o</span>
              <span className="font-bold text-[#FBBC05]">o</span>
              <span className="font-bold text-[#4285F4]">g</span>
              <span className="font-bold text-[#34A853]">l</span>
              <span className="font-bold text-[#EA4335]">e</span>
            </button>
            <div className="mt-4 mb-8 flex justify-center items-center space-x-2">
              <h2 className="text-md ">Already have an account?</h2>
              <Link href="/sign-in">
                <span className="font-bold text-primary">Sign in</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
