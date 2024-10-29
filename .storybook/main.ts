import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-designs',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-onboarding',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  managerHead: (head) => `
  ${head}
  <link
    rel="shortcut icon"
    href="https://www.quantified.ai/wp-content/uploads/2021/11/cropped-favicon_512x512-32x32.png"
  />
`,
};
export default config;
