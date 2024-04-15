import React, {useState} from "react";

const Basket = () => {
    const [counts, setCounts] = useState({
        count1: 0,
        count2: 0,
        count3: 0,
    });

    const decrement = (key) => {
        if (counts[key] > 0) {
          setCounts(prevCounts => ({
            ...prevCounts,
            [key]: prevCounts[key] - 1,
          }));
        }
      };
    
      const increment = (key) => {
        setCounts(prevCounts => ({
          ...prevCounts,
          [key]: prevCounts[key] + 1
        }));
      };

    return (
        <div class="space-y-10">

        <meta charSet="utf-8"/>
        <div>
            <p className="font-serif font-heading text-5xl font-bold text-[#426B1F] py-5 px-20"> Basket</p>
        </div>
        <hr />

        <div class="container flex">
            <div class="flex flex-col w-1/2 mx-auto space-y-5 mb-16">
                <div class="container shadow-xl  px-7 py-5  flex-col text-center items-center bg-[#ECECEC] rounded-xl text-[#5B5040] font-serif leading-loose">
                    <div class="flex space-x-2">
                        <img class="h-36 w-36" src="https://parspng.com/wp-content/uploads/2023/08/clothespng.parspng.com-7-932x1024.png" alt=""></img>
                        <div class="flex-col space-y-1">
                            <p class="text-lg text-left font-bold">North Texas Youth Shelter - Clothes</p>
                            <p class="text-left text-lg text-[#868179]">$19.99</p>
                            <p></p>
                            <div className="flex items-center">
                                <button onClick={() => decrement('count1')} className="bg-[#9bb388] text-white font-bold py-1 px-3 rounded-xl">-</button>
                                <input type="number" value={counts.count1} className="text-center bg-gray-200 text-gray-700 w-16" readOnly />
                                <button onClick={() => increment('count1')} className="bg-[#9bb388] text-white font-bold py-1 px-2 rounded-xl">+</button>
                            </div>
                        </div>
                        <div class="flex-1 text-right">
                            <p class="text-lg font-bold">$19.99</p>
                        </div>
                    </div>
                </div>

                <div class="container shadow-xl px-7 py-5 flex-col text-center items-center bg-[#ECECEC] rounded-xl text-[#5B5040] font-serif leading-loose">
                    <div class="flex space-x-2">
                        <img class="h-36 w-36" src="https://assets.caseys.com/m/2c049ef4e9c8734b/400x400-1410004552_base.PNG" alt=""></img>
                        <div class="flex-col space-y-1">
                            <p class="text-lg text-left font-bold">North Texas Food Bank - 100 Bags of Goldfish</p>
                            <p class="text-left text-lg text-[#868179]">$24.99</p>
                            <p></p>
                            <div className="flex items-center">
                                <button onClick={() => decrement('count2')} className="bg-[#9bb388] text-white font-bold py-1 px-3 rounded-xl">-</button>
                                <input type="number" value={counts.count2} className="text-center bg-gray-200 text-gray-700 w-16" readOnly />
                                <button onClick={() => increment('count2')} className="bg-[#9bb388] text-white font-bold py-1 px-2 rounded-xl">+</button>
                            </div>
                        </div>
                        <div class="flex-1 text-right">
                            <p class="text-lg font-bold">$74.97</p>
                        </div>
                    </div>
                </div>

                <div class="container shadow-xl  px-7 py-5  flex-col text-center items-center bg-[#ECECEC] rounded-xl text-[#5B5040] font-serif leading-loose">
                    <div class="flex space-x-2">
                        <img class="h-36 w-36" src="https://www.meijer.com/content/dam/meijer/product/0713/73/3915/84/0713733915847_0_A1C1_1200.png" alt=""></img>
                        <div class="flex-col space-y-1">
                            <p class="text-lg text-left font-bold">Richardson Humane Center - Dog Food</p>
                            <p class="text-left text-lg text-[#868179]">$3.99</p>
                            <p></p>
                            <div className="flex items-center">
                                <button onClick={() => decrement('count3')} className="bg-[#9bb388] text-white font-bold py-1 px-3 rounded-xl">-</button>
                                <input type="number" value={counts.count3} className="text-center bg-gray-200 text-gray-700 w-16" readOnly />
                                <button onClick={() => increment('count3')} className="bg-[#9bb388] text-white font-bold py-1 px-2 rounded-xl">+</button>
                            </div>
                        </div>
                        <div class="flex-1 text-right">
                            <p class="text-lg font-bold">$3.99</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class=" px-8 py-4 space-y-10">
                <div class="container shadow-xl bg-[#f5f7f4] rounded-xl text-[#5B5040] font-serif leading-loose px-8 py-8">
                    <p class="text-3xl font-serif font-bold leading-loose ">Donation Summary </p>
                    <p class="max-w-4xl text-sm font-serif leading-loose"><span class="mr-64">Subtotal</span><span>$98.95</span></p>
                    <p class="max-w-4xl text-sm font-serif leading-loose"><span class="mr-64">Shipping</span><span>$3.99</span></p>
                    <p><span class="mr-96"></span></p>
                    <p class="max-w-4xl font-bold text-lg font-serif leading-loose"><span class="mr-64">Total</span><span>$102.94</span></p>
                    <p><span class="mr-96"></span></p>
                    <a href="checkout" class="bg-[#5b7545] hover:bg-[#87A36F] py-2 px-3 rounded-full text-lg font-bold font-serif text-[#ECECEC]">Proceed to Checkout ⇒</a>
                </div>
                
            </div>

        </div>
        
    </div>
    
    );
}

export default Basket;