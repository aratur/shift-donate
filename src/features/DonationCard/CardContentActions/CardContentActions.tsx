import React from 'react';
import { useTranslation } from 'react-i18next';
import { close } from '../../../assets';
import ButtonClose from '../../../components/UI/ButtonClose';
import ButtonDefault from '../../../components/UI/ButtonDefault';
import style from './card-content-actions.module.scss';

type CardContentActionsProps = {
  handleCancel: () => void;
  handleContinue: () => void;
};

const CardContentActions = (props: CardContentActionsProps) => {
  const { handleCancel, handleContinue } = props;
  const { t } = useTranslation('common');
  return (
    <div className={style['card-content-actions']}>
      <ButtonClose onClick={handleCancel}>
        <img src={close} alt={t('cancel') || 'cancel'} />
      </ButtonClose>
      <ButtonDefault
        className={style['card-content-actions--responsive']}
        variant="light"
        onClick={handleCancel}
      >
        {t('cancel')}
      </ButtonDefault>
      <ButtonDefault variant="dark" onClick={handleContinue}>
        {t('continue')}
      </ButtonDefault>
    </div>
  );
};

export default CardContentActions;
