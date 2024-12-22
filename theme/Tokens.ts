import { createTokens } from 'tamagui';
import { PrimitiveColors } from './PrimitiveColors';
import { Radius } from './radius';
import { Size } from './Size';
import { Spacing } from './Spacing';
import { zIndex } from './zIndex';

// Tokens are partially taken from tamagui themes
// https://github.com/tamagui/tamagui/blob/master/code/core/themes/src/tokens.tsx

export const Tokens = createTokens({
  color: PrimitiveColors,
  radius: Radius,
  zIndex,
  space: Spacing,
  size: Size,
});
