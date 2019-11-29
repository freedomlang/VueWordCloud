var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/main.dev.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '',
        filename: 'wordCloud.js'
    },
    module: {
        rules: [{
            test: /\.vue$/, //  only process vue files by the loaders below
            loader: 'vue-loader',
            include: [
                path.resolve(__dirname, "src")
            ],
            options: {
            }
        }, {
            test: /\.scss$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        }, {
            test: /\.js$/,
            include: [
                path.resolve(__dirname, "src")
            ],
            // loader: 'happypack/loader?id=babel',
            loader: 'babel-loader',
            // loader: 'babel-loader?cacheDirectory',
            exclude: /node_modules/
        }]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'js': path.resolve(__dirname, './src/assets/js')
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: false,
        inline: true,
        disableHostCheck: true,
        hot: true, //  hot reload for vue
        host: '0.0.0.0', // allow access from any ip
        quiet: false
    },
    performance: {
        hints: false
    },
    devtool: '#cheap-source-map',
    plugins: [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './myIndex.ejs'
        }),
        new DashboardPlugin()
    ]
};
