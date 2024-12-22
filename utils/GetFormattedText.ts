import NumberFormatter from './NumberFormatter';
import { Dimensions } from 'react-native';
import {media} from "./../theme/Media"

const GetFormattedText = (text: any, compact?: any, fixedDecimals?: any) => {
  const { width } = Dimensions.get('screen');
  const small = width < media.ltSm.maxWidth;
  if (text === undefined || text === null || text.length === 0) {
    return '-';
  }

  compact = compact === undefined ? small || false : compact;

  fixedDecimals = fixedDecimals === undefined ? 2 : fixedDecimals;

  if (Number.isNaN(Number(text))) return text;

  const numericValue = Number(text);
  if (compact && numericValue >= 99999) {
    return NumberFormatter(numericValue, { notation: 'compact', style: 'currency', maximumFractionDigits: fixedDecimals });
  } else {
    return NumberFormatter(numericValue, { notation: 'standard', style: 'currency', maximumFractionDigits: 0 });
  }
};

export default GetFormattedText;
