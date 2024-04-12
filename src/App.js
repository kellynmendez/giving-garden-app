import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserProfile from "./pages/UserProfile";
import Donate from "./pages/Donate";
import Checkout from "./pages/Checkout";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/yourprofile" element={<UserProfile/>} />
        <Route path="/donate" element={<Donate/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes> 
      
      <Footer />
    </Router>
  );
}

export default App;