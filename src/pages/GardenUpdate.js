import React from "react"; 

const GardenUpdate = () => {
    return (
        <div class="container py-20 px-5 justify-center flex mx-auto">
            <img src="https://images.fineartamerica.com/images/artworkimages/medium/3/hot-green-cactus-drawing-for-tequila-lovers-sunny-desert-wild-plant-with-red-flower-moodart365-transparent.png" alt="" class="h-100 w-100"></img>
            <div class="flex-col px-4 py-4 lg:px-8 space-y-3">
                    <div class="mt-36 py-3 text-center text-[#426B1F]">
                        <p class="text-4xl font-serif font-bold leading-loose "> You've earned </p>
                        <p class="text-4xl font-serif font-bold leading-loose "> a new plant! </p>
                        <p><span class="mr-96"></span></p>
                    </div>

                    <div class="container shadow-lg bg-[#E5EEE3] rounded-xl text-[#000000] font-serif leading-loose px-8 py-8">
                        <p class="text-3xl text-center font-serif leading-loose ">Total Rewards: 200</p>
                        <p class="text-3xl text-center font-serif leading-loose ">Next Plant At: 100 </p>
                    </div>
            </div>
        </div>
    );
  }
  
export default GardenUpdate;
