import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar({ onSignOut }) {
  return (
    <nav className="menu">
      <div>
        <NavLink
          className={(navData) =>
            navData.isActive ? 'menu__item_active' : 'menu__item'
          }
          to="/diary"
        >
          Дневник
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? 'menu__item_active' : 'menu__item'
          }
          to="/tips"
        >
          Советы
        </NavLink>
      </div>
      <button className="button_sign-out" onClick={() => onSignOut()}>
        Выйти
      </button>
    </nav>
  );
}

export default NavBar;
