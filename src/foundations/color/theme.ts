import { primitives } from './primitive';

const { gray, teal, red, yellow, green } = primitives;

export type Theme = typeof defaultTheme;

export const defaultTheme = {
  text: {
    primary: gray['900'],
    secondary: gray['700'],
    tertiary: gray['600'],
    disabled: gray['500'],
    placeholder: gray['500'],
    error: red['600'],
    warning: yellow['600'],
    success: green['600'],
  },
};

export const darkTheme: Theme = {
  text: {
    primary: gray['50'],
    secondary: gray['300'],
    tertiary: gray['400'],
    disabled: gray['500'],
    placeholder: gray['400'],
    error: red['400'],
    warning: yellow['400'],
    success: green['400'],
  },
};
