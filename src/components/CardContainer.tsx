import React, { PropsWithChildren } from 'react';

const Card = ({ children }: PropsWithChildren) => (
  <section className="card box_shadow">{children}</section>
);

export default Card;
