"use client";
import { useState } from "react";

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
    window.open(url);
  }
  return (
    <main className="flex items-center justify-center flex-col mt-8 lg:mt-16">
      <img
        className="w-52 sm:w-[272px]"
        width="272"
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="Google"
      />

      <form
        className="my-8 flex rounded-full border border-gray-200 py-3 px-4 hover:shadow"
        onSubmit={handleSearchSubmit}
      >
        <img src="/icons/search.svg" className="w-6 h-6 fill-gray-400" />
        <input
          className="px-4 outline-none w-[350px] sm:w-[487px]"
          type="text"
          value={search}
          onChange={handlSearchChange}
        />
        <img src="/icons/mic.svg" className="w-6 h-6 mr-4 cursor-pointer" />
        <img src="/icons/lens.svg" className="w-6 h-6 cursor-pointer" />
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
            I'm Feeling Lucky
          </button>
        </a>
      </div>

      <div className="text-sm">
        <p className="text-center space-y-1">
          <span>Google offered in:</span>
          <span className="block sm:inline sm:ml-2 space-x-2">
            {languages.map((language, index) => (
              <a href="#" className="text-blue-700 hover:underline" key={index}>
                {language}
              </a>
            ))}
          </span>
        </p>
      </div>
    </main>
  );
}
