import React, { useCallback, useState } from 'react';

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

const initialDate = () => {
  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() + 1);
  return currentDate;
};

const useMonthSelector = () => {
  const [date, setDate] = useState(initialDate());

  performance.now();
  const noOfMonths = getNoOFMonthsBetween(new Date(), date);
  const monthName = getMonthName(date);

  const changeDate = useCallback((value: Date) => {
    const noOfMonth = getNoOFMonthsBetween(new Date(), value);
    if (noOfMonth >= 1) setDate(value);
  }, []);

  performance.mark('end');

  return { date, setDate: changeDate, noOfMonths, monthName };
};

export default useMonthSelector;
