const path = require("path");
const webpack = require("webpack");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const swPrecacheConfig = require("./sw-precache.config.js");

const CopyWebpackPlugin = require("copy-webpack-plugin");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    entry: {
        app: "./src/scripts/app.js",
        commons: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, "./app/"),
        publicPath: "/",
        filename: "./static/scripts/[name].js",
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "app"),
    },
    module: {
        rules: [{
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "/static/images/[name].[ext]"
                        }
                    },
                    {
                        loader: "image-webpack-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                camelCase: true,
                                // Keep same as class definition for now
                                localIdentName: '[local]',
                                importLoaders: 2,
                                modules: true,
                                sourceMap: true
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react"]
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "static/scripts/commons.js",
            minChunks: Infinity,
        }),
        new ExtractTextPlugin({
            allChunks: true,
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
                from: "./src/scripts/sw.js",
                to: "static/scripts/sw.js"
            },
            {
                from: "./src/manifest.json",
                to: "manifest.json"
            }
        ]),
        new HtmlWebpackPlugin({
            chunks: ['commons', 'app'],
            filename: "index.html",
            template: "./src/index.html",
            title: "PWA Boilerplate"
        }),
        new FaviconsWebpackPlugin({
            logo: "./src/images/favicon.png",
            prefix: "static/images/favicons/"
        })
    ]
}
