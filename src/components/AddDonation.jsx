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
//           <div className="col-span-2">
//             <div className="grid md:grid-cols-2 gap-y-10 grid-cols-1">
//               {products.length ? (
//                 products.map((p, i) => <ProductItem product={p} key={i} />)
//               ) : (
//                 <div>No Product Found</div>
//               )}
//             </div>
//           </div>
//           <div>
//             <AddProduct />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect } from "react";
import AddProduct from "./AddProduct";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/products/actions"; // Import fetchProducts

const Home = () => {
  const dispatch = useDispatch(); // Initialize dispatch

  // Fetch items when the component is mounted
  useEffect(() => {
    dispatch(fetchProducts()); // Dispatch the action to fetch items
  }, [dispatch]); // Dependency array contains 'dispatch' to avoid re-renders

  const products = useSelector((state) => state.products); // Get products from Redux

  console.log("Products:", products); // Debugging: log the products array to check its content

  return (
    <div>
      <main className="py-8 max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-8">
          <div className="col-span-2">
            <div className="grid md:grid-cols-2 gap-y-10 grid-cols-1">
              {products.length ? (
                products.map((p, i) => <ProductItem product={p} key={i} />) // Render products if they exist
              ) : (
                <div>No Product Found</div> // Show this message if no products are found
              )}
            </div>
          </div>
          <div>
            <AddProduct /> 
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
