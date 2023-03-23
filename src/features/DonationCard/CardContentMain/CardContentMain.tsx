import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CardContentActions from '../CardContentActions';
import CardContentSummary from '../CardContentSummary';
import AmountInput, { AmountFormatter } from '../../../components/AmountInput';
import MonthSelector, {
  useMonthSelector,
} from '../../../components/MonthSelector';
import style from './card-content-main.module.scss';

type Props = {
  handleContinue: () => void;
  handleCancel: () => void;
};

const CardContentMain = (props: Props) => {
  const { handleCancel, handleContinue } = props;
  const { date, setDate, monthName, noOfMonths } = useMonthSelector();
  const [amountString, setAmountString] = useState<string>('');

  const amountNumber = AmountFormatter.convertFromStringToNumber(amountString);

  const { t } = useTranslation('donationCard');

  // format total for rendering in content summary
  const total = AmountFormatter.formatAmountInText(amountNumber * noOfMonths);
  // format amount for rendering in content summary
  const displayAmount = AmountFormatter.formatAmountInText(amountNumber);

  const handleAmountChange = useCallback((value: string) => {
    setAmountString(value);
  }, []);

  return (
    <div className={style['card-content-main']}>
      <div className={style['card-content-main--row-gap']}>
        <div className={style['card-content-main__donation']}>
          <AmountInput
            label={t('canDonate')}
            value={amountString}
            onChange={handleAmountChange}
          />
          <MonthSelector
            label={t('everyMonthUntil')}
            onChange={setDate}
            value={date}
          />
        </div>
        <CardContentSummary
          amount={displayAmount}
          total={total}
          until={`${monthName} ${date.getFullYear()}`}
        />
      </div>
      <CardContentActions
        handleCancel={handleCancel}
        handleContinue={handleContinue}
      />
    </div>
  );
};

export default CardContentMain;
