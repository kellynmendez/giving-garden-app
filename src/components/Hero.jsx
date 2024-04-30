import React from "react";

const Hero = ({ handleInputChange, query }) => {
  return (
    <div>
      <meta charSet="utf-8"/>
        <div className="flex items-end py-10">
          <p className="font-serif font-heading text-6xl font-bold text-[#426B1F] py-5 px-10"> Home</p>
          <form class="py-3 px-20 flex-1 max-w-30 mx-auto">   
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500" placeholder="Search Non-Profits..." required />
                  <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-[#426B1F] hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
              </div>
          </form>
          <div className="py-5 px-5 flex-1 space-x-4 text-right text-align">
            <button class="bg-[#426B1F] hover:bg-[#87A36F] text-white py-2 px-4 rounded-full">Default</button>
           {/* <button class="bg-transparent hover:bg-[#87A36F] text-[#426B1F] py-2 px-4 border rounded-full">A-Z</button>
            <button class="bg-transparent hover:bg-[#87A36F] text-[#426B1F] py-2 px-4 border rounded-full">List View</button> */}
            <button class="bg-transparent hover:bg-[#87A36F] text-[#426B1F] py-2 px-4 border rounded-full">Favorites</button>
          </div>
        </div>
        
      <hr />
    </div>
  );
}
export default Hero;