const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: {
        index: './index.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {

        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg|jpg)$/i,
                type: 'asset'
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },

    plugins: [

        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html",
            chunks: ['index']
        }),

        new CleanWebpackPlugin(),
    ],
}