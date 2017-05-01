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
                test: /\.(ts|tsx)?$/,
                use: [
                    'awesome-typescript-loader?module=es6'
                ],
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, "src")
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
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
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NamedModulesPlugin(),
        // new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js', minChunks: Infinity}),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer({
                        browsers: ['Chrome >= 49', 'Firefox >= 49', 'Edge >= 13']
                    })
                ]
            }
        }),
        new CheckerPlugin()
    ]
};
