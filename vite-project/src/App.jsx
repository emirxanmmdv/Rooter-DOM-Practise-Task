import React from "react";
import "./App.css";
import Navbar from "./Components/Layouts/Navbar";
import { Route, Routes } from "react-router";
import Home from "./Components/Pages/Home/home";
import Contact from "./Components/Pages/Contact/contact";
import Details from "./Components/Pages/Details";

const App = () => {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Details/:id" element={<Details/>}/>
      </Routes>
    </>
  );
};

export default App;
