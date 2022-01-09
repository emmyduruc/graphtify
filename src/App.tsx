import React from "react";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./style.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="page">
      
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
