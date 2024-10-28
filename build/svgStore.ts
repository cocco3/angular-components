import * as fs from 'fs-extra';
import { readDirectory } from './readDirectory';

const ICONS_DIR = 'src/foundations/icons/svgs';
const OUT_FILE_PATH = './src/foundations/icons/svgIconStore.ts';

export const svgStore = () => {
  const icons = readDirectory(ICONS_DIR, 'svg');

  const map = icons.reduce(
    (acc, curr) => ({ [curr.name]: curr.svg, ...acc }),
    {}
  );

  const template = `export const svgIconStore = ${JSON.stringify(map)}`;

  fs.outputFileSync(OUT_FILE_PATH, template);
};
