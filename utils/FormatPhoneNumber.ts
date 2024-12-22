export const FormatPhoneNumber = (number: string) => {
  return number.replace('+91', '').replaceAll(' ', '');
};
