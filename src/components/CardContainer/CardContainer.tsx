import React, { PropsWithChildren } from 'react';
import style from './card__container.module.scss';

const Card = ({ children }: PropsWithChildren) => (
  <section className={[style.card, style.box_shadow].join(' ')}>
    {children}
  </section>
);

export default Card;
