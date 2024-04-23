// import { ADD_PRODUCT, ADD_QUANTITY, REMOVE_QUANTITY } from "./actionTypes";
// import { initialState } from "./initialState"

// const nextId = (items) => {
//     return items.reduce((id, item) => Math.max(id, item.id), -1) +1;
// }
// const productReducer = (state=initialState, action) => {
//     switch (action.type) {
//         case ADD_PRODUCT:
//             return [
//                 ...state, {
//                     id: nextId(state),
//                     ...action.payload,
//                     price: parseFloat(action.payload.price),
//                     quantity: parseInt(action.payload.quantity)
//                 }
//             ];
//         case ADD_QUANTITY:
//             return state.map((product) => {
//                 if(product.id === action.payload.productId) {
//                     return {
//                         ...product, 
//                         quantity: product.quantity + action.payload.quantity,
//                     };
//                 } else {
//                     return product;
//                 }
//             })
        
//         case REMOVE_QUANTITY:
//             return state.map((product) => {
//                 if(product.id === action.payload){
//                     return {
//                         ...product, 
//                         quantity: product.quantity - 1
//                     };
//                 }else {
//                     return product;
//                 }
//             });

//         default: 
//             return state;
//     }

// };

// export default productReducer

import { LOAD_PRODUCTS, ADD_PRODUCT, ADD_QUANTITY, REMOVE_QUANTITY } from './actionTypes'; // Include the new action type
import { initialState } from './initialState'; // The default initial state

const nextId = (items) => {
    return items.reduce((id, item) => Math.max(id, item.id), -1) + 1;
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS: // Handle the LOAD_PRODUCTS action
            return action.payload; // Set state to the loaded products

        case ADD_PRODUCT:
            return [
                ...state,
                {
                    id: nextId(state),
                    ...action.payload,
                    price: parseFloat(action.payload.price),
                    quantity: parseInt(action.payload.quantity),
                },
            ];

        case ADD_QUANTITY:
            return state.map((product) => {
                if (product.id === action.payload.productId) {
                    return {
                        ...product,
                        quantity: product.quantity + action.payload.quantity,
                    };
                } else {
                    return product;
                }
            });

        case REMOVE_QUANTITY:
            return state.map((product) => {
                if (product.id === action.payload) {
                    return {
                        ...product,
                        quantity: product.quantity - 1,
                    };
                } else {
                    return product;
                }
            });

        default:
            return state;
    }
};

export default productReducer;
