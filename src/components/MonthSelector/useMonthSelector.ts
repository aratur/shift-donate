import React, { useCallback, useState } from 'react';

/**
 *
 * @param startDate
 * @param endDate
 * @returns Number of months between dates
 */
export const getNoOFMonthsBetween = (
  startDate: Date,
  endDate: Date
): number => {
  return (
    endDate.getMonth() -
    startDate.getMonth() +
    12 * (endDate.getFullYear() - startDate.getFullYear())
  );
};

export const getMonthName = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
};

const getInitialDate = () => {
  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() + 1);
  return currentDate;
};

const useMonthSelector = (initialDate?: Date) => {
  const [date, setDate] = useState(initialDate || getInitialDate());

  const noOfMonths = getNoOFMonthsBetween(new Date(), date);
  const monthName = getMonthName(date);

  const setOnlyFutureDates = useCallback((value: Date) => {
    const noOfMonth = getNoOFMonthsBetween(new Date(), value);
    if (noOfMonth >= 1) setDate(value);
  }, []);

  return { date, setDate: setOnlyFutureDates, noOfMonths, monthName };
};

export default useMonthSelector;
