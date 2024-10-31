import { primitives } from './primitive';
import { darkTheme, defaultTheme } from './theme';

export const primitiveColorsArray = [
  { name: 'Base', id: 'base', colors: primitives.base },
  { name: 'Gray', id: 'gray', colors: primitives.gray },
  { name: 'Teal', id: 'teal', colors: primitives.teal },
  { name: 'Red', id: 'red', colors: primitives.red },
  { name: 'Green', id: 'green', colors: primitives.green },
  { name: 'Yellow', id: 'yellow', colors: primitives.yellow },
];

export const defaultThemeColorsArray = [
  { name: 'Text', id: 'text', colors: defaultTheme.text },
];

export const darkThemeColorsArray = [
  { name: 'Text', id: 'text', colors: darkTheme.text },
];
