import React, { useCallback, useState } from 'react';
import CardContentActions from './CardContentActions';
import CardContentSummary from './CardContentSummary';
import AmountInput, { AmountFormatter, useAmountInput } from './AmountInput';
import MonthSelector, { useMonthSelector } from './MonthSelector';

const CardContent = () => {
  const montState = useMonthSelector();
  const [monthSelectorState, setMonthSelectorState] = montState;
  const { monthName, noOfMonths, year } = monthSelectorState;
  const { amount, amountInputState } = useAmountInput();

  // format total for rendering in content summary
  const total = AmountFormatter.formatAmountInText(amount * noOfMonths);
  // format amount for rendering in content summary
  const displayAmount = AmountFormatter.formatAmountInText(amount);

  const handleContinue = useCallback(() => {
    console.log('Continue');
  }, []);

  const handleCancel = useCallback(() => {
    console.log('Cancel');
  }, []);

  return (
    <div className="card__content">
      <div className="card__content_ads_row_gap">
        <div className="card__content__donation">
          <AmountInput
            label="I can donate"
            useAmountInputState={amountInputState}
          />
          <MonthSelector
            label="Every month until"
            monthState={monthSelectorState}
            handleMonthChange={setMonthSelectorState}
          />
        </div>
        <CardContentSummary
          amount={displayAmount}
          total={total}
          until={`${monthName} ${year}`}
        />
      </div>
      <CardContentActions
        handleCancel={handleCancel}
        handleContinue={handleContinue}
      />
    </div>
  );
};

export default CardContent;
