var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

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
            exclude: path.resolve(__dirname, "src/assets"),
            options: {
                loaders: {
                    // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                    // the "scss" and "sass" values for the lang attribute to the right configs here.
                    // other preprocessors should work out of the box, no loader config like this necessary.
                    'scss': {
                        loader:'vue-style-loader!css-loader!sass-loader'
                    }
              
                }
                // other vue-loader options go here
            }
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
        noInfo: true,
        inline: true,
        disableHostCheck: true,
        hot: true, //  hot reload for vue
        host: '0.0.0.0', // allow access from any ip
        quiet: true
    },
    performance: {
        hints: false
    },
    devtool: '#cheap-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './myIndex.ejs'
        }),
        new DashboardPlugin(dashboard.setData)
    ]
};
