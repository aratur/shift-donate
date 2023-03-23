import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import AmountInput from './AmountInput';

describe('AmountInput', () => {
  it('renders with the given label', () => {
    render(
      <AmountInput label="Donation Amount" value="10.00" onChange={() => {}} />
    );
    expect(screen.getByText('Donation Amount')).toBeInTheDocument();
  });
  it('renders input with the given value', () => {
    render(
      <AmountInput label="Donation Amount" value="10.00" onChange={() => {}} />
    );
    expect(screen.getByPlaceholderText('0.00')).toHaveValue('10');
  });
  it('calls onChange with new input value', () => {
    const mockOnChange = vi.fn();
    render(
      <AmountInput
        label="Donation Amount"
        value="10.00"
        onChange={mockOnChange}
      />
    );
    fireEvent.change(screen.getByPlaceholderText('0.00'), {
      target: { value: '20.00' },
    });
    expect(mockOnChange).toHaveBeenCalledWith('20.00');
  });
  it('does not call onChange with invalid input value', () => {
    const mockOnChange = vi.fn();
    render(
      <AmountInput
        label="Donation Amount"
        value="10.00"
        onChange={mockOnChange}
      />
    );
    fireEvent.change(screen.getByPlaceholderText('0.00'), {
      target: { value: 'abc' },
    });
    expect(mockOnChange).not.toHaveBeenCalled();
  });
  it('formats input value on focus', () => {
    render(
      <AmountInput label="Donation Amount" value="10.01" onChange={() => {}} />
    );
    fireEvent.focus(screen.getByPlaceholderText('0.00'));
    expect(screen.getByPlaceholderText('0.00')).toHaveValue('10.01');
  });
  it('formats input value on blur', () => {
    render(
      <AmountInput label="Donation Amount" value="10.00" onChange={() => {}} />
    );
    fireEvent.blur(screen.getByPlaceholderText('0.00'));
    expect(screen.getByPlaceholderText('0.00')).toHaveValue('10');
  });
});
