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
              {
                loader: require.resolve('babel-loader'),
              },
              {
                loader: require.resolve('ts-loader'),
              },
              {
                loader: require.resolve('react-docgen-typescript-loader'),
              },
            ],
          },
        ],
      },
    };
  },
};
