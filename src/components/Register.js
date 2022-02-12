import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [calGoal, setCalGoal] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // здесь обработчик регистрации
  };

  return (
    <div className="register">
      <p className="register__welcome">Пожалуйста, зарегистрируйтесь.</p>
      <form onSubmit={handleSubmit} className="register__form">
        <label htmlFor="username">Логин:</label>
        <input
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <label htmlFor="password">Пароль:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
        <label htmlFor="confirmPassword">Повторите пароль:</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={handleChange}
        />
        <label htmlFor="calGoal">Калории за день:</label>
        <input
          id="calGoal"
          name="calGoal"
          type="number"
          value={calGoal}
          onChange={handleChange}
        />
        <div className="register__button-container">
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="register__link"
          >
            Зарегистрироваться
          </button>
        </div>
      </form>
      <div className="register__signin">
        <p>Уже зарегистрированы?</p>
        <Link to="login" className="register__login-link">
          Войти
        </Link>
      </div>
    </div>
  );
};

export default Register;
