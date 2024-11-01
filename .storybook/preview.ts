import type { Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { withThemeByClassName } from '@storybook/addon-themes';
import docJson from '../documentation.json';
setCompodocJson(docJson);

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      defaultTheme: 'light',
      themes: {
        light: 'theme-light',
        dark: 'theme-dark',
      },
    }),
  ],

  parameters: {
    backgrounds: { disable: true },

    docs: {
      canvas: { sourceState: 'shown' },
    },

    controls: {
      expanded: true,
      hideNoControlsWarning: true,
      sort: 'requiredFirst',
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    options: {
      storySort: {
        order: ['foundations', 'components', 'assignments'],
      },
    },
  },
};

export default preview;
