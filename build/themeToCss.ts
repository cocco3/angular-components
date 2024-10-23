import { appendFileSync, writeFileSync } from 'fs';
import { darkTheme, defaultTheme, type Theme } from '../src/tokens';

const OUT_FILE_PATH = './src/css/theme.css';

const template = `
{{SELECTOR}} {
{{CONTENTS}}
}
`;

const transformToVariables = (theme: Theme, selector: string) => {
  let contents = '';

  contents += Object.entries(theme.text)
    .map(([key, value]) => `  --text-${key}: ${value};`)
    .join('\n');

  const css = template
    .replace('{{SELECTOR}}', selector)
    .replace('{{CONTENTS}}', contents);

  return css;
};

export const themeToCss = () => {
  writeFileSync(
    OUT_FILE_PATH,
    `/*
 * Auto-generated on ${new Date().toDateString()}. Do not modify.
 * Update variables in ./src/tokens then run "build:tokens" script.
 */\n`
  );

  const defaultThemeCss = transformToVariables(
    defaultTheme,
    ':root, .theme-light'
  );
  appendFileSync(OUT_FILE_PATH, defaultThemeCss);

  const darkThemeCss = transformToVariables(darkTheme, '.theme-dark');
  appendFileSync(OUT_FILE_PATH, darkThemeCss);
};
