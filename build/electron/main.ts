/**
 * Webpack config for production electron main process
 */

import * as path from 'path';
import * as merge from 'webpack-merge';
import * as BabiliPlugin from 'babili-webpack-plugin';
import { DefinePlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { base, context } from '../base';

export default merge.smart(base, {

    entry: './electron/Main.ts',
    output: {
        path: context.destination,
        filename: './electron/main.js'
    },

    devtool: 'source-map',
    target: 'electron-main',

    node: {
        __dirname: false,
        __filename: false
    },

    module: {
        rules: [
            {
                test: /\.handlebars$/,
                use: [
                    {
                        loader: 'persist-handlebars-loader',
                        options: {
                            context: { porra: 'porra' },
                            name: 'views/[name].html'
                        }
                    },
                    {
                        loader: 'handlebars-loader',
                        query: {
                            inlineRequires: '/(images)/',
                            helperDirs: [path.join(context.views, 'helpers')],
                            partialDirs: [path.join(context.views, 'partials')]
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new BabiliPlugin(),
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        })
    ]

})
