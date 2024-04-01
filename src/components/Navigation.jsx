import React from "react";
import { Link } from 'react-router-dom';
import './Header.css'

function Navbar() {
  return (
    <header className="header">
      <nav>
          <ul>
            <div className="flex gap-4 py-1 px-2">
              <h1 className="font-serif font-bold text-2xl">
              Giving <span className="text-white">Garden</span>
              </h1>
              <div className= "absolute right-5 top-4 flex gap-10 py-1 px-2">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              </div>
            </div>
         </ul> 
      </nav>
    </header>
  );
}
export default Navbar;