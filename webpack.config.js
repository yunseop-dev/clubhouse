const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.bundle.js"
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    module: {
        rules: [{
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: 'ts-loader',
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new CleanWebpackPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'), // 아래 EnvironmentPlugin처럼 할 수도 있습니다.
        }),
        new webpack.EnvironmentPlugin({
            'NODE_ENV': 'production'
        }), // 요즘은 DefinePlugin보다 이렇게 하는 추세입니다.
    ]
}