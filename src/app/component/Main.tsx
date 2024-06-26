"use client";
import { useState } from "react";
import Image from "next/image";

const languages = [
  "हिन्दी",
  "বাংলা",
  "తెలుగు",
  "मराठी",
  "தமிழ்",
  "ગુજરાતી",
  "ಕನ್ನಡ",
  "മലയാളം",
  "ਪੰਜਾਬੀ",
];

export const Main = () => {
  const [search, setSearch] = useState("");
  const handlSearchChange = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value)
  }

  const handleSearchSubmit = (e: any) => {
    e.preventDefault();
    const finalSearch = search.trim();
    if (finalSearch === "") {
      return;
    }
    const url =
      "https://google.com/search?q=" + encodeURIComponent(finalSearch);
    window.location.href =url;
  }
  return (
    <main className="flex items-center justify-center flex-col mt-8 lg:mt-16 select-none">
      <Image
        className="w-52 sm:w-[272px]"
        width="272"
        height="92"
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="Google"
      />

      <form
        className="my-8 flex rounded-full border border-gray-200 py-3 px-4 hover:shadow"
        onSubmit={handleSearchSubmit}
      >
        <Image src="/icons/search.svg" alt="Search" className="w-6 h-6 fill-gray-400" width={24} height={24} />
        <input
          className="px-4 outline-none w-[350px] sm:w-[487px]"
          type="text"
          value={search}
          onChange={handlSearchChange}
        />
        <Image src="/icons/mic.svg" alt="Mic" className="w-6 h-6 mr-4 cursor-pointer" width={24} height={24} />
        <Image src="/icons/lens.svg" alt="Lens" className="w-6 h-6 cursor-pointer" width={24} height={24} />
      </form>

      <div className="mb-8 space-x-2">
        <button
          onClick={handleSearchSubmit}
          className="rounded border border-transparent bg-gray-50 py-2 px-4 text-sm hover:border-gray-200 hover:shadow"
        >
          Google Search
        </button>
        <a>
          <button className="rounded border border-transparent bg-gray-50 py-2 px-4 text-sm hover:border-gray-200 hover:shadow">
            I&apos;m Feeling Lucky
          </button>
        </a>
      </div>

      <div className="text-sm select-text">
        <p className="text-center space-y-1">
          <span>Google offered in:</span>
          <span className="block sm:inline sm:ml-2 space-x-2">
            {languages.map((language, index) => (
              <a href="#" className="text-blue-700 hover:underline" key={index}>
                {language}
              </a>
            ))}
          </span>
          <br />
          <span className="text-transparent selection:text-black select-text mt-2">
            Google Clone by {" "}
            <a href="https://github.com/ashishagarwal2023" target="_blank" className="selection:text-blue-500">
              @ashishagarwal2023
            </a>. Not the real!
          </span>
        </p>
      </div>
    </main>
  );
}
