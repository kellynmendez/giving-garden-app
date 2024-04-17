import React from "react";
import { Link } from 'react-router-dom';
import './Header.css'
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function Navbar() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const logoutUser = async (e) => {
      e.preventDefault();

      await signOut(auth);
      navigate("/");
  }
  return (
    <header className="header">
      <nav>
          <ul>
            <div className="flex gap-4 py-1 px-2">
              <h1 className="font-serif font-bold text-2xl">
              <Link to ="/about">Giving <span className="text-white">Garden</span></Link>
              </h1>
              <div className= "absolute right-5 top-4 flex gap-10 py-1 px-2">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <button type = "submit" onClick = {(e) => logoutUser(e)}>Logout</button>

              </div>
            </div>
         </ul> 
      </nav>
    </header>
  );
}
export default Navbar;