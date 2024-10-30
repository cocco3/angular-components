import * as fs from 'fs-extra';
import { darkTheme, defaultTheme, type Theme } from '../src/foundations';

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

  const contents = [textProperties].join('\n\n');

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

  const defaultThemeCss = transformToVariables(
    defaultTheme,
    ':root, .theme-light'
  );
  fs.appendFileSync(OUT_FILE_PATH, defaultThemeCss);

  const darkThemeCss = transformToVariables(darkTheme, '.theme-dark');
  fs.appendFileSync(OUT_FILE_PATH, darkThemeCss);
};
