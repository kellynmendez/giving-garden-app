import { combineReducers } from "redux";
import productReducer from "./products/productReducer";
import cartReducer from "./carts/cartReducer";

const rootReducer = combineReducers({
    products: productReducer,
    carts: cartReducer
})

export default rootReducer;