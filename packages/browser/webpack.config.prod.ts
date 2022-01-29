import { Configuration as WebpackConfiguration } from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';

import { getCustomProdTransformers as getCustomTransformers } from './src/transformers/getTransformers';

const config: WebpackConfiguration = {
  entry: './src/index.tsx',
  mode: 'production',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(j|t)sx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.json',
            getCustomTransformers,
          },
        },
      },
      {
        exclude: /node_modules/,
        test: /\.(graphql|gql)$/,
        use: ['graphql-tag/loader', 'minify-graphql-loader'],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },
  output: {
    clean: true,
    filename: 'index.[hash].js',
    path: path.resolve(__dirname, '../../dist/public'),
    publicPath: '/',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/icons', to: 'icons' },
        { from: 'public/site.webmanifest', to: 'site.webmanifest' },
        { from: 'public/browserconfig.xml', to: 'browserconfig.xml' },
      ],
    }),
    new HtmlWebPackPlugin({ template: path.resolve('public/index.html') }),
  ],
  resolve: {
    extensions: ['.ts', '.generated.tsx', '.tsx', '.js', '.jsx', '.json'],
    modules: [path.resolve(__dirname, 'src'), 'tests', 'node_modules'],
  },
};

export default config;
