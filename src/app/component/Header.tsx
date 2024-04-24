"use client";

import { useSession, signOut, signIn } from "next-auth/react";
import Image from "next/image";

export const Header = () => {
  const session = useSession();
  return (
    <nav className="flex mt-0 w-full items-center justify-end p-4 text-sm">
      <a href="#" className="mr-[17px] hover:underline">
        Gmail
      </a>
      <a href="#" className="mr-5 hover:underline">
        Images
      </a>
      {session.status === "authenticated" && (
        <button className="rounded-full p-2 hover:bg-gray-100" title="Expirements Icon">
          <Image src="/icons/expirements.svg" width={24} height={24} alt="Expirements Icon" />
        </button>
      )}
      <button className="mr-5 rounded-full p-2 hover:bg-gray-100 h-10 w-10 fill-[#5f6368]" title="Bars Icon">
        <Image src="/icons/bars.svg" width={40} height={40} alt="Bars Icon" />
      </button>
      <button title="Account">
        {session.status === "authenticated" ? (
          <a onClick={() => signOut()}>
            <Image
              src={session?.data?.user?.image?.replace(
                "s96-c",
                "s32-c-no"
              ) || ""}
              width={32}
              height={32}
              className="rounded-full"
              alt="You"
            />
          </a>
        ) : (
          <a
            onClick={() => signIn("google")}
            className="cursor-pointer text-white no-underline ml-2 bg-[#1a73e8] border border-[1px] border-transparent login-btn"
          >
            Sign in
          </a>
        )}
      </button>
    </nav>
  );
};
