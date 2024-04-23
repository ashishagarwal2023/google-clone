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
  return (
    <main class="flex items-center justify-center flex-col mt-8 lg:mt-16">
      <img
        class="w-52 sm:w-[272px]"
        width="272"
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="Google"
      />

      <form class="my-8 flex rounded-full border border-gray-200 py-3 px-4 hover:shadow">
        <img src="/icons/search.svg" className="w-6 h-6 fill-gray-400" />
        <input class="px-4 outline-none w-[350px] sm:w-[487px]" type="text" />
        <img src="/icons/mic.svg" className="w-6 h-6 mr-4" />
        <img src="/icons/lens.svg" className="w-6 h-6" />
      </form>

      <div class="mb-8 space-x-2">
        <button class="rounded border border-transparent bg-gray-50 py-2 px-4 text-sm hover:border-gray-200 hover:shadow">
          Google Search
        </button>
        <button class="rounded border border-transparent bg-gray-50 py-2 px-4 text-sm hover:border-gray-200 hover:shadow">
          I'm Feeling Lucky
        </button>
      </div>

      <div class="text-sm">
        <p class="text-center space-y-1">
          <span>Google offered in:</span>
          <span class="block sm:inline sm:ml-2 space-x-2">
            {languages.map((language, index) => (
              <a href="#" class="text-blue-700 hover:underline" key={index}>
                {language}
              </a>
            ))}
          </span>
        </p>
      </div>
    </main>
  );
}
