import React from 'react'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/products/actions'

const AddProduct = () => {
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        // console.log(data)
        dispatch(addProduct(data))
    }

  return (
    <div className="fromContainer">
      <h4 className='formTitle'>Add New Product!</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-[#534F4F]">
        <div class="space-y-2">
            <label> Product Name </label>
            <input {...register("name")}  placeholder="product name" type="text" name="name" id="name" className='addProductInput'></input>
        </div>
        {/* image */}
        <div className="space-y-2">
            <label>Image URL</label>
            <input {...register("url")} type="url" name="url" id="url" className='addProductInput'></input>
        </div>

         {/* price */}
         <div className="space-y-2">
            <label>Price</label>
            <input {...register("price")} type="number" name="price" id="price" className='addProductInput'></input>
        </div>
         {/* quantity */}
         <div className="space-y-2">
            <label>Quantity</label>
            <input {...register("quantity")} type="number" name="quantity" id="quantity" className='addProductInput'></input>
        </div>

        
        <button type="s" className='submit bg-[#426B1F] text-white rounded'>Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct
