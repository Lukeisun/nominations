"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import placeholder_pfp from "@/../public/placeholder_pfp.png";
const handleSignOut = () => signOut();
const handleSignIn = () => signIn("twitch", { callbackUrl: "/" });
export default function Component() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col pt-[15%] items-center">
      <div className="card justify-center gap-2">
        {session ? (
          <>
            <Image
              src={session.user?.image ?? placeholder_pfp}
              width={150}
              height={150}
              alt="twitch user profile picture"
              className="rounded-full"
            />
            <div className="pb-8 font-bold">{session.user?.name}</div>
            <button className="btn-login" type="button" onClick={handleSignOut}>
              LOGOUT
            </button>
            <Link className="btn-login" href="/">
              HOME
            </Link>
          </>
        ) : (
          <>
            <Image
              src={placeholder_pfp}
              width={150}
              height={150}
              alt="twitch user profile picture"
              className="rounded-full"
            />
            <p className="pb-8 font-bold">chatter</p>
            <button className="btn-login" type="button" onClick={handleSignIn}>
              LOGIN
            </button>
          </>
        )}
      </div>
    </div>
  );
}
