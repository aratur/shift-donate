import React from 'react';
import { givingBlock } from '../../assets';
import style from './card__header.module.scss';

const CardHeader = () => (
  <div className={style.card__header}>
    <img src={givingBlock} alt="icon giving block" aria-hidden />
    <div className={style.card__header__description}>
      <h1>The giving block</h1>
      <p>Set up your donation goal!</p>
    </div>
  </div>
);

export default CardHeader;
