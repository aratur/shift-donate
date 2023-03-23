import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import useMonthSelector from './useMonthSelector';
import MonthSelector from './MonthSelector';

const MonthSelectorIntegrated = (props: { initDate: Date; label: string }) => {
  const { initDate, label } = props;
  const { date, setDate } = useMonthSelector(initDate);
  return <MonthSelector value={date} onChange={setDate} label={label} />;
};

describe('MonthSelector', () => {
  it('renders label', () => {
    const testLabel = 'testLabel';
    render(
      <MonthSelector label={testLabel} onChange={() => {}} value={new Date()} />
    );
    const labelElement = screen.getByText(testLabel);
    expect(labelElement).toBeInTheDocument();
  });
  it('calls onChange when buttons are clicked', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(
      <MonthSelector label="" onChange={onChange} value={new Date(2024, 0)} />
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
    const buttonRight = buttons[1];
    user.click(buttonRight);
    const buttonLeft = buttons[0];
    user.click(buttonLeft);
    await waitFor(() => {
      expect(onChange).toBeCalledTimes(2);
    });
  });
  it('renders date in a correct format', () => {
    const onChange = vi.fn();
    render(
      <MonthSelector label="" onChange={onChange} value={new Date(2050, 1)} />
    );
    const year = screen.getByText(/2050/i);
    expect(year).toBeInTheDocument();
    const month = screen.getByText(/February/i);
    expect(month).toBeInTheDocument();
  });
  it('Integrated with useHook allows to change date', async () => {
    const initDate = new Date(2099, 11);
    render(<MonthSelectorIntegrated label="1234" initDate={initDate} />);
    const user = userEvent.setup();
    const buttons = screen.getAllByRole('button');
    const buttonLeft = buttons[0];
    user.click(buttonLeft);
    await waitFor(() => {
      expect(screen.getByText(/November/i)).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText(/2099/i)).toBeInTheDocument();
    });
    const buttonRight = buttons[1];
    user.click(buttonRight);
    user.click(buttonRight);
    await waitFor(() => {
      expect(screen.getByText(/January/i)).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText(/2100/i)).toBeInTheDocument();
    });
  });
});
