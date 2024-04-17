import React from "react";
import'./Header.css'

import data from "../data/profile.json"



function Footer() {
  const profile = data[0]
  return (
    <footer className="footer" style={{alignItems:"center", padding:"0px"}}>
    <div className="flex gap-2 " style={{ flexDirection:"row",  alignItems:"center", position: "relative", zIndex:"8", marginBottom:"auto", marginTop:"auto"}}>
        <div2 className="flex gap-2 px-6" style={{alignItems: "center",  position: "relative", paddingLeft:"320px", marginBottom:"0", marginTop:"auto"}}>
            {
            profile.rewards > 100 ? <img src= {require("../img/sprout1.png")} style={{bottom: "0px",  position: "relative", alt:"", marginBottom:"-10px", marginTop:"auto"}} /> : ""
            } 
            {
            profile.rewards > 300 ? <img src= {require("../img/sprout3.png")} style={{bottom: "0px",  position: "relative", alt:"", marginBottom:"-10px", marginTop:"auto"}} /> : ""
            } 
            {
            profile.rewards > 500 ? <img src= {require("../img/sprout5.png")} style={{bottom: "0px",  position: "relative", alt:"", marginBottom:"-10px", marginTop:"auto"}} /> : ""
            } 
            {
            profile.rewards > 700 ? <img src= {require("../img/sprout7.png")} style={{bottom: "0px",  position: "relative", alt:"", marginBottom:"-10px", marginTop:"auto"}} /> : ""
            } 
            {
            profile.rewards > 900 ? <img src= {require("../img/sprout9.png")} style={{bottom: "0px",  position: "relative", alt:"", marginBottom:"-10px", marginTop:"auto"}} /> : ""
            } 
            
        </div2>
        <div2 className="flex gap-2 px-6" style={{alignItems: "center",  position: "relative", paddingLeft:"0px", marginBottom:"0", marginTop:"auto"}}>
            {
            profile.rewards > 200 ? <img src= {require("../img/sprout2.png")} style={{bottom: "-5px",  position: "relative", alt:"", marginBottom:"-5px", marginTop:"auto"}} /> : ""
            } 
            {
            profile.rewards > 400 ? <img src= {require("../img/sprout4.png")} style={{bottom: "0px",  position: "relative", alt:"", marginBottom:"-10px", marginTop:"auto"}} /> : ""
            } 
            {
            profile.rewards > 600 ? <img src= {require("../img/sprout6.png")} style={{bottom: "0px",  position: "relative", alt:"", marginBottom:"-10px", marginTop:"auto"}} /> : ""
            } 
            {
            profile.rewards > 800 ? <img src= {require("../img/sprout8.png")} style={{bottom: "0px",  position: "relative", alt:"", marginBottom:"-10px", marginTop:"auto"}} /> : ""
            } 
      
        </div2>
      </div>
      <div style={{backgroundColor:"#8d7b7a", padding:"35px", justify: "center", color: "white"}}>
       Footer Content Here. Copyrighted 2024 totally
       
       </div>
    </footer>
    
    
  );
}
export default Footer;
