import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Billing = () => {
  const carts = useSelector((state) => state.carts);
  const subTotal = carts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalBillings = (subTotal) =>{
    if(subTotal > 0) {
      return (Math.ceil(subTotal * 100) / 100) + 4.99;
    }
  }

  // Function to format a number as a dollar and cent value
  const formatMoney = (amount) => {
    return `$${amount.toFixed(2)}`;
  };

  return (
    <div className="mt-6 rounded-lg border bg-white p-6 shadow-md md:mt-0">
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700">Subtotal</p>
        <p className="text-gray-700">{formatMoney(subTotal)}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700">Shipping</p>
        <p className="text-gray-700">{subTotal > 0 ? "$4.99" : "$0.00"}</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">{formatMoney(subTotal > 0 ? totalBillings(subTotal) : 0)} USD</p>
        </div>
      </div>
      <ul className="list-none">
        <li><Link to="/checkout" className="list-none bg-[#5b7545] hover:bg-[#87A36F] py-2 px-3 rounded-full text-lg font-bold font-serif text-[#ECECEC]">Proceed to Checkout</Link></li>
      </ul>
    </div>
  );
};

export default Billing;
