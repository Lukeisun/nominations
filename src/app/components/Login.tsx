"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
const handleSignOut = () => signOut();
const handleSignIn = () => signIn("twitch", { callbackUrl: "/" });
export default function Component() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col pt-[15%] items-center">
      <div className="font-mono flex flex-col justify-center items-center pt-10 pb-12 px-11 rounded-3xl gap-2 bg-navy">
        {session ? (
          <>
            <Image
              src={session.user?.image}
              width={150}
              height={150}
              alt="twitch user profile picture"
              className="rounded-full"
            />
            <p className="pb-8 font-bold">{session.user?.name}</p>
            <button className="btn" type="button" onClick={handleSignOut}>
              LOGOUT
            </button>
            <Link className="btn" href="/">
              HOME
            </Link>
          </>
        ) : (
          <button className="btn" type="button" onClick={handleSignIn}>
            SIGNOUT
          </button>
        )}
      </div>
    </div>
  );
}
