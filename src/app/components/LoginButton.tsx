"use client";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
export default function Component() {
  const { data: session } = useSession();
  if (session) {
    redirect("/");
  }
  return (
    <>
      Not signed in <br />
      <button type="button" onClick={() => signIn()}>
        Sign In
      </button>
    </>
  );
}
