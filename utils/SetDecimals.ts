const SetDecimals = (number: number, decimals: number = 2, fixedNumber: boolean = true) => {
  if (number.toString().trim() === '') return '-';

  return Number(number).toFixed(decimals);
};

export default SetDecimals;
