// import autoprefixer from 'autoprefixer';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

import { getCustomDevTransformers as getCustomTransformers } from './src/transformers/getTransformers';

interface IConfiguration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: IConfiguration = {
  devServer: {
    allowedHosts: 'all',
    devMiddleware: {
      publicPath: '/'
    },
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 4000,
    proxy: {
      '/api': 'http://localhost:5000'
    },
    static: {
      watch: {
        ignored: /node_modules/
      }
    }
  },
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(j|t)sx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.json',
            getCustomTransformers
          }
        }
      },
      {
        exclude: /node_modules/,
        test: /\.(graphql|gql)$/,
        use: ['graphql-tag/loader', 'minify-graphql-loader']
      }
    ]
  },
  output: {
    clean: true,
    filename: 'index.js',
    path: path.resolve(__dirname, '../../dist/public'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebPackPlugin({ template: path.resolve('public/index.html') }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/icons', to: 'public/icons' },
        { from: 'public/site.webmanifest', to: 'site.webmanifest' },
        { from: 'public/browserconfig.xml', to: 'browserconfig.xml' }
      ]
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    modules: [path.resolve(__dirname, 'src'), '__tests__', 'node_modules']
  },
  target: 'web'
};

export default config;
