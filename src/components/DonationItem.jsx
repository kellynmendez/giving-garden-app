// /* eslint-disable no-unused-vars */
// import { useEffect, useState } from "react";
// import AddProduct from "./AddProduct";
// import ProductItem from "./ProductItem";
// import { useDispatch, useSelector } from "react-redux";

// const Home = () => {
//   const products = useSelector((state) => state.products);
//   console.log(products.products)
//   useEffect(() => {
//     document.title = "Home";
//   }, []);


//   return (
//     <div>
//       <main className="py-8 max-w-7xl mx-auto px-4">
//         <div className="grid sm:grid-cols-3 grid-cols-1 gap-8">
//               {products.length ? (
//                 products.map((p, i) => <ProductItem product={p} key={i} />)
//               ) : (
//                 <div>No Product Found</div>
//               )}
//             </div>
//       </main>
//     </div>
//   );
// };

// export default Home;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/products/actions"; // Adjust the import path as needed
import ProductItem from "./ProductItem";
import AddProduct from "./AddProduct"

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products); // Get products from Redux state

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch products on component mount
  }, [dispatch]); // Make sure dispatch doesn't change

  return (
    <div>
      <main className="py-8 max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-8">
          {products.length ? (
            products.map((p, i) => <ProductItem product={p} key={i} />)
          ) : (
            <div>No Product Found</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
