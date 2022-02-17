import React, { useState, useEffect } from 'react';
import {
  Route,
  Switch,
  Redirect,
  useHistory,
  withRouter,
} from 'react-router-dom';
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const history = useHistory();

  const handleRegistration = (data) => {
    return auth
      .register(data)
      .then(() => {
        history.push('/login');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAuthorization = (data) => {
    return auth
      .authorize(data.username, data.password)
      .then((data) => {
        setIsLoggedIn(true);
        localStorage.setItem('jwt', data.jwt);
        history.push('/diary');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleTokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      return;
    }
    auth
      .checkToken(jwt)
      .then(() => {
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleTokenCheck();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/diary');
    }
  }, [isLoggedIn]);

  return (
    <>
      <Header />
      <main className="content">
        {isLoggedIn && <NavBar />}
        <Switch>
          <ProtectedRoute
            path="/diary"
            component={Diary}
            loggedIn={isLoggedIn}
          />
          <ProtectedRoute path="/tips" component={Tips} loggedIn={isLoggedIn} />
          <Route path="/register">
            <Register onRegister={handleRegistration} />
          </Route>
          <Route path="/login">
            <Login onLogin={handleAuthorization} />
          </Route>
          <Route exact path="/">
            {isLoggedIn ? <Redirect to="/diary" /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default withRouter(App);
