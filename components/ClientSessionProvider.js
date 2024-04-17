"use client"; // This ensures the component is treated as a client component
import { SessionProvider } from "next-auth/react";

const ClientSessionProvider = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default ClientSessionProvider;
