const path = require('path')

module.exports = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5',
  },
  // code below fixes a common issue with storybook still trying to reference webpack4
  typescript: {
    reactDocgen: false,
  },
  webpackFinal: async (config, { configType }) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        modules: [path.resolve(__dirname, '..'), 'node_modules'],
        alias: {
          ...config.resolve.alias,
          '@/components': path.resolve(__dirname, '../components'),
          '@/pages': path.resolve(__dirname, '../pages'),
          '@/styles': path.resolve(__dirname, '../styles'),
          '@/layouts': path.resolve(__dirname, '../layouts'),
          '@/hooks': path.resolve(__dirname, '../utils/hooks'),
          '@/data': path.resolve(__dirname, '../data'),
          '@/utils': path.resolve(__dirname, '../utils'),
        },
      },
    }
  },
}
