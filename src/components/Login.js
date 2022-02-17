import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loginData.username || !loginData.password) {
      return;
    }
    onLogin(loginData);
  };

  return (
    <div className="login">
      <p className="login__welcome">Добро пожаловать!</p>
      <form onSubmit={handleSubmit} className="login__form">
        <label htmlFor="username">Логин:</label>
        <input
          required
          id="username"
          name="username"
          type="text"
          value={loginData.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Пароль:</label>
        <input
          required
          id="password"
          name="password"
          type="password"
          value={loginData.password}
          onChange={handleChange}
        />
        <div className="login__button-container">
          <button type="submit" className="login__link">
            Войти
          </button>
        </div>
      </form>
      <div className="login__signup">
        <p>Ещё не зарегистрированы?</p>
        <Link to="/register" className="signup__link">
          Зарегистрироваться
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Login);
