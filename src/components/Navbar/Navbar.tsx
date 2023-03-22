import React from 'react';
import { logo } from '../../assets';
import style from './navbar.module.scss';

const Navbar = () => (
  <header className={style.navbar}>
    <img className={style.navbar__img} src={logo} alt="Natur.ally logo" />
  </header>
);

export default Navbar;
