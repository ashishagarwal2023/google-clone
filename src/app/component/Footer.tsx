const countries = [
  "India",
  "United States",
  "United Kingdom",
  "Brazil",
  "Europe",
  "Pakistan",
  "Afghanistan",
]

export const Footer = () => {
  return (
    <footer className="text-[15px] text-gray-500 mt-8 md:fixed md:bottom-0 w-full">
      <div className="border-b bg-gray-100 py-4 px-8">
        <select className="focus:outline-none select-none" name="Country">
          {countries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))}          
        </select>
      </div>
      <div className="flex justify-between bg-gray-100 py-4 px-8 text-sm">
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Advertising
          </a>
          <a href="#" className="hover:underline">
            Business
          </a>
          <a href="#" className="hover:underline">
            How Search works
          </a>
        </div>

        <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Settings
          </a>
        </div>
      </div>
    </footer>
  );
}
