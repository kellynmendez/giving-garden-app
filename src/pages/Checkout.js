import React from "react"; 
import Payment from "../components/Payment";
import { Provider } from 'react-redux'
import store from '../redux/store'

const Checkout = () => {
    return (
    <Provider store={store}>
        <div class="space-y-10">

            <meta charSet="utf-8"/>
            <div>
                <p className="font-serif font-heading text-5xl font-bold text-[#426B1F] py-5 px-20"> Checkout</p>
            </div>
            <hr />

            <div class="container flex mx-auto lg:px-4 space-x-10">
                <div class="container shadow-md w-7/12 px-10 py-10 lg:px-8 items-left bg-[#ECECEC] rounded-xl text-[#5B5040] font-serif leading-loose">
                    <form>
                        <div class="grid mb-6 gap-6 md:grid-cols-2">
                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">Card Number</label>
                                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required />
                            </div>
                            <div>
                                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 ">Name on Card</label>
                                <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John Doe" required />
                            </div>
                            <div>
                                <label for="company" class="block mb-2 text-sm font-medium text-gray-900 ">MM/YY</label>
                                <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="MM/YY" required />
                            </div>  
                            <div>
                                <label for="company" class="block mb-2 text-sm font-medium text-gray-900 ">CVV</label>
                                <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="XXX" required />
                            </div>  
                        </div>

                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Billing Address</label>
                            <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
                        </div>

                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label for="company" class="block mb-2 text-sm font-medium text-gray-900 ">City</label>
                                <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
                            </div>  
                            <div>
                                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 ">State</label>
                                <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
                            </div>
                            <div>
                                <label for="company" class="block mb-2 text-sm font-medium text-gray-900 ">Country</label>
                                <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
                            </div>  
                            <div>
                                <label for="company" class="block mb-2 text-sm font-medium text-gray-900 ">Zip Code</label>
                                <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
                            </div>  
                        </div> 
                        <a href="gardenupdate" type="submit" class="text-white bg-[#426B1F] hover:bg-[#87A36F] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2">
                            <svg class="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                            </svg>
                            Confirm Checkout
                        </a>
                        </form>
                </div>

                <div class="flex-col px-4 py-4 lg:px-8 space-y-10">
                    <div><Payment /></div>

                    <div class="container shadow-lg bg-[#E5EEE3] rounded-xl text-[#5B5040] font-serif leading-loose px-8 py-8">
                        <p class="text-3xl text-center font-serif font-bold leading-loose ">Estimated Rewards </p>
                        <p class="text-2xl text-center font-serif font-bold leading-loose ">102 Points! </p>
                    </div>
                </div>
                

                

            </div>

        </div>
        </Provider>
    );
}

export default Checkout;