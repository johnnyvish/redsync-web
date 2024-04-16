"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { SignOut } from "@/components/sign-out";

export default function Profile() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  if (loading) return <p>Loading...</p>;
  if (!session) return <p>Access Denied</p>;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <img src={session.user.image} alt="User Avatar" />
      <h1>{session.user.email}</h1>
      <h1>{session.user.name}</h1>
      <SignOut />
    </div>
  );
}
