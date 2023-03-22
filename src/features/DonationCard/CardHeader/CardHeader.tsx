import React from 'react';
import { useTranslation } from 'react-i18next';
import { givingBlock } from '../../../assets';
import style from './card__header.module.scss';

const CardHeader = () => {
  const { t } = useTranslation('donationCard');
  return (
    <div className={style.card__header}>
      <img src={givingBlock} alt="icon giving block" aria-hidden />
      <div className={style.card__header__description}>
        <h1>{t('givingBlock')}</h1>
        <p>{t('setUpDonation')}</p>
      </div>
    </div>
  );
};

export default CardHeader;
