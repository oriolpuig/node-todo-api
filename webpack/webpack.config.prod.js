const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const common = require('./webpack.config.common');

module.exports = merge(common, {
    devtool: 'cheap-module-source-map',
    plugins: [
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify('production') },
        }),
    ],
});
