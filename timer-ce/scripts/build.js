const rewire = require('rewire');
const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const defaults = rewire('react-scripts/scripts/build.js');
const config = defaults.__get__('config');

// Consolidate chunk files instead
config.optimization.splitChunks = {
  cacheGroups: {
    default: false,
  },
};
// Move runtime into bundle instead of separate file
config.optimization.runtimeChunk = false;

// JS
config.output.filename = 'static/js/[name].js';
config.output.path = path.resolve(__dirname, '../../lib/timer');
// CSS remove MiniCssPlugin
config.plugins = config.plugins.filter(plugin =>
    !(plugin instanceof MiniCssExtractPlugin));
// CSS replaces all MiniCssExtractPlugin.loader with style-loader
config.module.rules[2].oneOf = config.module.rules[2].oneOf.map(rule => {
    if (!rule.hasOwnProperty('use')) return rule;
    return Object.assign({}, rule, {
        use: rule.use.map(options => /mini-css-extract-plugin/.test(options.loader)
            ? {loader: require.resolve('style-loader'), options: {}}
            : options)
    });
});