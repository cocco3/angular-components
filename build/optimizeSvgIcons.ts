import * as fs from 'fs-extra';
import * as path from 'path';
import * as SVGFixer from 'oslllo-svg-fixer';
import { optimize, type Config } from 'svgo';
import { readDirectory } from './readDirectory';

const ICON_DIRECTORY = 'src/foundations/icons/svgs';

const svgFixer = SVGFixer(ICON_DIRECTORY, ICON_DIRECTORY, {
  showProgressBar: true,
  throwIfDestinationDoesNotExist: true,
});

export const optimizeSvgIcons = async () => {
  await svgFixer.fix();

  const icons = readDirectory(ICON_DIRECTORY, 'svg');

  icons.forEach(({ name, svg }) => {
    const result = optimize(svg, SVGO_CONFIG);
    fs.outputFileSync(path.join(ICON_DIRECTORY, `${name}.svg`), result.data);
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
