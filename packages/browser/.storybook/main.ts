import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { Configuration as WebpackConfiguration, ModuleOptions } from 'webpack';
import appConfig from '../webpack.config.dev';

const { module: appConfigModule } = appConfig || ({} as WebpackConfiguration);
const { rules } = appConfigModule || ({} as ModuleOptions);

const config = {
  webpackFinal: async (config: WebpackConfiguration = {}) => {
    const { module, resolve } = config;
    const { extensions } = resolve || {};
    let { plugins } = resolve || {};

    plugins = [
      ...(plugins || []),
      new TsconfigPathsPlugin({
        extensions
      })
    ];

    return {
      ...config,
      module: { ...module, rules },
      resolve: { ...resolve, plugins }
    };
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
    'storybook-addon-styled-component-theme/dist/preset'
  ],
  core: {
    builder: 'webpack5'
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop: any) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
    }
  }
};

export default config;
