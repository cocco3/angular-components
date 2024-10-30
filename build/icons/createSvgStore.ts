import * as fs from 'fs-extra';
import { type Icons } from './readDirForSvg';

export const createSvgStore = (icons: Icons) => {
  const OUT_FILE_DIR = './src/foundations/icons/svgIconStore.ts';

  fs.outputFileSync(
    OUT_FILE_DIR,
    `/*
 * Auto-generated on ${new Date().toDateString()}. Do not modify.
 * Update icons in ./src/foundations/icons/svgs then run "buildIcons()" script.
 */\n`
  );

  const map = icons.reduce(
    (acc, curr) => ({ [curr.name]: curr.svg, ...acc }),
    {}
  );

  const template = `export const svgIconStore = ${JSON.stringify(map)}`;

  fs.appendFileSync(OUT_FILE_DIR, template);
};
