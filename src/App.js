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


function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch> 
    </Router>
  );
}

export default App;