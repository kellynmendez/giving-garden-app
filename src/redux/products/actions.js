// import { ADD_PRODUCT, ADD_QUANTITY, REMOVE_QUANTITY } from "./actionTypes"

// export const addProduct = (product) => {
//     return {
//         type: ADD_PRODUCT,
//         payload: product
//     }
// }

// export const addQuantity = (productId, quantity) => {
//     return {
//         type: ADD_QUANTITY,
//         payload: {
//             productId,
//             quantity
//         }
//     }
// }

// export const removeQuantity = (productId, quantity) => {
//     return {
//         type: REMOVE_QUANTITY,
//         payload: {
//             productId,
//             quantity
//         }
//     }
// }

import { ADD_PRODUCT, ADD_QUANTITY, REMOVE_QUANTITY, LOAD_PRODUCTS } from "./actionTypes";
import { firestore } from "../../firebase"; 

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product,
    };
};

export const addQuantity = (productId, quantity) => {
    return {
        type: ADD_QUANTITY,
        payload: {
            productId,
            quantity,
        },
    };
};

export const removeQuantity = (productId, quantity) => {
    return {
        type: REMOVE_QUANTITY,
        payload: {
            productId,
            quantity,
        },
    };
};

export const fetchProducts = () => async (dispatch) => {
    const items = [];

    try {
        // Query the "npousers" collection to find the document with the specific name
        const query = firestore.collection("npousers").where("name", "==", "Richardson Humane Society");
        const querySnapshot = await query.get();

        if (querySnapshot.empty) {
            console.error("No document found with name 'Richardson Humane Society'");
            return;
        }

        // Assuming there's only one document with this name
        const document = querySnapshot.docs[0];
        const documentId = document.id;

        // Now fetch the "items" subcollection from the document found
        const itemsRef = firestore.collection("npousers").doc(documentId).collection("items");
        const snapshot = await itemsRef.get();

        snapshot.forEach((doc) => {
            const data = doc.data();
            items.push({
                id: doc.id,
                url: data.url,
                name: data.name,
                price: parseFloat(data.price),
                quantity: parseInt(data.quantity),
            });
        });

        dispatch({
            type: LOAD_PRODUCTS,
            payload: items,
        });
    } catch (error) {
        console.error("Error fetching products:", error);
    }

};
