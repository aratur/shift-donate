import React from 'react';
import { logo } from '../../assets';
import style from './navbar.module.scss';

const Navbar = () => (
  <header className={style.navbar}>
    <img src={logo} alt="Natur.ally logo" />
  </header>
);

export default Navbar;
