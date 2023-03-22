import React, { useEffect, useRef, useState } from 'react';
import style from './amount_input.module.scss';
import AmountFormatter from './AmountFormatters';
import { UseAmountInputState } from './useAmountInput';

type AmountInputProps = {
  label: string;
  useAmountInputState: UseAmountInputState;
};

const AmountInput = (props: AmountInputProps) => {
  const { label, useAmountInputState } = props;
  const [amount, setAmount] = useAmountInputState;
  const [formatter, setFormatter] = useState(
    () => AmountFormatter.formatAmountOutOfFocus
  );

  const pattern = '^\\d{0,9}(\\.\\d{0,2})?$';
  // if amount doesn't match regexp return unchanged
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value: inputValue } = e.target;

    const regex = new RegExp(pattern, 'g');
    if (!regex.test(inputValue)) {
      setAmount(amount);
      return;
    }

    setAmount(inputValue);
  };

  const ref = useRef<HTMLInputElement>(null);
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
    return () => {};
  }, []);

  return (
    <label className={style.amount_input__label} htmlFor="donation_amount">
      {label}
      <input
        ref={ref}
        className={style.amount_input__input}
        type="text"
        inputMode="decimal"
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
