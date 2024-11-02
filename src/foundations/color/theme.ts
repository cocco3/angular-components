import { primitives } from './primitive';

const { base, gray, teal, red, yellow, green } = primitives;

export type Theme = typeof lightTheme;

export const lightTheme = {
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
  background: {
    primary: base['white'],
    secondary: gray['50'],
    tertiary: gray['100'],
    disabled: gray['100'],
    error: red['50'],
    warning: yellow['50'],
    success: green['50'],
  },
  border: {
    primary: gray['300'],
    secondary: gray['200'],
    tertiary: gray['100'],
    disabled: gray['300'],
    error: red['300'],
    warning: yellow['300'],
    success: green['300'],
  },
  shadow: {
    xs: `0px 1px 2px 0px rgb(from ${gray[900]} r g b / 0.05)`,
    small: `
      0px 1px 2px 0px rgb(from ${gray[900]} r g b / 0.06),
      0px 1px 3px 0px rgb(from ${gray[900]} r g b / 0.10)`,
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
  background: {
    primary: gray['950'],
    secondary: gray['900'],
    tertiary: gray['800'],
    disabled: gray['800'],
    error: red['500'],
    warning: yellow['500'],
    success: green['500'],
  },
  border: {
    primary: gray['700'],
    secondary: gray['800'],
    tertiary: gray['800'],
    disabled: gray['700'],
    error: red['400'],
    warning: yellow['400'],
    success: green['400'],
  },
  shadow: {
    xs: `0px 1px 2px 0px rgb(from ${gray[100]} r g b / 0.95)`,
    small: `
      0px 1px 2px 0px rgb(from ${gray[100]} r g b / 0.94),
      0px 1px 3px 0px rgb(from ${gray[100]} r g b / 0.9)`,
  },
};
