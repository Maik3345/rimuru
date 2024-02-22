module.exports = {
  core: {
    builder: 'webpack5',
  },
  features: {
    buildStoriesJson: true,
  },

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    'storybook-dark-mode',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  staticDirs: ['../../../.storybook/assets'],
  // uncomment the property below if you want to apply some webpack config globally
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need that should apply to all storybook configs

    config = {
      ...config,
      plugins: [...config.plugins],
      module: {
        ...config.module,
        rules: [...config.module.rules],
      },
    };

    // Return the altered config
    return config;
  },
  managerWebpack: (config, options) => {
    options.cache && (options.cache.set = () => Promise.resolve());
    return config;
  },
};
