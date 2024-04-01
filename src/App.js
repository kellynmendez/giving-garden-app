import React from "react";
import Navigation from "./components/Navigation";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";


function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch> 
    </Router>
  );
}

export default App;