import React, { PropsWithChildren } from 'react';
import style from './card-container.module.scss';

const Card = ({ children }: PropsWithChildren) => (
  <section
    className={[
      style['card-container'],
      style['card-container--box-shadow'],
    ].join(' ')}
  >
    {children}
  </section>
);

export default Card;
