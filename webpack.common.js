const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        Dialog: './src/app.modules.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Dialog Box',
            filename: 'index.html',
            template: 'src/html/index.html',
            inject: 'head'
        }),
        new HtmlWebpackPlugin({
            title: 'Message Boxes',
            filename: 'message.html',
            template: 'src/html/message.html',
            inject: 'head'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": [
                            ["@babel/env"]
                        ],
                        plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-syntax-dynamic-import']
                    }
                }
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader:"url-loader",
                options:{
                    limit: 8000,
                    name:'[name].[ext]',
                    outputPath:'img/'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'resolve-url-loader',
                    'sass-loader?sourceMap'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};
