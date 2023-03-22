import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import style from './card-content-summary.module.scss';

type CardContentSummaryProps = {
  amount: string;
  total: string;
  until: string;
};

const CardContentSummary = (props: CardContentSummaryProps) => {
  const { amount, total, until } = props;
  const { t } = useTranslation('donationCard');
  return (
    <div className={style['card-content-summary']}>
      <div className={style['card-content-summary__total']}>
        <p className={style['card-content-summary__label']}>
          {t('totalAmount')}
        </p>
        <span className={style['card-content-summary__amount']}>{total}</span>
      </div>
      <div className={style['card-content-summary__info-box']}>
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
