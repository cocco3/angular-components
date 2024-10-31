import * as fs from 'fs-extra';
import {
  lightThemeColorsArray,
  darkThemeColorsArray,
} from '../src/foundations';

type ThemeData = {
  name: string;
  id: string;
  colors: Record<string, string>;
};

const OUT_FILE_PATH = './src/css/theme.css';

const template = `
{{SELECTOR}} {
{{CONTENTS}}
}
`;

const transformToVariables = (theme: ThemeData[], selector: string) => {
  const contents = theme
    .map((item) =>
      Object.entries(item.colors)
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
 * Update variables in ./src/tokens then run "buildThemeCss()" script.
 */\n`
  );

  const lightThemeCss = transformToVariables(
    lightThemeColorsArray,
    ':root, .theme-light'
  );
  fs.appendFileSync(OUT_FILE_PATH, lightThemeCss);

  const darkThemeCss = transformToVariables(
    darkThemeColorsArray,
    '.theme-dark'
  );
  fs.appendFileSync(OUT_FILE_PATH, darkThemeCss);
};
