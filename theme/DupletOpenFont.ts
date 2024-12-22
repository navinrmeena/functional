import { createFont } from 'tamagui';

export const dupletOpenFont = createFont({
  family: 'DupletOpen-Regular',
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
    regular: '400',
    semiBold: '600',
    true: '400',
  },
  letterSpacing: {},
  face: {
    '400': { normal: 'DupletOpen-Regular', italic: 'DupletOpen-Regular' },
    '600': { normal: 'DupletOpen-Semibold', italic: 'DupletOpen-Semibold' },
    true: { normal: 'DupletOpen-Regular', italic: 'DupletOpen-Regular' },
  },
});
