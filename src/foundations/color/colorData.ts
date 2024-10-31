import { primitives } from './primitive';
import { darkTheme, lightTheme } from './theme';

export const primitiveColorsArray = [
  { name: 'Base', id: 'base', colors: primitives.base },
  { name: 'Gray', id: 'gray', colors: primitives.gray },
  { name: 'Teal', id: 'teal', colors: primitives.teal },
  { name: 'Red', id: 'red', colors: primitives.red },
  { name: 'Green', id: 'green', colors: primitives.green },
  { name: 'Yellow', id: 'yellow', colors: primitives.yellow },
];

export const lightThemeColorsArray = [
  { name: 'Text', id: 'text', colors: lightTheme.text },
  { name: 'Background', id: 'bg', colors: lightTheme.background },
  { name: 'Border', id: 'border', colors: lightTheme.border },
];

export const darkThemeColorsArray = [
  { name: 'Text', id: 'text', colors: darkTheme.text },
  { name: 'Background', id: 'bg', colors: darkTheme.background },
  { name: 'Border', id: 'border', colors: darkTheme.border },
];
