import React from "react";
import { Link } from 'react-router-dom';
import'./Header.css'
import data from "../data/profile.json"



function Navbar() {
  const profile = data[0]
  return (
    <header className="header">
      <img alt=""></img>
      <nav> 
      <ul className=" flex font-serif font-bold gap-4 py-3 px-2 " style={{flexDirection:"row", justifyContent:"space-between", fontSize:"18px"}}> 
       
        <li>
          <h1 className="font-bold text-3xl" >
          <Link to="/">
            Giving <span className="text-green-500">Garden </span> |{" "}
          </Link>
          </h1>
        </li>
           
            <div2 className="flex gap-10 py-1 px-6" style={{alignItems: "center",  justifyContent: "flex-end", position: "absolute", right: "50px", top: "20px"}}>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/basket">Basket</Link></li>
            <li><Link to="/yourprofile">Profile</Link></li>
            <li><Link to="/yourprofile"> <img src= {profile.image} width="40" height ="40" alt="It's you!"/></Link></li>
            </div2>

           
      </ul> 
      </nav>
      <div className="flex gap-10 px-6" style={{alignItems: "center", flexDirection:"row", justifyContent:"space-between", position: "relative", zIndex:"10"}}>
        <img src= {require("../img/topvines1.png")}  width="650px" alt="vine"style={{left: "350px", top: "0px", position:"fixed", justifyContent: "center"}} />
      
      </div>
    </header>
    

  );
}
export default Navbar;

