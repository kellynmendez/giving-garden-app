import React from "react";
import'./Header.css'
import WidthDetection from "./Navbar";
import { auth, firestore } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import {useState, useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom';
import {doc, getFirestore, getDoc} from 'firebase/firestore';

import data from "../data/profile.json"

function Footer() {
  const user = auth.currentUser;

  const [userRewards, setUserRewards] = useState(null);
  const [loading, setLoading] = useState(true);


  const db = firestore;

  var userId = null;

  useEffect(() => {
      
    onAuthStateChanged(auth, async (user) =>{
        if(user){
          userId = user.uid;
          
              
          //Access the database to get their rewards
          if (userId != null) {
            const qsnap = await getDoc(doc(db,'users', userId));
            if (qsnap.exists()){
              console.log(qsnap.data());
              const userData = qsnap.data();
              setUserRewards(userData.rewardPoints);
              console.log("Footer: rewards found to be " + userData.rewardPoints);
              
            }
          }else{
            console.log("Footer: Not logged in");
          }
          
          setLoading(false);
        }else{
          console.log("Footer: No user");
          setLoading(false);
        }
      
      })

    
  }, [userId]);
 

 



  if (loading == true){
    return(
      <p>  </p>
    );

  }else{
    return (
      <footer className="footer" style={{alignItems:"center", padding:"0px"}}>
      { user != null ?
      <div className="flex gap-2 " style={{ flexDirection:"row",  alignItems:"center", position: "relative", zIndex:"8", marginBottom:"auto", marginTop:"auto"}}>
          <div className="flex gap-2 px-6" style={{alignItems: "center",  position: "relative", marginBottom:"0", marginTop:"auto", paddingLeft:"25vw"}}>
              {
              userRewards > 100 ? <img src= {require("../img/sprout1.png")} style={{bottom: "0px", right: "10%", position: "relative", alt:"", marginBottom:"-10px", marginTop:"auto"}} /> : <p className="py-8 px-8"> </p>
              } 
              {
              userRewards > 300 ? <img src= {require("../img/sprout3.png")} style={{bottom: "0px", right: "12%",  position: "relative", alt:"", marginBottom:"-10px", marginTop:"auto"}} /> : ""
              } 
              {
              userRewards > 500 ? <img src= {require("../img/sprout5.png")} style={{bottom: "0px", right: "15%",  position: "relative", alt:"", marginBottom:"-10px", marginTop:"auto"}} /> : ""
              } 
              {
              userRewards > 700 ? <img src= {require("../img/sprout7.png")} style={{bottom: "0px", right: "14%",  position: "relative", alt:"", marginBottom:"-10px", marginTop:"auto"}} /> : ""
              } 
              {
              userRewards > 900 ? <img src= {require("../img/sprout9.png")} style={{bottom: "0px", right: "23%",  position: "relative", alt:"", marginBottom:"-10px", marginTop:"auto"}} /> : ""
              } 
              
          </div>
          <div className="flex gap-2 px-6" style={{alignItems: "center",  position: "relative", paddingRight:"25vw", marginBottom:"0", marginTop:"auto"}}>
              {
              userRewards > 200 ? <img src= {require("../img/sprout2.png")} style={{bottom: "-5px", right: "8%", position: "relative", alt:"", marginBottom:"-5px", marginTop:"auto"}} /> : ""
              } 
              {
              userRewards > 400 ? <img src= {require("../img/sprout4.png")} style={{bottom: "0px", right: "10%", position: "relative", alt:"", marginBottom:"-10px", marginTop:"auto"}} /> : ""
              } 
              {
              userRewards > 600 ? <img src= {require("../img/sprout6.png")} style={{bottom: "0px", right: "18%",  position: "relative", alt:"", marginBottom:"-10px", marginTop:"auto"}} /> : ""
              } 
              {
              userRewards > 800 ? <img src= {require("../img/sprout8.png")} style={{bottom: "0px", right: "18%", position: "relative", alt:"", marginBottom:"-10px", marginTop:"auto"}} /> : ""
              } 
              
        
          </div>
        </div>
        :
        <img src= {require("../img/sprout9.png")} style={{display: "flex", bottom: "0px",  position: "relative", alt:"", marginBottom:"-10px", marginTop:"auto", height:"35vh", marginLeft: "45vw", justifyContent:"center"}} />
        }
        <div style={{backgroundColor:"#8d7b7a", padding:"35px", justify: "center", color: "white"}}>
        Footer Content Here. Copyrighted 2024 totally
        
        </div>
      </footer>
      
      
    );
  }
}
export default Footer;
