const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
        main: ["@babel/polyfill", "./src/chunks/main.js"],
        main_critical: ["@babel/polyfill", "./src/chunks/main-critical.js"],
    },

    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'web/build/'),
        publicPath: '/build/'


    },

    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                exclude: /(\/fonts|samples)/,
                use: [

                    {
                        loader: 'file-loader', options: {
                            name: '[name].[ext]',


                            outputPath: 'images/'

                        }
                    },
                    {
                        loader: 'image-webpack-loader'
                    },
                ],
            },

            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                include: [
                    path.resolve(__dirname, 'src/fonts'),
                    // path.resolve(__dirname, 'node_modules/font-awesome/fonts')

                ],
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
            {
                test: /\.js$/,
                include: [

                    path.resolve(__dirname, 'src/'),

                ],
                use: {
                    loader: "babel-loader",
                    options: {
                        'presets': ['@babel/preset-env', '@babel/preset-react'],
                        'plugins': [
                            'syntax-dynamic-import',
                            'transform-class-properties',
                            'react-hot-loader/babel'
                        ],
                        cacheDirectory: true
                    }
                }
            },

            {
                test: /\.(sa|sc|c)ss$/,
                include: [
                    path.resolve(__dirname, 'src/styles'),
                    // path.resolve(__dirname, 'node_modules/font-awesome/css')
                ],
                use: [
                    MiniCssExtractPlugin.loader,
                    {loader: "css-loader", options: {}},

                    {
                        loader: "postcss-loader",
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')({
                                    'overrideBrowserslist': ['last 2 versions']
                                }),

                            ]
                        }
                    },
                    // {loader: 'resolve-url-loader'},
                    {loader: "sass-loader", options: {}},

                ]
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, 'src/mockup'),
                use: 'html-loader',
            }

        ]
    },


    optimization: {
        minimize: false,

    },

    plugins: [
        new CleanWebpackPlugin(),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            reload: true,
            server: { baseDir: ['web'] }

        }),


        // new CopyWebpackPlugin([
        //     {
        //         from: './images/**.*',
        //         to: './images/',
        //         force: true
        //
        //     },
        //     // {
        //     //     from: './images/**/**.*',
        //     //     to: './images/',
        //     //     force: true
        //     //
        //     //
        //     // },
        // ]),

        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[name].css"
        }),


        new HtmlWebpackPlugin({
            chunksSortMode: "manual",
            chunks: ['main'],
            filename: path.resolve(__dirname, 'web/index.html'),
            template: path.resolve(__dirname, 'src/index.html'),
            inject: true,
        }),


    ],

    devtool: 'eval-source-map',

    performance: {
        hints: false,
    },

    resolve: {
        modules: ['node_modules', 'src', 'web',  './node_modules'],
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json", "css", "scss", "less"],
        mainFields: ['browser', 'jsnext:main', 'main'],

    },
    target: 'web',
    watch: true
};
