/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  'stories': ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  'addons': ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  'framework': {
    'name': '@storybook/react-vite',
    'options': {},
  },
  viteFinal: (config) => {
    config.base = '/storybook/';
    return config;
  },
};
export default config;
