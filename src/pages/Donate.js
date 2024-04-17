import { useState } from "react";
import React from "react";

const Donate = () => {
   
   const [showPopup, setShowPopup] = useState(false);
    
   const handleAddToBasket = () => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000); // Hide popup after 2 seconds
   };

  return (
    <div class="space-y-5">
    <meta charSet="utf-8"/>
      <div className="flex items-end py-10">
        <p className="font-serif font-heading text-4xl font-bold text-[#426B1F] py-5 px-20"> Donating to Richardson Humane Society</p>
        <div className="py-5 px-40 flex item-right max-w-30 mx-auto space-x-5">
            <svg class="h-8 w-8 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
            <svg class="h-8 w-8 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
            <svg class="h-8 w-8 text-red-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        </div>
      </div>
    <hr />
    <div class="container max-w-6xl mx-auto px-10 py-10 flex-col text-center items-center bg-[#ECECEC] rounded-xl text-[#5B5040] font-serif leading-loose">
      <div class="flex">
         <img class="h-20 w-20" src="https://www.purina.com/sites/default/files/products/2023-01/beggin-original-bacon-product.png" alt=""></img>
         <div class="flex-col items-right space-y-2">
            <p class="px-10 text-lg font-bold">Dog Treats</p>
            <p class="text-lg">$5.20</p>
         </div>
         <div class="flex-1 text-right">
            <button onClick={handleAddToBasket} class="bg-white hover:bg-[#87A36F] text-gray py-4 px-4 rounded-full">Add to Basket</button>
            {showPopup && (
            <div className="popup">
               <p>Added to Basket</p>
            </div>
            )}
         </div>
      </div>
     </div>

     <div class="container max-w-6xl mx-auto px-10 py-10 flex-col text-center items-center bg-[#ECECEC] rounded-xl text-[#5B5040] font-serif leading-loose">
      <div class="flex">
         <img class="h-20 w-20" src="https://www.meijer.com/content/dam/meijer/product/0713/73/3915/84/0713733915847_0_A1C1_1200.png" alt=""></img>
         <div class="flex-col items-right space-y-2">
            <p class="px-10 text-lg font-bold">Dog Food</p>
            <p class="text-lg">$3.99</p>
         </div>
         <div class="flex-1 text-right">
            <button onClick={handleAddToBasket} class="bg-white hover:bg-[#87A36F] text-gray py-4 px-4 rounded-full">Add to Basket</button>
            {showPopup && (
            <div className="popup">
               <p>Added to Basket</p>
            </div>
            )}
         </div>
   
      </div>
     </div>

     <div class="container max-w-6xl mx-auto px-10 py-10 flex-col text-center items-center bg-[#ECECEC] rounded-xl text-[#5B5040] font-serif leading-loose">
      <div class="flex">
         <img class="h-20 w-20" src="https://www.hartz.com/wp-content/uploads/2023/04/3270012623_just_for_cats_variety_pack_front_1300x1300.png" alt=""></img>
         <div class="flex-col items-right space-y-2">
            <p class="px-10 text-lg font-bold">Cat Toys</p>
            <p class="text-lg">$10.99</p>
         </div>
         <div class="flex-1 text-right">
            <button onClick={handleAddToBasket} class="bg-white hover:bg-[#87A36F] text-gray py-4 px-4 rounded-full">Add to Basket</button>
            {showPopup && (
            <div className="popup">
               <p>Added to Basket</p>
            </div>
            )}
         </div>
      </div>
     </div>

     <div class="container max-w-6xl mx-auto px-8 py-8 flex-col text-center items-center bg-[#ECECEC] rounded-xl text-[#5B5040] font-serif leading-loose">
      <div class="flex">
         <img class="h-20 w-20" src="https://cuddlesmeow.com/cdn/shop/products/O1CN01mbi4b81xYRKbblMNT__2210956526455-0-cib.png?v=1670899855" alt=""></img>
         <div class="flex-col items-right space-y-2">
            <p class="px-10 text-lg font-bold">Cat Bed</p>
            <p class="text-lg">$35</p>
         </div>
         <div class="flex-1 text-right">
            <button onClick={handleAddToBasket} class="bg-white hover:bg-[#87A36F] text-gray py-4 px-4 rounded-full">Add to Basket</button>
            {showPopup && (
            <div className="popup">
               <p>Added to Basket</p>
            </div>
            )}
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
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #f1f1f1;
            padding: 40px;
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

export default Donate;