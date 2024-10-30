import { readDirForSvg } from './readDirForSvg';
import { optimizeSvgIcons } from './optimizeSvgIcons';
import { createSvgStore } from './createSvgStore';

export const buildIcons = () => {
  const icons = readDirForSvg('src/foundations/icons/svgs');

  optimizeSvgIcons(icons);
  createSvgStore(icons);
};
