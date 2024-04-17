import { collection, getDocs } from "firebase/firestore";

const querySnapshot = await getDocs(collection(db, "npos"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
