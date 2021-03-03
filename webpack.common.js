const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        Dialog: './index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Dialog Box',
            filename: 'index.html',
            template: 'src/html/index.html',
            inject: 'head',
            scriptLoading: 'blocking'
        }),
        new HtmlWebpackPlugin({
            title: 'Message Boxes',
            filename: 'message.html',
            template: 'src/html/message.html',
            inject: 'head',
            scriptLoading: 'blocking'
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
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    }
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
