import { primitives } from './primitive';

const { neutral, blue } = primitives;

export type Theme = typeof defaultTheme;

export const defaultTheme = {
  text: {
    primary: neutral['00'],
    secondary: neutral['50'],
    link: blue['100'],
  },
};

export const darkTheme: Theme = {
  text: {
    primary: neutral['00'],
    secondary: neutral['50'],
    link: blue['100'],
  },
};
