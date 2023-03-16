import React, { useState } from 'react';
import AmountFormatter from './AmountFormatters';

const useAmountInput = () => {
  const amountInputState = useState<string>('');
  const [amountString, _] = amountInputState;
  const amount = AmountFormatter.convertFromStringToNumber(amountString);
  return { amount, amountInputState };
};

export default useAmountInput;
export type UseAmountInputState = [
  string,
  React.Dispatch<React.SetStateAction<string>>
];
