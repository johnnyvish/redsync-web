"use client";

import { useSession, signOut } from "next-auth/react";

export default function Profile() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  if (loading) return <p>Loading...</p>;
  if (!session) return <p>Access Denied</p>;

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <img
        src={
          session.user.image ||
          "https://cdn.vanderbilt.edu/vu-URL/wp-content/uploads/sites/156/2015/08/19155301/profile-42914_1280-768x713.png"
        }
        alt="User Avatar"
        className="mb-4 w-24 h-24 rounded-full"
      />
      <h1 className="text-xl mb-2">{session.user.email}</h1>
      {session.user.name && (
        <h1 className="text-xl mb-4">{session.user.name}</h1>
      )}
      {/* <div className="mb-4 p-3 border rounded text-center">
        <p>Sync Code: 12345-67890</p>{" "}
      </div> */}
      {/* <div className="mb-4">
        Subscription:{" "}
        <strong>{session.user.isSubscribed ? "Active" : "Inactive"}</strong>
      </div> */}
      <button
        onClick={() => (window.location.href = "/payment")} // Replace with your actual Stripe URL
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 mb-4"
      >
        Manage Subscription
      </button>
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Sign Out
      </button>
    </div>
  );
}
