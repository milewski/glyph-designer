import * as merge from 'webpack-merge';
import { base, context } from './base';

export default merge.smart(base, {

    devtool: 'inline-source-map',
    target: 'electron-renderer',

    entry: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://localhost:1212/`,
        'webpack/hot/only-dev-server',
        './App.ts',
    ],

    devServer: {
        port: 1212,
        publicPath: 'http://localhost:1212/',
        compress: true,
        noInfo: true,
        stats: 'errors-only',
        inline: true,
        lazy: false,
        hot: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        contentBase: context.destination,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 100
        },
        historyApiFallback: {
            verbose: true,
            disableDotRule: false,
        }
    }

})
