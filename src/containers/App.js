import React from 'react';
import '../App.css';
import LandingPage from "./LandingPage.js";
import Header from "../components/Header.js";
import IndexPage from "./IndexPage.js";
import ShowPage from "../components/ShowPage.js";
import MainContainer from "./MainContainer.js";

function App() {
  return (
    <div className="App">
    <LandingPage />
    <MainContainer />
    </div>
  );
}

export default App;
