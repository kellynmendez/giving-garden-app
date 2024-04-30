import React from "react";
import Dashboard from "../components/Dashboard";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import {useEffect, useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const user = auth.currentUser;
  const userId = null;


  useEffect(() => {
      
    onAuthStateChanged(auth, async (user) =>{
        if(user){
          setLoading(false);
        }else{
          console.log("No user");
          setLoading(false);
        }
      
      })

    
  }, [userId]);
 


  if (loading == true){
    return(
      <h1 className="py-9 px-9 rounded-xl drop-shadow-md" style={{display: "flex", flexDirection: "column", backgroundColor:"#ececec", justifyContent:"center", width:"50vw", marginLeft:"auto", marginRight:"auto"}}>  
      <p >Loading... </p>
     </h1>
    );

  }else{

    return (
      user != null ?
        <Dashboard></Dashboard>
      :
        <h1 className="py-9 px-9 rounded-xl drop-shadow-md" style={{display: "flex", flexDirection: "column", backgroundColor:"#ececec", justifyContent:"center", width:"50vw", marginLeft:"auto", marginRight:"auto"}}>  
          <p >Unauthorized error: You are not logged in. </p>
        </h1>
      
    );
  }
}

export default Home;