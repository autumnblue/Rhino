const path = require('path');
const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

const isProduction = process.argv.indexOf('-p') >= 0;
const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './dist');
const nodeEnv = process.env.NODE_ENV || 'development';

const autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: [
            './src/js/index.tsx',
        ]
    },
    output: {
        path: outPath,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: [
                    'awesome-typescript-loader'
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=application/font-woff',
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=application/font-woff',
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=application/octet-stream',
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: 'file-loader',
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=image/svg+xml',
            },
            {
                test: /(\.json)$/,
                use: 'json-loader',
            }
        ],
    },
    resolve: {
        // modules: [
        //     path.resolve(__dirname, 'src'),
        //     'node_modules'
        // ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        plugins: [
            new TsConfigPathsPlugin(/* { tsconfig, compiler } */)
        ]
    },
    externals: {
        "react": "React",
        "react-dom": " ReactDOM"
    },
    plugins: [
        // hot reload
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isProduction ? JSON.stringify('production') : JSON.stringify('development'),
            }
        }),
        new CheckerPlugin()
    ]
};
