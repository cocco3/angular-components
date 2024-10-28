import * as fs from 'fs-extra';
import * as path from 'path';
import { optimize, type Config } from 'svgo';
import { readDirectory } from './readDirectory';

const ICONS_DIR = 'src/foundations/icons/svgs';

export const optimizeSvgIcons = async () => {
  const icons = readDirectory(ICONS_DIR, 'svg');

  icons.forEach(({ name, svg }) => {
    const result = optimize(svg, SVGO_CONFIG);
    const outFilePath = path.join(ICONS_DIR, `${name}.svg`);
    fs.outputFileSync(outFilePath, result.data);
  });
};

const SVGO_CONFIG: Config = {
  multipass: true,
  js2svg: {
    indent: 2,
    pretty: true,
  },
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
    {
      name: 'convertShapeToPath',
      params: {
        convertArcs: true,
        floatPrecision: 3,
      },
    },
    'prefixIds',
    'removeDimensions',
    {
      name: 'removeAttrs',
      params: {
        attrs: ['data-name', 'fill-rule', 'fill'],
        preserveCurrentColor: false,
      },
    },
    {
      name: 'sortAttrs',
      params: {
        xmlnsOrder: 'alphabetical',
      },
    },
  ],
};
