import * as fs from 'fs-extra';
import * as path from 'path';

export const readDirectory = (src: string, ext?: string) => {
  return fs
    .readdirSync(src)
    .filter((file) =>
      ext ? file.toLowerCase().endsWith(`.${ext.toLowerCase()}`) : true
    )
    .map((file) => {
      const filePath = path.join(src, file);
      const svg = fs.readFileSync(filePath, 'utf-8');
      return {
        name: path.basename(file, `.${ext.toLowerCase()}`),
        svg,
      };
    })
    .sort((a, b) => b.name.localeCompare(a.name));
};
