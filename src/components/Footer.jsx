import React from "react";
import'./Header.css'
import data from "../data/profile.json"
import WidthDetection from "./Navbar";
import { auth } from "../firebase";


function Footer() {
  const profile = data[0]
  const width = WidthDetection()
  const user = auth.currentUser;
  return (
    <footer className="footer" style={{alignItems:"center", padding:"0px"}}>
    { user != null ?
    <div className="flex gap-2 " style={{ flexDirection:"row",  alignItems:"center", position: "relative", zIndex:"8", marginBottom:"auto", marginTop:"auto"}}>
        <div2 className="flex gap-2 px-6" style={{alignItems: "center",  position: "relative", marginBottom:"0", marginTop:"auto", paddingLeft:"25vw"}}>
            {
            profile.rewards > 100 ? <img src= {require("../img/sprout1.png")} style={{bottom: "0px", right: "10%", position: "relative", alt:"", marginBottom:"-10px", marginTop:"auto"}} /> : ""
            } 
            {
            profile.rewards > 300 ? <img src= {require("../img/sprout3.png")} style={{bottom: "0px", right: "12%",  position: "relative", alt:"", marginBottom:"-10px", marginTop:"auto"}} /> : ""
            } 
            {
            profile.rewards > 500 ? <img src= {require("../img/sprout5.png")} style={{bottom: "0px", right: "15%",  position: "relative", alt:"", marginBottom:"-10px", marginTop:"auto"}} /> : ""
            } 
            {
            profile.rewards > 700 ? <img src= {require("../img/sprout7.png")} style={{bottom: "0px", right: "14%",  position: "relative", alt:"", marginBottom:"-10px", marginTop:"auto"}} /> : ""
            } 
            {
            profile.rewards > 900 ? <img src= {require("../img/sprout9.png")} style={{bottom: "0px", right: "23%",  position: "relative", alt:"", marginBottom:"-10px", marginTop:"auto"}} /> : ""
            } 
            
        </div2>
        <div2 className="flex gap-2 px-6" style={{alignItems: "center",  position: "relative", paddingRight:"25vw", marginBottom:"0", marginTop:"auto"}}>
            {
            profile.rewards > 200 ? <img src= {require("../img/sprout2.png")} style={{bottom: "-5px", right: "8%", position: "relative", alt:"", marginBottom:"-5px", marginTop:"auto"}} /> : ""
            } 
            {
            profile.rewards > 400 ? <img src= {require("../img/sprout4.png")} style={{bottom: "0px", right: "10%", position: "relative", alt:"", marginBottom:"-10px", marginTop:"auto"}} /> : ""
            } 
            {
            profile.rewards > 600 ? <img src= {require("../img/sprout6.png")} style={{bottom: "0px", right: "18%",  position: "relative", alt:"", marginBottom:"-10px", marginTop:"auto"}} /> : ""
            } 
            {
            profile.rewards > 800 ? <img src= {require("../img/sprout8.png")} style={{bottom: "0px", right: "18%", position: "relative", alt:"", marginBottom:"-10px", marginTop:"auto"}} /> : ""
            } 
      
        </div2>
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
export default Footer;
