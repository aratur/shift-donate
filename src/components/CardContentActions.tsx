import React from 'react';
import { close } from '../assets';

type CardContentActionsProps = {
  handleCancel: () => void;
  handleContinue: () => void;
};

const CardContentActions = (props: CardContentActionsProps) => {
  const { handleCancel, handleContinue } = props;
  return (
    <div className="card__content__actions">
      <button className="btn_close" type="button" onClick={handleCancel}>
        <img src={close} alt="Cancel" />
      </button>
      <button className="btn btn__cancel" type="button" onClick={handleCancel}>
        <span className="purple_gray_font">Cancel</span>
      </button>
      <button
        className="btn btn__continue"
        type="button"
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
};

export default CardContentActions;
