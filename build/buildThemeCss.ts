import * as fs from 'fs-extra';
import { lightTheme, darkTheme, type Theme } from '../src/foundations';

const OUT_FILE_PATH = './src/styles/theme.css';

const template = `
{{SELECTOR}} {
{{CONTENTS}}
}
`;

const transformToVariables = (theme: Theme, selector: string) => {
  const contents = Object.values(theme)
    .map((item) =>
      Object.entries(item.values)
        .map(([key, value]) => `  --${item.id}-${key}: ${value};`)
        .join('\n')
    )
    .join('\n\n');

  return template
    .replace('{{SELECTOR}}', selector)
    .replace('{{CONTENTS}}', contents);
};

export const buildThemeCss = () => {
  fs.outputFileSync(
    OUT_FILE_PATH,
    `/*
 * Auto-generated on ${new Date().toDateString()}. Do not modify.
 * Update variables in ./src/foundations/color then run "qai:build" script.
 */\n`
  );

  const lightThemeCss = transformToVariables(lightTheme, ':root, .theme-light');
  fs.appendFileSync(OUT_FILE_PATH, lightThemeCss);

  const darkThemeCss = transformToVariables(darkTheme, '.theme-dark');
  fs.appendFileSync(OUT_FILE_PATH, darkThemeCss);
};
