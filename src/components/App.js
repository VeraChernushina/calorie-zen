import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import Diary from './Diary';
import Tips from './Tips';
import Register from './Register';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
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

  const handleAuthorization = (data) => {
    return auth
      .authorize(data)
      .then(() => {
        setLoggedIn(true);
        localStorage.setItem('jwt', data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <BrowserRouter>
      <Header />
      <main className="content">
        {loggedIn && <NavBar />}
        <Switch>
          <ProtectedRoute path="/diary" component={Diary} />
          <ProtectedRoute path="/tips" component={Tips} />
          <Route path="/register">
            <Register onRegister={handleRegistration} />
          </Route>
          <Route path="/login">
            <Login onLogin={handleAuthorization} />
          </Route>
          <Route path="*">
            {loggedIn ? <Redirect to="/diary" /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
