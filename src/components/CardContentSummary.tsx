import React from 'react';

type CardContentSummaryProps = {
  amount: string;
  total: string;
  until: string;
};

const CardContentSummary = (props: CardContentSummaryProps) => {
  const { amount, total, until } = props;

  return (
    <div className="card__content__summary">
      <div className="card__content__summary__total">
        <p className="total_label">Total amount</p>
        <span className="total_amount">{total}</span>
      </div>
      <div className="card__content__summary__info_box">
        You will be sending <em>{amount}</em> every month, until{' '}
        <em>{until}</em>. Thank you!
      </div>
    </div>
  );
};

export default CardContentSummary;
