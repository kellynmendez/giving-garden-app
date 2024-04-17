import React from "react";
import Navigation from "./components/Navigation";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Donate from "./pages/Donate";
import Checkout from "./pages/Checkout";
import Basket from "./pages/Basket";
import DonationPortal from "./pages/DonationPortal";
import GardenUpdate from "./pages/GardenUpdate";


function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/donate" component={Donate} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/basket" component={Basket} />
        <Route path="/donationportal" component={DonationPortal} />
        <Route path="/gardenupdate" component={GardenUpdate} />
      </Switch> 
    </Router>
  );
}

export default App;