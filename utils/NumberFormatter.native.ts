import 'intl';
import 'intl/locale-data/jsonp/en-IN';

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
  let formattedValue = formatter.format(value);

  // Compact
  if (options.notation === 'compact') {
    if (Math.abs(value) > 9999999) {
      formattedValue = `${formatter.format(value / 10000000)}Cr`;
    } else if (Math.abs(value) > 99999) {
      formattedValue = `${formatter.format(value / 100000)}L`;
    } else if (Math.abs(value) > 999) {
      formattedValue = `${formatter.format(value / 1000)}k`;
    }
  }

  return formattedValue;
};

export default NumberFormatter;
