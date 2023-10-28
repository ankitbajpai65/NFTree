import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Mission from "./Components/Mission/Mission";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
