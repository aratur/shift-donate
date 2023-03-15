const convertFromStringToNumber = (value: string): number => {
  const parsedValue = parseFloat(value);
  if (isNaN(parsedValue)) {
    return 0;
  } else {
    return parsedValue;
  }
};

const formatAmountOutOfFocus = (value: string): string => {
  const numValue = convertFromStringToNumber(value);
  if (numValue === 0) return '';
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
  }).format(numValue);
};

// even if now this function doesn't do anything
// if will be easier to modify amount behavior in future
const formatAmountOnFocus = (value: string): string => value;

const formatAmountInText = (value: string): string => {
  const numValue = convertFromStringToNumber(value);

  if (numValue === 0) return '$0.00';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  }).format(numValue);
};

const AmountFormatter = {
  formatAmountOutOfFocus,
  formatAmountOnFocus,
  formatAmountInText,
  convertFromStringToNumber,
};

export default AmountFormatter;
