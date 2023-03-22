import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import CardContentActions from '../CardContentActions';
import CardContentSummary from '../CardContentSummary';
import AmountInput, {
  AmountFormatter,
  useAmountInput,
} from '../../../components/AmountInput';
import MonthSelector, {
  useMonthSelector,
} from '../../../components/MonthSelector';
import style from './card__content.module.scss';

const CardContentMain = () => {
  const [monthSelectorState, setMonthSelectorState] = useMonthSelector();
  const { monthName, noOfMonths, year } = monthSelectorState;
  const { amount, amountInputState } = useAmountInput();
  const { t } = useTranslation('donationCard');

  // format total for rendering in content summary
  const total = AmountFormatter.formatAmountInText(amount * noOfMonths);
  // format amount for rendering in content summary
  const displayAmount = AmountFormatter.formatAmountInText(amount);

  const handleContinue = useCallback(() => {
    // console.log('Continue');
  }, []);

  const handleCancel = useCallback(() => {
    // console.log('Cancel');
  }, []);

  return (
    <div className={style.card__content}>
      <div className={style.card__content_ads_row_gap}>
        <div className={style.card__content__donation}>
          <AmountInput
            label={t('canDonate')}
            useAmountInputState={amountInputState}
          />
          <MonthSelector
            label={t('everyMonthUntil')}
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

export default CardContentMain;
