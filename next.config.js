require('dotenv').config();
const withCSS = require('@zeit/next-css');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const tsAliases = require('./ts-aliases');

const isProd = process.env.NODE_ENV === 'production';

const config = withBundleAnalyzer(
  withCSS({
    webpack(webpackConfig, options) {
      Object.assign(webpackConfig.resolve.alias, tsAliases);
      webpackConfig.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000000,
          },
        },
      });

      return webpackConfig;
    },
    dir: './',
    dev: !isProd,
  }),
);

const basePath = isProd ? '/YOUR_PATH_HERE' : '';

config.publicRuntimeConfig = {
  BASE_PATH: basePath,
};

config.assetPrefix = basePath;

module.exports = config;
