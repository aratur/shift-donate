import React from 'react';
import { chevronLeft, chevronRight } from '../../assets';
import style from './month-selector.module.scss';
import { getMonthName } from './useMonthSelector';

type MonthSelectorProps = {
  label: string;
  value: Date;
  onChange: (value: Date) => void;
};

const MonthSelector = (props: MonthSelectorProps) => {
  const { label, value: date, onChange } = props;

  const handleDecrement = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() - 1);
    onChange(newDate);
  };

  const handleIncrement = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + 1);
    onChange(newDate);
  };

  return (
    <div className={style['month-selector']}>
      <div className={style['month-selector__label']}>{label}</div>
      <div className={style['month-selector__container']}>
        <button
          type="button"
          className={style['month-selector__button']}
          onClick={handleDecrement}
        >
          <img src={chevronLeft} alt="left" />
        </button>

        <div className={style['month-selector__date']}>
          <div className={style['month-selector__date__month']}>
            {getMonthName(date)}
          </div>
          <div className={style['month-selector__date__year']}>
            {date.getFullYear()}
          </div>
        </div>

        <button
          type="button"
          className={style['month-selector__button']}
          onClick={handleIncrement}
        >
          <img src={chevronRight} alt="right" />
        </button>
      </div>
    </div>
  );
};

export default MonthSelector;
