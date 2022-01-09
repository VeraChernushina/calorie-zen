import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Diary from "./Diary";
import Tips from "./Tips";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="content">
        <NavBar />
        <Routes>
          <Route path="/" element={<Diary />} />
          <Route path="/tips" element={ <Tips />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
