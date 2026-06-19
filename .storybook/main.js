import react from '@vitejs/plugin-react';

/** @type {import('@storybook/react-vite').StorybookConfig} */
const config = {
  stories: ['../src/**/*.stories.@(js|jsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(viteConfig) {
    viteConfig.plugins = viteConfig.plugins || [];
    viteConfig.plugins.push(react());
    return viteConfig;
  },
};

export default config;
