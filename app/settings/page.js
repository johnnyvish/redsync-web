"use client";

import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Settings() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const [activeTab, setActiveTab] = useState("profile");
  const [subscriptionActive, setSubscriptionActive] = useState("Loading...");
  const router = useRouter();

  const fetchSubscriptionStatus = async () => {
    if (session) {
      try {
        const response = await fetch("/api/subscription", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: session.user.email,
          }),
        });
        const data = await response.json();
        console.log(data);
        if (response.ok) {
          setSubscriptionActive(data.isActive);
        } else {
          setSubscriptionActive(false);
        }
      } catch (error) {
        console.error("Failed to fetch subscription status:", error);
      }
    }
  };

  useEffect(() => {
    if (activeTab === "billing") {
      fetchSubscriptionStatus();
    }
  }, [activeTab, session]);

  if (loading) return <p>Loading...</p>;
  if (!session) return <p>Access Denied</p>;

  return (
    <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto">
      <h1 className="py-8 text-4xl font-semibold">Settings</h1>
      <div className="flex overflow-x-auto sm:justify-center">
        <button
          className={`py-2 px-4 font-semibold transition-colors text-xl ${
            activeTab === "profile"
              ? "text-primary border-b-2 border-primary"
              : "hover:text-primary"
          }`}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
        <button
          className={`py-2 px-4 font-semibold transition-colors text-xl ${
            activeTab === "billing"
              ? "text-primary border-b-2 border-primary"
              : "hover:text-primary"
          }`}
          onClick={() => setActiveTab("billing")}
        >
          Billing
        </button>
      </div>
      <div className="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-4 rounded-[40px]">
        {activeTab === "profile" ? (
          <div className="pt-4 flex flex-col justify-center items-center">
            <div className="mt-4 flex flex-col w-full justify-center items-center">
              <img
                src={session.user.image}
                alt="User Avatar"
                className="mb-4 w-24 h-24 rounded-full"
              />

              <p className="text-xl font-semibold">{session.user.name}</p>
              <p className="text-gray-600">{session.user.email}</p>

              {session.user.name != null && (
                <div className="my-4 w-[50%] h-[1px] bg-gray-200" />
              )}

              {session.user.name != null && (
                <div class="flex flex-col justify-center items-center">
                  <div class="flex flex-col space-y-2">
                    <label for="login-password">
                      <span class="text-sm text-gray-500">
                        Current Password
                      </span>
                      <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                        <input
                          type="password"
                          id="login-password"
                          class="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                          placeholder="***********"
                        />
                      </div>
                    </label>
                    <label for="login-password">
                      <span class="text-sm text-gray-500">New Password</span>
                      <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                        <input
                          type="password"
                          id="login-password"
                          class="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                          placeholder="***********"
                        />
                      </div>
                    </label>
                  </div>
                  <button class="mt-4 rounded-lg bg-primary w-full py-2 text-white">
                    Save Password
                  </button>
                </div>
              )}

              {/* <p class="mt-4 flex flex-col justify-center items-center">
                Can't remember your current password?
                <a
                  class="text-sm font-semibold text-primary underline decoration-2"
                  href="#"
                >
                  Recover Account
                </a>
              </p> */}

              {session.user.name != null && (
                <div className="my-4 w-[50%] h-[1px] bg-gray-200" />
              )}

              <button
                onClick={() =>
                  signOut({
                    callbackUrl: "/",
                  })
                }
                className="text-md font-semibold text-primary  underline decoration-2"
              >
                Sign out
              </button>

              <div className="my-4 w-[50%] h-[1px] bg-gray-200" />

              <div class="mb-10 flex flex-col justify-center items-center">
                <p class="inline-flex items-center rounded-full bg-rose-100 px-4 py-1 text-rose-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Delete Account
                </p>

                <button class="mt-4 text-sm font-semibold text-rose-600 underline decoration-2">
                  Continue with deletion
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="pt-4 flex flex-col justify-center items-center">
            <div className="mt-4  flex flex-col justify-center items-center">
              <div className="flex items-center">
                <span
                  className={`h-4 w-4 rounded-full ${
                    subscriptionActive ? "bg-green-500" : "bg-primary"
                  } mr-2`}
                ></span>
                <p className="py-2 text-lg">
                  Subscription: {subscriptionActive ? "Active" : "Inactive"}
                </p>
              </div>

              <button
                onClick={() => {
                  router.push("/payment");
                }}
                className="mt-4 mb-8 w-full py-2 bg-primary text-white rounded-[32px] hover:bg-primary"
              >
                Subscribe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
