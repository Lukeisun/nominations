"use client";
import { signIn, signOut, useSession } from "next-auth/react";
export default function Component() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <button type="button" onClick={() => signOut()}>
        Sign Out
      </button>
    );
  }
  return (
    <>
      <button
        type="button"
        onClick={() => signIn("twitch", { callbackUrl: "/" })}
      >
        Sign In
      </button>
    </>
  );
}
