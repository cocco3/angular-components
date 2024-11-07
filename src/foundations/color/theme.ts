import { primitives } from './primitive';

const {
  base: { values: base },
  gray: { values: gray },
  teal: { values: teal },
  red: { values: red },
  yellow: { values: yellow },
  green: { values: green },
} = primitives;

export type Theme = typeof lightTheme;

export const lightTheme = {
  text: {
    name: 'Text' as const,
    id: 'text' as const,
    values: {
      primary: gray['900'],
      secondary: gray['700'],
      tertiary: gray['600'],
      disabled: gray['500'],
      placeholder: gray['500'],
      brand: teal['900'],
      error: red['600'],
      warning: yellow['600'],
      success: green['600'],
    },
  },
  border: {
    name: 'Border' as const,
    id: 'border' as const,
    values: {
      primary: gray['300'],
      secondary: gray['200'],
      tertiary: gray['100'],
      disabled: gray['300'],
      brand: teal['300'],
      'brand-solid': teal['600'],
      error: red['300'],
      'error-solid': red['600'],
      warning: yellow['300'],
      success: green['300'],
    },
  },
  foreground: {
    name: 'Foreground' as const,
    id: 'fg' as const,
    values: {
      primary: gray['900'],
      secondary: gray['700'],
      tertiary: gray['600'],
      disabled: gray['400'],
      brand: teal['600'],
      error: red['600'],
      warning: yellow['600'],
      success: green['600'],
    },
  },
  background: {
    name: 'Background' as const,
    id: 'bg' as const,
    values: {
      primary: base['white'],
      secondary: gray['50'],
      tertiary: gray['100'],
      disabled: gray['100'],
      brand: teal['50'],
      error: red['50'],
      warning: yellow['50'],
      success: green['50'],
    },
  },
  shadow: {
    name: 'Shadow' as const,
    id: 'shadow' as const,
    values: {
      xs: `0px 1px 2px 0px rgb(from ${gray[900]} r g b / 0.05)`,
      small: `
        0px 1px 2px 0px rgb(from ${gray[900]} r g b / 0.06),
        0px 1px 3px 0px rgb(from ${gray[900]} r g b / 0.10)`,
      medium: `
        0px 2px 4px -2px rgb(from ${gray[900]} r g b / 0.06),
        0px 4px 8px -2px rgb(from ${gray[900]} r g b / 0.10)`,
    },
  },
};

export const darkTheme: Theme = {
  text: {
    name: 'Text',
    id: 'text',
    values: {
      primary: gray['50'],
      secondary: gray['300'],
      tertiary: gray['400'],
      disabled: gray['500'],
      placeholder: gray['400'],
      brand: teal['400'],
      error: red['400'],
      warning: yellow['400'],
      success: green['400'],
    },
  },
  border: {
    name: 'Border',
    id: 'border',
    values: {
      primary: gray['700'],
      secondary: gray['800'],
      tertiary: gray['800'],
      disabled: gray['700'],
      brand: teal['400'],
      'brand-solid': teal['500'],
      error: red['400'],
      'error-solid': red['500'],
      warning: yellow['400'],
      success: green['400'],
    },
  },
  foreground: {
    name: 'Foreground',
    id: 'fg',
    values: {
      primary: base.white,
      secondary: gray['300'],
      tertiary: gray['400'],
      disabled: gray['500'],
      brand: teal['500'],
      error: red['500'],
      warning: yellow['500'],
      success: green['500'],
    },
  },
  background: {
    name: 'Background',
    id: 'bg',
    values: {
      primary: gray['950'],
      secondary: gray['900'],
      tertiary: gray['800'],
      disabled: gray['800'],
      brand: teal['500'],
      error: red['500'],
      warning: yellow['500'],
      success: green['500'],
    },
  },
  shadow: {
    name: 'Shadow',
    id: 'shadow',
    values: {
      xs: `0px 1px 2px 0px rgb(from ${gray[100]} r g b / 0.95)`,
      small: `
        0px 1px 2px 0px rgb(from ${gray[100]} r g b / 0.94),
        0px 1px 3px 0px rgb(from ${gray[100]} r g b / 0.9)`,
      medium: `
        0px 2px 4px -2px rgb(from ${gray[100]} r g b / 0.94),
        0px 4px 8px -2px rgb(from ${gray[100]} r g b / 0.9)`,
    },
  },
};
