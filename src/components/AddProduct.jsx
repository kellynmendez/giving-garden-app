import React from 'react'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/products/actions'
import { firestore } from "../firebase"

// const AddProduct = () => {
//     const dispatch = useDispatch()
//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors }
//     } = useForm()

//     const onSubmit = (data) => {
//         // console.log(data)
//         dispatch(addProduct(data))
//     }

//   return (
//     <div className="fromContainer">
//       <h4 className='formTitle'>Add New Product!</h4>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-[#534F4F]">
//         <div class="space-y-2">
//             <label> Product Name </label>
//             <input {...register("name")}  placeholder="product name" type="text" name="name" id="name" className='addProductInput'></input>
//         </div>
//         {/* image */}
//         <div className="space-y-2">
//             <label>Image URL</label>
//             <input {...register("url")} type="url" name="url" id="url" className='addProductInput'></input>
//         </div>

//          {/* price */}
//          <div className="space-y-2">
//             <label>Price</label>
//             <input {...register("price")} type="number" name="price" id="price" className='addProductInput'></input>
//         </div>
//          {/* quantity */}
//          <div className="space-y-2">
//             <label>Quantity</label>
//             <input {...register("quantity")} type="number" name="quantity" id="quantity" className='addProductInput'></input>
//         </div>

        
//         <button type="s" className='submit bg-[#426B1F] text-white rounded'>Add Product</button>
//       </form>
//     </div>
//   )
// }

// export default AddProduct

const AddProduct = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      // Find the document in the "npousers" collection where "name" is "Richardson Humane Society"
      const query = firestore.collection("npousers").where("name", "==", "Richardson Humane Society");
      const querySnapshot = await query.get();

      if (querySnapshot.empty) {
        console.error("No document found with name 'Richardson Humane Society'");
        return;
      }

      // Get the document ID for the "Richardson Humane Society"
      const documentId = querySnapshot.docs[0].id;

      // Add the new product to the "items" subcollection for the found document
      const newProductRef = await firestore
        .collection("npousers")
        .doc(documentId) // Reference the found document by ID
        .collection("items")
        .add(data); // Add the new product data

      // Dispatch Redux action with the added product's data and its Firestore ID
      dispatch(addProduct({ ...data, id: newProductRef.id }));
    } catch (error) {
      console.error("Error adding new product:", error);
    }
  };

  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product!</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-[#534F4F]">
        {/* Form fields for adding new product */}
        <div className="space-y-2">
          <label>Product Name</label>
          <input {...register("name")} placeholder="Product name" type="text" />
        </div>
        <div className="space-y-2">
          <label>Image URL</label>
          <input {...register("url")} placeholder="Image URL" type="url" />
        </div>
        <div className="space-y-2">
          <label>Price</label>
          <input {...register("price")} placeholder="Price" type="number" />
        </div>
        <div className="space-y-2">
          <label>Quantity</label>
          <input {...register("quantity")} placeholder="Quantity" type="number" />
        </div>

        <button type="submit" className="submit bg-[#426B1F] text-white rounded">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

