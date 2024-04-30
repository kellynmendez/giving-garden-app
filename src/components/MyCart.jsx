
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Billing from "./Billing";

const MyCart = () => {
  const carts = useSelector((state) => state.carts);
  return (
    <main className="py-12 max-w-7xl container mx-auto px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:gap-8 gap-4">
          <div className="space-y-6 md:w-2/3">
            {carts.length ? (
              carts.map((p) => <CartItem product={p} key={p.id} />)
            ) : (
              <div className="justify-center text-bold text-5xl">Cart is Empty</div>
            )}
          </div>
          <div className="md:w-1/3"><Billing />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyCart;