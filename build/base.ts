import * as path from 'path';
import * as webpack from 'webpack';
import { dependencies as externals } from '../package.json';

export const context = {
    source: path.resolve(__dirname, '../source'),
    destination: path.resolve(__dirname, '../distribution'),
    views: path.resolve(__dirname, '../views'),
}

export const base = {

    context: context.source,
    output: {
        path: context.destination,
        publicPath: "/Users/milewski/Documents/Code/glyph/distribution/",
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { cacheDirectory: true }
                }
            }
        ]
    },

    externals: Object.keys(externals),

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
    ]

};
