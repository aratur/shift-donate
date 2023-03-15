import React, { useEffect, useRef, useState } from 'react';
import style from './amount_input.module.scss';
import AmountFormatter from './AmountFormatters';

type AmountInputProps = {
  label: string;
  amount: string;
  handleChange: (newValue: string) => void;
};

const AmountInput = (props: AmountInputProps) => {
  const { label, amount, handleChange } = props;
  const [formatter, setFormatter] = useState(
    () => AmountFormatter.formatAmountOutOfFocus
  );

  const ref = useRef<HTMLInputElement>(null);
  const pattern = '^\\d{0,9}(\\.\\d{0,2})?$';
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value: inputValue } = e.target;

    const regex = new RegExp(pattern, 'g');
    if (!regex.test(inputValue)) {
      handleChange(amount);
      return;
    }

    handleChange(inputValue);
    // if (cleanValue.slice(-1) === '.') cleanValue += '01';
    // if (cleanValue.slice(-2) === '.0')
    //   cleanValue = cleanValue.replace('.0', '.10');
    // console.log(inputValue, cleanValue, parsedValue);
  };

  useEffect(() => {
    const { current } = ref;
    if (current) {
      const onFocusOut = () => {
        setFormatter(() => AmountFormatter.formatAmountOutOfFocus);
      };
      const onFocusIn = () => {
        setFormatter(() => AmountFormatter.formatAmountOnFocus);
      };

      current.addEventListener('focusin', onFocusIn);
      current.addEventListener('focusout', onFocusOut);
      return () => {
        current.removeEventListener('focusin', onFocusIn);
        current.removeEventListener('focusout', onFocusOut);
      };
    }
    return () => () => {};
  }, []);

  return (
    <label className={style.amount_input__label} htmlFor="donation_amount">
      {label}
      <input
        ref={ref}
        className={style.amount_input__input}
        type="text"
        name="donation_amount"
        id="donation_amount"
        placeholder="0.00"
        value={formatter(amount)}
        onChange={handleInputChange}
      />
    </label>
  );
};

export default AmountInput;