import React from "react";
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
              <li><a href="index.html">GivingGarden      </a></li>
              <li><a href="home.html">Home</a></li>
              <li><a href="favorites.html">Favorites</a></li>
              <li><a href="garden.html">Garden        </a></li>
              <li><a href="basket.html">Basket</a></li>
              <li><a href="profile.html">Profile</a></li>
              </div>
            </div>
         </ul> 
      </nav>
    </header>
  );
}
export default Navbar;