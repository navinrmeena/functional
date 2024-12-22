import { config as configBase } from '@tamagui/config/v3'
import { createTamagui } from 'tamagui'

export const media = {
  sm: { minWidth: 1 },
  md: { minWidth: 768 },
  lg: { minWidth: 1280 },
  xl: { minWidth: 1366 },
  ltSm: { maxWidth: 767.5 },
  ltMd: { minWidth: 768, maxWidth: 1279 },
  ltLg: { minWidth: 1280, maxWidth: 1365 },
  smMd: { minWidth: 1, maxWidth: 1279 },
  MdLg: { minWidth: 768, maxWidth: 1365 },
  smLg: { minWidth: 1, maxWidth: 1365 },
}

export const config = createTamagui({
  ...configBase,
  media, 
})

export default config

export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}