import { createFont } from 'tamagui';

export const spaceGroteskFont = createFont({
  family: 'SpaceGrotesk-Medium',
  size: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 20,
    xxxl: 24,
    xxxxl: 28,
    xxxxxl: 36,
    true: 14,
  },
  lineHeight: {
    xs: 14,
    sm: 16,
    md: 18,
    lg: 20,
    xl: 24,
    xxl: 24,
    xxxl: 28,
    xxxxl: 32,
    xxxxxl: 36,
    xxxxxxl: 40,
  },
  weight: {
    medium: '500',
    semiBold: '600',
    true: '500',
  },
  letterSpacing: {},
  face: {
    '500': { normal: 'SpaceGrotesk-Medium', italic: 'SpaceGrotesk-Medium' },
    '600': { normal: 'SpaceGrotesk-Semibold', italic: 'SpaceGrotesk-Semibold' },
    true: { normal: 'SpaceGrotesk-Medium', italic: 'SpaceGrotesk-Medium' },
  },
});
