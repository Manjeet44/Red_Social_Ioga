import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuEnergy.scss';

export default function MenuEnergy() {

  return (
    <>
      <nav>
        <ul className='nav__links'>
          <li className='nav__links_item'>
            <NavLink to='/'>
              Inicio
            </NavLink>
          </li>
          <li className='nav__links_item'>
            <NavLink to='/meditaciones'>
              Meditaciones
            </NavLink>
          </li>
          <li className='nav__links_item'>
            <NavLink to='/favoritos'>
              Favoritos
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}
