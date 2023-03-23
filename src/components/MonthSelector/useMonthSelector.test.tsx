import { act, renderHook, waitFor } from '@testing-library/react';
import useMonthSelector from './useMonthSelector';

describe('useMonthSelector', () => {
  it('by default returns D + 1M', () => {
    const { result } = renderHook(useMonthSelector);
    const { date } = result.current;
    const currentTime = new Date();
    currentTime.setMonth(currentTime.getMonth() + 1);
    expect(currentTime.getFullYear()).toEqual(date.getFullYear());
    expect(currentTime.getMonth()).toEqual(date.getMonth());
  });
  it('has a state equal to initial Date', () => {
    const currentTime = new Date();
    const { result } = renderHook(() => useMonthSelector(currentTime));
    const { date } = result.current;
    expect(currentTime.getFullYear()).toEqual(date.getFullYear());
    expect(currentTime.getMonth()).toEqual(date.getMonth());
  });
  it('allows for future months', async () => {
    const { result } = renderHook(useMonthSelector);
    const { date, setDate } = result.current;
    const newFutureDate = new Date(date.getFullYear(), date.getMonth());
    newFutureDate.setMonth(newFutureDate.getMonth() + 4);
    act(() => {
      setDate(newFutureDate);
    });
    await waitFor(() => {
      expect(newFutureDate.getFullYear()).toEqual(
        result.current.date.getFullYear()
      );
    });
    await waitFor(() => {
      expect(newFutureDate.getMonth()).toEqual(result.current.date.getMonth());
    });
  });
  it('allows only for future months', async () => {
    const { result } = renderHook(useMonthSelector);
    const { date, setDate } = result.current;
    const newPastDate = new Date(date.getFullYear(), date.getMonth());
    newPastDate.setMonth(newPastDate.getMonth() - 20);
    await waitFor(() => {
      setDate(newPastDate);
    });
    const { date: dateAfterUpdate } = result.current;
    expect(newPastDate.getFullYear()).not.toEqual(
      dateAfterUpdate.getFullYear()
    );
    expect(newPastDate.getMonth()).not.toEqual(dateAfterUpdate.getMonth());
    expect(date.getFullYear()).toEqual(dateAfterUpdate.getFullYear());
    expect(date.getMonth()).toEqual(dateAfterUpdate.getMonth());
  });
  it('returns correct month name', () => {
    const dateJan2022 = new Date(2022, 0, 1);
    const { result } = renderHook(() => useMonthSelector(dateJan2022));
    const { monthName } = result.current;
    expect(monthName).toEqual('January');
  });
});
