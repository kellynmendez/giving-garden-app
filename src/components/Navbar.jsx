import React from "react";
import './Header.css'

function Navbar() {
  return (
    <header className="header">
      <img></img>
      <nav>
      <h1 className="font-bold text-2xl">
          Giving <span className="text-green-500">Garden </span> |{" "}
        </h1>
          <ul>
            <div className="flex gap-4 py-1 px-2">
            <li><a href="index.html">GivingGarden      </a></li>
            <li><a href="home.html">Home</a></li>
            <li><a href="favorites.html">Favorites</a></li>
            <li><a href="garden.html">Garden        </a></li>
            <li><a href="basket.html">Basket</a></li>
            <li><a href="profile.html">Profile</a></li>
            </div>
         </ul> 
      </nav>
    </header>
  );
}
export default Navbar;