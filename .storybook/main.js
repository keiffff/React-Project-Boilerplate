const customConfig = require('../webpack.config.js');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: customConfig.resolve,
      module: {
        ...config.module,
        rules: [
          {
            test: /\.(ts|tsx)$/,
            use: [
              ...customConfig.module.rules[0].use,
              {
                loader: require.resolve('react-docgen-typescript-loader'),
              },
            ],
          },
        ],
      },
      plugins: [...config.plugins, ...customConfig.plugins],
    };
  },
};
