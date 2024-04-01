import React from "react";

const Donate = () => {
  return (
    <div class="space-y-5">
    <meta charSet="utf-8"/>
      <div className="flex items-end py-10">
        <p className="font-serif font-heading text-4xl font-bold text-[#2c7b47] py-5 px-20"> Donating to Richardson Humane Society</p>
        <div className="py-5 px-40 flex item-right max-w-30 mx-auto space-x-5">
            <svg class="h-8 w-8 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
            <svg class="h-8 w-8 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
            <svg class="h-8 w-8 text-red-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        </div>
      </div>
    <hr />
    <div class="container max-w-6xl mx-auto px-10 py-10 flex flex-col text-center items-center bg-[#ECECEC] rounded-xl text-[#5B5040] font-serif leading-loose">
        <p class="text-3xl font-serif leading-loose ">Item 1</p>
     </div>
     <div class="container max-w-6xl mx-auto px-10 py-10 flex flex-col text-center items-center bg-[#ECECEC] rounded-xl text-[#5B5040] font-serif leading-loose">
        <p class="text-3xl font-serif leading-loose ">Item 2</p>
     </div>
     <div class="container max-w-6xl mx-auto px-10 py-10 flex flex-col text-center items-center bg-[#ECECEC] rounded-xl text-[#5B5040] font-serif leading-loose">
        <p class="text-3xl font-serif leading-loose ">Item 3</p>
     </div>
     <div class="container max-w-6xl mx-auto px-10 py-10 flex flex-col text-center items-center bg-[#ECECEC] rounded-xl text-[#5B5040] font-serif leading-loose">
        <p class="text-3xl font-serif leading-loose ">Item 4</p>
     </div>
  </div>
  );
}

export default Donate;