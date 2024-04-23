import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/carts/actions';
import { removeQuantity } from '../redux/products/actions';

const ProductItem = ({product}) => {
    const {id, url, name, price, quantity} = product;
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(addToCart(product))
        dispatch(removeQuantity(id))
    }

  return (
    <div class="max-w-sm bg-white rounded-3xl shadow-lg">
        <img class="h-60 w-full rounded-t-lg" src={url} alt="" />
        <div class="p-5 space-y-2">
            <h5 class="mb-2 text-2xl font-serif font-semibold tracking-tight text-gray-900">{name}</h5>
            <p> ${price}</p>
            <div className="card-actions mt-2 justify-end">
                <button onClick={handleAddToCart} className="text-white bg-[#426B1F] rounded-2xl py-2 px-2" > Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductItem