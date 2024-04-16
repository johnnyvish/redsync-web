import { signIn } from "@/auth.js";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/profile" });
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  );
}
