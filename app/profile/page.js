"use client";

import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Profile() {
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
      <h1 className="border-b py-8 text-4xl font-semibold">Settings</h1>
      <div className="flex overflow-x-auto border-b sm:justify-center">
        <button
          className={`py-2 px-4 font-semibold transition-colors ${
            activeTab === "profile"
              ? "text-[#FF2D55] border-b-2 border-[#FF2D55]"
              : "hover:text-[#FF2D55]"
          }`}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
        <button
          className={`py-2 px-4 font-semibold transition-colors ${
            activeTab === "billing"
              ? "text-[#FF2D55] border-b-2 border-[#FF2D55]"
              : "hover:text-[#FF2D55]"
          }`}
          onClick={() => setActiveTab("billing")}
        >
          Billing
        </button>
      </div>
      <div className="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
        {activeTab === "profile" ? (
          <div className="pt-4 flex flex-col justify-center items-center">
            <h1 className="py-2 text-2xl font-semibold">Profile</h1>
            <div className="mt-4 flex flex-col justify-center items-center">
              <img
                src={session.user.image}
                alt="User Avatar"
                className="mb-4 w-24 h-24 rounded-full"
              />

              <p className="text-xl font-semibold">{session.user.name}</p>
              <p className="text-gray-600">{session.user.email}</p>
              <button
                onClick={() =>
                  signOut({
                    callbackUrl: "/",
                  })
                }
                className="mt-4 mb-4 text-sm font-semibold text-rose-600 underline decoration-2"
              >
                Sign out
              </button>
            </div>
          </div>
        ) : (
          <div className="pt-4 flex flex-col justify-center items-center">
            <h1 className="py-2 text-2xl font-semibold">Billing</h1>
            <div className="mt-4  flex flex-col justify-center items-center">
              <div className="flex items-center">
                <span
                  className={`h-4 w-4 rounded-full ${
                    subscriptionActive ? "bg-green-500" : "bg-[#FF2D55]"
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
                className="mt-4 mb-4 px-4 py-2 bg-[#FF2D55] text-white rounded-[32px] hover:bg-[#FF2D55]"
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
