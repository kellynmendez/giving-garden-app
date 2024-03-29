import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
    <Navbar></Navbar>
    <div>
      <meta charSet="utf-8"/>
      <h1> Title Example </h1>
    </div>
    <Dashboard></Dashboard>
    </>
  );
}

export default App;