import { Platform } from 'react-native';
import Color from 'color';

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = //

const colors = {
  background: '#ffffff',
  primary: '#63b3f1ff',

  text: '#000000',
  placeholder: '#9E9E9E',

  error: '#F64C4C',
} as const;

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = //

const fonts = {
  default: Platform.select({
    default: 'Roboto',
    ios: 'Helvetica',
  }),
} as const;

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = //

const theme = {
  dark: true,
  colors: {
    background: colors.background,
    card: colors.background,
    notification: colors.error,
    primary: colors.primary,
    text: colors.text,
    border: colors.text,
  },
} as const;

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = //

export { theme as default, Color, colors, fonts };