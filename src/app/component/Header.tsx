"use client";

import { useSession, signOut } from "next-auth/react";

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
        <button className="rounded-full p-2 hover:bg-gray-100">
          <img src="/icons/expirements.svg" />
        </button>
      )}
      <button className="mr-5 rounded-full p-2 hover:bg-gray-100 h-10 w-10 fill-[#5f6368]">
        <img src="/icons/bars.svg" />
      </button>
      <button>
        {session.status === "authenticated" ? (
          <a onClick={() => signOut()}>
            <img
              src={session["data"]["user"]["image"].replace(
                "s96-c",
                "s32-c-no"
              )}
              width="32"
              height="32"
              className="rounded-full"
              alt="You"
            />
          </a>
        ) : (
          <a
            href="/api/auth/signin"
            className="cursor-pointer text-white no-underline ml-2 bg-[#1a73e8] border border-[1px] border-transparent login-btn"
          >
            Sign in
          </a>
        )}
      </button>
    </nav>
  );
};
