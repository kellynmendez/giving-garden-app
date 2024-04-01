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
        <div className="text-container">
          <p>Here to connect you to your community and help nonprofits make a difference.</p>
        </div>
        <div className="buttons-container">
        <Link to="/login">
          <button className="button">Login</button>
        </Link>
          <div></div>
        <Link to="/signup">
          <button className="button">Sign Up</button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
