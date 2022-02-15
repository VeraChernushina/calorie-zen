import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import Diary from './Diary';
import Tips from './Tips';
import Register from './Register';
import Login from './Login';
import * as auth from '../utils/auth';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleRegistration = (data) => {
    return auth
      .register(data)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <BrowserRouter>
      <Header />
      <main className="content">
        {loggedIn && <NavBar />}
        <Routes>
          <Route path="/diary" element={<Diary />} />
          <Route path="/tips" element={<Tips />} />
          <Route
            path="/register"
            element={<Register onRegister={handleRegistration} />}
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              loggedIn ? <Navigate to="/diary" /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
