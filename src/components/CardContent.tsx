import React, { useCallback, useState } from 'react';
import CardContentActions from './CardContentActions';
import CardContentSummary from './CardContentSummary';
import AmountInput, { AmountFormatter } from './AmountInput';
import MonthSelector, {
  MonthState,
  MonthSelectorController,
} from './MonthSelector';

const controller = new MonthSelectorController();
const initialMonthState = controller.getInitialState();

const CardContent = () => {
  const [amount, setAmount] = useState('');
  const [monthState, setMonthState] = useState<MonthState>(initialMonthState);

  // format total for rendering in content summary
  const total = (() => {
    const amountInt = AmountFormatter.convertFromStringToNumber(amount);
    const totalInt = amountInt * monthState.noOfMonths;
    return AmountFormatter.formatAmountInText(totalInt.toString());
  })();
  // format amount for rendering in content summary
  const displayAmount = AmountFormatter.formatAmountInText(amount);

  const handleMonthChange = useCallback((newMonthState: MonthState) => {
    setMonthState(newMonthState);
  }, []);

  const handleAmountChange = useCallback((newValue: string): void => {
    setAmount(newValue);
  }, []);

  const handleContinue = useCallback(() => {
    console.log('Continue', amount, monthState);
  }, [amount, monthState]);

  const handleCancel = useCallback(() => {
    console.log('Cancel');
  }, []);

  return (
    <div className="card__content">
      <div className="card__content_ads_row_gap">
        <div className="card__content__donation">
          <AmountInput
            label="I can donate"
            amount={amount}
            handleChange={handleAmountChange}
          />
          <MonthSelector
            label="Every month until"
            monthState={monthState}
            handleMonthChange={handleMonthChange}
          />
        </div>
        <CardContentSummary
          amount={displayAmount}
          total={total}
          until={`${monthState.monthName} ${monthState.year}`}
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
