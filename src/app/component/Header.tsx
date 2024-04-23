export const Header = () => {
  return (
    <nav className="flex mt-0 w-full items-center justify-end p-4 text-sm">
      <a href="#" className="mr-[17px] hover:underline">
        Gmail
      </a>
      <a href="#" className="mr-5 hover:underline">
        Images
      </a>
      <button className="rounded-full p-2 hover:bg-gray-100">
        <img src="/icons/expirements.svg" />
      </button>
      <button className="mr-5 rounded-full p-2 hover:bg-gray-100 h-10 w-10 fill-[#5f6368]">
        <img src="/icons/bars.svg" />
      </button>
      <button>
        <a href="#">
          <img
            className="rounded-full"
            src="https://lh3.googleusercontent.com/a/ACg8ocLa0759pSiCgFy-el4DsDxQp7q3P3ln4UBlOfSF4gfPTUUdwNA=s32-c-no"
            alt="You"
          />
        </a>
      </button>
    </nav>
  );
}
