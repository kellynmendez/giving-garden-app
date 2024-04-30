import React from "react";
import "./Main.css"
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="main-container">
      
      <div className="content">
      <div className="text-container-header">
          {/* <h2 className="font-serif font-bold text-2xl">Giving Garden</h2> */}
          <h2>GivingGarden</h2>
      </div>
      <div className="text-container" style={{alignContent:"center"}}>
          <p>Here to connect you to your community and help nonprofits make a difference.</p>
     
      </div>
       
      <div className="buttons-container">
        <Link to="/userlogin">
          <button className="button">Donor Login</button>
        </Link>
      <div></div>
        {/* <Link to="/usersignup">
          <button className="button">Donor Sign Up</button>
        </Link> */}
        </div>
        <div className="buttons-container">
        <Link to="/npologin">
          <button className="button">NPO Login</button>
        </Link>
          <div></div>
        {/* <Link to="/nposignup">
          <button className="button">NPO Sign Up</button>
        </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Main;
