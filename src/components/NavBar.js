import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="menu">
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
    </nav>
  );
}

export default NavBar;
