import { primitives } from './primitive';

const { neutral, blue } = primitives;

export type Theme = typeof defaultTheme;

export const defaultTheme = {
  text: {
    primary: neutral['900'],
    secondary: neutral['800'],
    link: blue['900'],
  },
};

export const darkTheme: Theme = {
  text: {
    primary: neutral['00'],
    secondary: neutral['50'],
    link: blue['100'],
  },
};
