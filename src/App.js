
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
//import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserProfile from "./pages/UserProfile";
import Layout from "./pages/Layout";
import Signup from "./pages/UserSignup";
import Login from "./pages/UserLogin";
import NPOLogin from "./pages/NPOLogin";
import NPOSignup from "./pages/NPOSignup";
import Main from "./pages/Main";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import GardenUpdate from "./pages/GardenUpdate";
import Donate from "./pages/Donate";
import Basket from "./pages/Basket";
import DonationPortal from "./pages/DonationPortal";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Set the default route to the Login page */}
        <Route path="/" element={<Main />} />
        {/* Define other routes */}
        <Route path="/userlogin" element={<Login />} />
        <Route path="/npologin" element={<NPOLogin />} />
        <Route path="/usersignup" element={<Signup />} />
        <Route path="/nposignup" element={<NPOSignup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/yourprofile" element={<UserProfile/>} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/donationportal" element={<DonationPortal />} />
        <Route path="/gardenupdate" element={<GardenUpdate />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
