const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    entry: {
        main_critical: ["@babel/polyfill", "./src/chunks/main-critical.js"],
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'web/build/'),
        publicPath: '/build/'
    },

    plugins: [
        new MiniCssExtractPlugin({
            chunks: ['main_critical'],
            filename: "css/[name].css",
            chunkFilename: "[name].css"
        }),


    ],
    watch: false
});
