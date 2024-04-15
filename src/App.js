// import React from "react";
// import Navigation from "./components/Navigation";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
// import Home from "./pages/Home";
// import Profile from "./pages/Profile";
// import Layout from "./pages/Layout";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login"


// function App() {
//   return (
//     <Router>
//       <Navigation />
//       <Switch>
//         <Route exact path="/" component={Layout} />
//         <Route path="/" exact> <Login /> </Route>
//         <Route path="/signup" component={Signup} />
//         <Route path="/home" component={Home} />
//         <Route path="/profile" component={Profile} />
        
//       </Switch> 
//     </Router>
//   //   <BrowserRouter>
//   //   <Routes>
//   //       <Route path = "/" element = { <Layout></Layout> }>
//   //         <Route index element = { <Login></Login> }></Route>
//   //         <Route path = "/signup" element = { <Signup></Signup> } ></Route>
//   //         <Route path = "/home" element = { <Home></Home> }></Route>
//   //         <Route path = "/profile" element = { <Profile></Profile> }></Route>
//   //       </Route>
//   //   </Routes>
//   // </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Layout from "./pages/Layout";
import Signup from "./pages/Signup";
import Login from "./pages/UserLogin";
import NPOLogin from "./pages/NPOLogin";
import NPOSignup from "./pages/NPOSignup";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <Navigation />
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
        <Route path="/layout" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
