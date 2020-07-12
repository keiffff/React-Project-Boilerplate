const path = require('path');
const { argv } = require('yargs');

module.exports = {
  mode: argv.develop ? 'development' : 'production',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    watchContentBase: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          { loader: 'ts-loader' },
        ],
      },
    ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
};
