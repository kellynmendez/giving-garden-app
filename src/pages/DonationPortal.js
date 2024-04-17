import React from "react"; 
import { useState } from "react";

const DonationPortal = () => {
    const [showPopup, setShowPopup] = useState(false);
    
    const handleAddToBasket = () => {
       setShowPopup(true);
       setTimeout(() => setShowPopup(false), 2000); // Hide popup after 2 seconds
    };

    return (
        <div class="space-y-10">

        <meta charSet="utf-8"/>
        <div>
            <p className="font-serif font-heading text-5xl font-bold text-[#426B1F] py-5 px-20"> Donation Portal</p>
        </div>
        <hr />

        <div class="container flex mx-auto lg:px-4 space-x-10">
            <div class="container shadow-md w-7/12 px-10 py-10 lg:px-8 items-left bg-[#ECECEC] rounded-xl text-[#5B5040] font-serif leading-loose">
                <form>
                    <div class="mb-6">
                        <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 ">Item Title</label>
                        <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
                    </div>

                    <div class="mb-6">
                        <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 ">Item Price</label>
                        <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
                    </div>

                    <div class="mb-6">
                        <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 ">Quantity Needed</label>
                        <input type="number" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
                    </div>


                    <div class="mb-6">
                        <label class="block mb-2 text-sm font-medium text-gray-900" for="file_input">Upload file</label>
                        <input class="block w-full text-sm text-gray-900 border border-gray-400 rounded-lg cursor-pointer bg-gray-50 focus:outline-none0" id="file_input" type="file"/>
                        <p class="mt-1 text-sm text-gray-500" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                    </div>
                    
                    <div class="flex justify-center">
                        <button onClick={handleAddToBasket} class="bg-[#87A36F] object-center hover:bg-white text-gray py-2 px-2 rounded-full">Request Item</button>
                        {showPopup && (
                        <div className="popup">
                        <p>Item Requested</p>
                        </div>
                        )}
                    </div>
                        
                    </form>
            </div>

            <div class="flex flex-col w-1/2 mx-auto space-y-5 space-x-6 mb-16">
                <div class="border-b text-center font-bold leading-loose font-serif text-3xl text-[#6e8766]">
                    <p> Currently Requested </p>
                </div>
                <div class="container shadow-xl px-2 py-5  flex-col text-center items-center bg-[#ECECEC] rounded-xl text-[#5B5040] font-serif leading-loose">
                    <div class="flex space-x-2">
                        <img class="h-36 w-36" src="https://www.hartz.com/wp-content/uploads/2023/04/3270012623_just_for_cats_variety_pack_front_1300x1300.png" alt=""></img>
                        <div class="flex-col space-y-1">
                            <p class="text-lg text-left font-bold">Cat Toys</p>
                            <p class="text-left text-lg text-[#868179]">$10.99</p>
                            <p></p>
                        </div>
                        <div class="flex-1 text-right mt-10 px-4">
                            <button class="bg-white hover:bg-[#87A36F] text-gray py-2 px-4 rounded-full">Remove</button>
                        </div>
                    </div>
                </div>
                <div class="container shadow-xl px-2 py-5  flex-col text-center items-center bg-[#ECECEC] rounded-xl text-[#5B5040] font-serif leading-loose">
                    <div class="flex space-x-2">
                        <img class="h-36 w-36" src="https://www.purina.com/sites/default/files/products/2023-01/beggin-original-bacon-product.png" alt=""></img>
                        <div class="flex-col space-y-1">
                            <p class="text-lg text-left font-bold">Dog Treats</p>
                            <p class="text-left text-lg text-[#868179]">$5.20</p>
                            <p></p>
                        </div>
                        <div class="flex-1 text-right mt-10 px-4">
                            <button class="bg-white hover:bg-[#87A36F] text-gray py-2 px-4 rounded-full">Remove</button>
                        </div>
                    </div>
                </div>
                <div class="container shadow-xl  px-2 py-5  flex-col text-center items-center bg-[#ECECEC] rounded-xl text-[#5B5040] font-serif leading-loose">
                    <div class="flex space-x-2">
                        <img class="h-36 w-36" src="https://www.meijer.com/content/dam/meijer/product/0713/73/3915/84/0713733915847_0_A1C1_1200.png" alt=""></img>
                        <div class="flex-col space-y-1">
                            <p class="text-lg text-left font-bold">Dog Food</p>
                            <p class="text-left text-lg text-[#868179]">$3.99</p>
                            <p></p>
                        </div>
                        <div class="flex-1 text-right mt-10 px-4">
                            <button class="bg-white hover:bg-[#87A36F] text-gray py-2 px-4 rounded-full">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
            

            

            </div>

        <style>
        {`
          :root {
            --popup-font-size: 25px;
            --popup-text-color: black;
            --popup-font-family: Arial, sans-serif;

          }
          .popup {
            position: absolute;
            top: 20%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .popup p {
            color: var(--popup-text-color);
            font-size: var(--popup-font-size);
            font-family: var(--popup-font-family);
          }
        `}
      </style>

    </div>
        
    );
}

export default DonationPortal;