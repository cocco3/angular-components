import * as fs from 'fs-extra';
import { darkTheme, lightTheme, type Theme } from '../src/foundations';

const OUT_FILE_PATH = './src/css/theme.css';

const template = `
{{SELECTOR}} {
{{CONTENTS}}
}
`;

const transformToVariables = (theme: Theme, selector: string) => {
  const textProperties = Object.entries(theme.text)
    .map(([key, value]) => `  --text-${key}: ${value};`)
    .join('\n');

  const bgProperties = Object.entries(theme.background)
    .map(([key, value]) => `  --bg-${key}: ${value};`)
    .join('\n');

  const borderProperties = Object.entries(theme.border)
    .map(([key, value]) => `  --border-${key}: ${value};`)
    .join('\n');

  const contents = [textProperties, bgProperties, borderProperties].join(
    '\n\n'
  );

  const css = template
    .replace('{{SELECTOR}}', selector)
    .replace('{{CONTENTS}}', contents);

  return css;
};

export const buildThemeCss = () => {
  fs.outputFileSync(
    OUT_FILE_PATH,
    `/*
 * Auto-generated on ${new Date().toDateString()}. Do not modify.
 * Update variables in ./src/tokens then run "buildThemeCss()" script.
 */\n`
  );

  const lightThemeCss = transformToVariables(lightTheme, ':root, .theme-light');
  fs.appendFileSync(OUT_FILE_PATH, lightThemeCss);

  const darkThemeCss = transformToVariables(darkTheme, '.theme-dark');
  fs.appendFileSync(OUT_FILE_PATH, darkThemeCss);
};
