import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "../src/componets/Navbar";
import SocialLinks from "../src/componets/SocialLinks";
import SideAnimation from "../src/componets/SideAnimation"

function App() {
  return (
    <div>
      <Navbar />
      <SocialLinks />
      <SideAnimation />
    </div>
  );
}

export default App;
