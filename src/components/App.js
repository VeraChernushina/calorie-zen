import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from './Header';
import AppContainer from './AppContainer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppContainer />
    </BrowserRouter>
  );
}

export default App;
