import React, { useState } from 'react';
import MonthSelectorController from './MonthSelectorController';
import MonthState from './MonthSelectorModel';

const controller = new MonthSelectorController();
const initialMonthState = controller.getInitialState();

const useMonthSelector = () => {
  return useState<MonthState>(initialMonthState);
};

export default useMonthSelector;
export type UseMonthSelectorReturnType = [
  MonthState,
  React.Dispatch<React.SetStateAction<MonthState>>
];
