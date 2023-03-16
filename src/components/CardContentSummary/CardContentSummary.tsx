import React from 'react';
import style from './card__content__summary.module.scss';

type CardContentSummaryProps = {
  amount: string;
  total: string;
  until: string;
};

const CardContentSummary = (props: CardContentSummaryProps) => {
  const { amount, total, until } = props;

  return (
    <div className={style.card__content__summary}>
      <div className={style.card__content__summary__total}>
        <p className={style.total_label}>Total amount</p>
        <span className={style.total_amount}>{total}</span>
      </div>
      <div className={style.card__content__summary__info_box}>
        You will be sending <em>{amount}</em> every month, until{' '}
        <em>{until}</em>. Thank you!
      </div>
    </div>
  );
};

export default CardContentSummary;
