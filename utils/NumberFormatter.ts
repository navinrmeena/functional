const NumberFormatter = (value: number, options: any = { notation: 'compact', style: 'currency', maximumFractionDigits: 2 }) => {
  const currency = 'INR';
  const locale = 'en-IN';

  if (options.maximumFractionDigits === undefined) options.maximumFractionDigits = 2;

  const formatterOptions = {
    notation: options.notation,
    style: options.style,
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: options.maximumFractionDigits,
  };

  const formatter = new Intl.NumberFormat(locale, formatterOptions);

  return formatter.format(value).replace('T', 'k');
};

export default NumberFormatter;
