import React from 'react';
import { close } from '../../assets';
import ButtonClose from '../ButtonClose';
import ButtonDefault from '../ButtonDefault';
import style from './card__content__actions.module.scss';

type CardContentActionsProps = {
  handleCancel: () => void;
  handleContinue: () => void;
};

const CardContentActions = (props: CardContentActionsProps) => {
  const { handleCancel, handleContinue } = props;
  return (
    <div className={style.card__content__actions}>
      <ButtonClose onClick={handleCancel}>
        <img src={close} alt="Cancel" />
      </ButtonClose>
      <ButtonDefault
        className={style.card__context__responsive_button}
        variant="light"
        onClick={handleCancel}
      >
        <span className="purple_gray_font">Cancel</span>
      </ButtonDefault>
      <ButtonDefault variant="dark" onClick={handleContinue}>
        Continue
      </ButtonDefault>
    </div>
  );
};

export default CardContentActions;
