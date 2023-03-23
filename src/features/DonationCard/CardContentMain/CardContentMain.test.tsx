import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CardContentMain from './CardContentMain';
import { getMonthName } from '../../../components/MonthSelector/useMonthSelector';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
  Trans: () => null,
}));

const CardContentMainWithHandles = () => (
  <CardContentMain handleCancel={() => {}} handleContinue={() => {}} />
);

describe('CardContentMain', () => {
  it('renders the amount input and the month selector', () => {
    render(<CardContentMainWithHandles />);
    expect(screen.getByLabelText(/canDonate/i)).toBeInTheDocument();
    expect(screen.getByText(/everyMonthUntil/i)).toBeInTheDocument();
  });
  it('updates the amount string when the user types in the amount input', () => {
    render(<CardContentMainWithHandles />);
    const input = screen.getByLabelText('canDonate');
    fireEvent.change(input, { target: { value: '50' } });
    expect(input).toHaveValue('50');
  });
  it('updates the date when the user selects a new month in the month selector', () => {
    render(<CardContentMainWithHandles />);
    const btnIncrementDate = screen.getByAltText('right');
    fireEvent.click(btnIncrementDate);
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() + 2);
    const monthName = getMonthName(currentDate);
    expect(screen.getByText(monthName)).toBeInTheDocument();
  });
  it('displays the correct amount and total in the content summary', () => {
    render(<CardContentMainWithHandles />);
    const input = screen.getByLabelText('canDonate');
    fireEvent.change(input, { target: { value: '50' } });
    const btnIncrementDate = screen.getByAltText('right');
    fireEvent.click(btnIncrementDate);
    fireEvent.click(btnIncrementDate);
    expect(screen.getByPlaceholderText('0.00')).toHaveValue('50');
    expect(screen.getByText(/150/i)).toBeInTheDocument();
  });
  it('calls the handleContinue function when the continue button is clicked', () => {
    const handleContinue = vi.fn();
    render(
      <CardContentMain
        handleContinue={handleContinue}
        handleCancel={() => {}}
      />
    );
    const button = screen.getByText('continue');
    fireEvent.click(button);
    expect(handleContinue).toHaveBeenCalledTimes(1);
  });
  it('calls the handleCancel function when the cancel button is clicked', () => {
    const handleCancel = vi.fn();
    render(
      <CardContentMain handleCancel={handleCancel} handleContinue={() => {}} />
    );
    const button = screen.getByText('cancel');
    fireEvent.click(button);
    expect(handleCancel).toHaveBeenCalledTimes(1);
  });
});
