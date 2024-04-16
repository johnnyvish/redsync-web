import { SignOut } from "@/components/sign-out";
import { auth } from "@/auth";

export default async function Profile() {
  const session = await auth();

  if (!session) return null;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <img src={session.user.img} alt="User Avatar" />
      <h1>{session.user.email}</h1>
      <h1>{session.user.name}</h1>
      <SignOut></SignOut>
    </div>
  );
}
