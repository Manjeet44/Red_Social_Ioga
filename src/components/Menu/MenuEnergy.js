import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuEnergy.scss';

export default function MenuEnergy() {

  return (
    <>
      <nav>
        <ul className='nav__links'>
          <li>
            <NavLink to='/'>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to='/meditaciones'>
              Meditaciones
            </NavLink>
          </li>
          <li>
            <NavLink to='/favoritos'>
              Favoritos
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}
