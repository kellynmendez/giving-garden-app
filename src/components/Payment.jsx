import { useSelector } from "react-redux";

const Billing = () => {
  const carts = useSelector((state) => state.carts);
  const subTotal = carts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalBillings = (subTotal) =>{
    if(subTotal > 0) {
      return Math.round(subTotal + 4.99)
    }
    
  };

  return (
    <div className="mt-6 rounded-lg border bg-white p-6 shadow-md md:mt-0">
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700">Subtotal</p>
        <p className="text-gray-700">${subTotal}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700">Shipping</p>
        <p className="text-gray-700">{subTotal > 0 ? "$4.99" : 0}</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <p> </p>
        <div className="">
          <p className="mb-1 text-lg font-bold">${subTotal > 0 ? totalBillings(subTotal) : 0} USD</p>
        </div>
      </div>
    </div>
  );
};

export default Billing;