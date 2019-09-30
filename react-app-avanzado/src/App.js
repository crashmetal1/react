import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ClaseOne from "./ClaseOne";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ClaseOne />
      </header>
    </div>
  );
}

export default App;
