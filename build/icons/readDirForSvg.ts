import * as fs from 'fs-extra';
import * as path from 'path';

export type Icons = { name: string; svg: string }[];

export const readDirForSvg = (src: string) => {
  return fs
    .readdirSync(src)
    .filter((file) => file.endsWith('.svg'))
    .map((file) => {
      const filePath = path.join(src, file);
      const svg = fs.readFileSync(filePath, 'utf-8');
      return {
        name: path.basename(file, '.svg'),
        svg,
      };
    });
};
