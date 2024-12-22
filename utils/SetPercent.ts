import SetDecimals from './SetDecimals';

const SetPercent = (number: number) => {
  if (number.toString().trim() === '') return '-';

  return `${SetDecimals(number)}%`;
};

export default SetPercent;
