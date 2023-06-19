import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Store from "./components/Store/Store";
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/NavBar" element={<NavBar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
