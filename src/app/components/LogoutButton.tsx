"use client";
import { signOut, useSession } from "next-auth/react";
export default function Component() {
  const { data: session } = useSession();
  console.log(session);
  if (!session) {
    return <></>;
  }
  return (
    <>
      <button type="button" onClick={() => signOut()}>
        Sign Out
      </button>
    </>
  );
}
