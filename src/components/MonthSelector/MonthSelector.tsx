import React from 'react';
import { chevronLeft, chevronRight } from '../../assets';
import style from './month_selector.module.scss';
import MonthSelectorController from './MonthSelectorController';
import MonthState from './MonthSelectorModel';

type MonthSelectorProps = {
  label: string;
  monthState: MonthState;
  handleMonthChange: (newMonthState: MonthState) => void;
};

const MonthSelector = (props: MonthSelectorProps) => {
  const { label, monthState, handleMonthChange } = props;

  const createControllerFromProps = () =>
    new MonthSelectorController(new Date(monthState.year, monthState.month));

  const handleClickedLeft = () => {
    const controller = createControllerFromProps();
    handleMonthChange(controller.decrement());
  };

  const handleClickedRight = () => {
    const controller = createControllerFromProps();
    handleMonthChange(controller.increment());
  };

  return (
    <div className={style.month_selector}>
      <div className={style.month_selector__label}>{label}</div>
      <div className={style.date_switcher}>
        <button
          type="button"
          className={style.date_switcher__button}
          onClick={handleClickedLeft}
        >
          <img src={chevronLeft} alt="left" />
        </button>

        <div className={style.date_switcher__date}>
          <div className={style.date_switcher__date__month}>
            {monthState.monthName}
          </div>
          <div className={style.date_switcher__date__year}>
            {monthState.year}
          </div>
        </div>

        <button
          type="button"
          className={style.date_switcher__button}
          onClick={handleClickedRight}
        >
          <img src={chevronRight} alt="right" />
        </button>
      </div>
    </div>
  );
};

export default MonthSelector;
