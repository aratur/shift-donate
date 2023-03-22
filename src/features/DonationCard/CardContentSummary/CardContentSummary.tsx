import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import style from './card__content__summary.module.scss';

type CardContentSummaryProps = {
  amount: string;
  total: string;
  until: string;
};

const CardContentSummary = (props: CardContentSummaryProps) => {
  const { amount, total, until } = props;
  const { t } = useTranslation('donationCard');
  return (
    <div className={style.card__content__summary}>
      <div className={style.card__content__summary__total}>
        <p className={style.total_label}>{t('totalAmount')}</p>
        <span className={style.total_amount}>{total}</span>
      </div>
      <div className={style.card__content__summary__info_box}>
        <Trans
          ns="donationCard"
          i18nKey="summaryInfoBox"
          values={{ amount, until }}
          components={{ em: <em /> }}
        />
      </div>
    </div>
  );
};

export default CardContentSummary;
