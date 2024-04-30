// export const initialState = [
//     {
//         "id": 1,
//         "url": "https://i5.walmartimages.com/seo/Purina-Beggin-Strips-Dog-Treats-Original-with-Bacon-Flavor-Dog-Chews-Snacks-25-oz-Pouch_e4ea7992-d808-4941-8754-2fb5ede7567f.238ac69bbbe65c8f2beb9a2f8a0e1bef.jpeg",
//         "name": "Dog Treats",
//         "price": "5.20",
//         "quantity": "20"
//     },
//     {
//         "id": 2,
//         "url": "https://www.purina.com/sites/default/files/products/puppy-chow-complete-chicken-rice-food.png",
//         "name": "Dog Food",
//         "price": "3.99",
//         "quantity": "20"
//     },
//     {
//         "id": 3,
//         "url": "https://www.gosupps.com/media/catalog/product/7/1/71aFFuV11_L.jpg",
//         "name": "Cat Toys",
//         "price": "5.20",
//         "quantity": "20"
//     },
//     {
//         "id": 4,
//         "url": "https://m.media-amazon.com/images/I/71fIDIyxppL._AC_UF1000,1000_QL80_.jpg",
//         "name": "Cat Bed",
//         "price": "5.20",
//         "quantity": "20"
//     }
// ];

// import firebase from 'firebase/app';
// import 'firebase/firestore';

// // Initialize Firestore
// const firestore = firebase.firestore();

// // Function to retrieve list of items from Firestore
// const getItemsFromFirestore = async (userId) => {
//   const items = [];
  
//   try {
//     // Reference the subcollection of the specified user
//     const itemsRef = firestore.collection('npousers').doc(userId).collection('items');
    
//     // Fetch all documents in the subcollection
//     const snapshot = await itemsRef.get();
    
//     // Iterate through the documents and add them to the items array
//     snapshot.forEach((doc) => {
//       const data = doc.data();
//       items.push({
//         id: data.id,
//         url: data.url,
//         name: data.name,
//         price: data.price,
//         quantity: data.quantity,
//       });
//     });

//     return items;
//   } catch (error) {
//     console.error("Error fetching items:", error);
//     return []; // Return an empty list if there's an error
//   }
// };

// // Usage example
// (async () => {
//   const userId = 'exampleUserId'; // The user ID for which you're fetching items
//   const itemList = await getItemsFromFirestore(userId);
//   console.log(itemList);
// })();


// Define the default initial state
export const initialState = [];
