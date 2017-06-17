const path = require("path");
const webpack = require("webpack");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const swPrecacheConfig = require('./sw-precache.config.js');

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: "./src/scripts/app.js",
    },
    output: {
        path: path.resolve(__dirname, "./app/"),
        publicPath: "static/",
        filename: "./static/scripts/[name].js",
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "app"),
    },
    module: {
        rules: [{
                test: /\.(svg|jpg|png)$/,
                use: "file-loader?name=/static/images/[name].[ext]"
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader?importLoaders=1!postcss-loader!sass-loader"
                })
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "static/scripts/commons.js",
            minChunks: 2,
        }),
        new ExtractTextPlugin({
            filename: "static/styles/[name].css"
        }),
        new BrowserSyncPlugin({
            host: "localhost",
            open: false,
            port: 3000,
            server: {
                baseDir: ["app"]
            }
        }),
        new SWPrecacheWebpackPlugin(swPrecacheConfig),
        new CopyWebpackPlugin([{
            from: './src/scripts/sw.js',
            to: 'static/scripts/sw.js'
        }])
    ]
}
