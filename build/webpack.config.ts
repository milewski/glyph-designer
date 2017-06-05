import * as webpack from 'webpack';
import * as path from 'path';

const context = path.resolve(__dirname, '../source');

export default {
    context: context,
    entry: {
        app: './App.ts'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: "source-map",
    output: {
        path: path.resolve(context, '../distribution'),
        filename: '[name].js',
        publicPath: 'http://localhost:8080/distribution/'
    },
    devServer: {
        contentBase: './distribution',
        publicPath: 'http://localhost:8080/distribution/',
        hot: true
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!sass-loader' }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     minChunks: Infinity,
        // }),
    ]
}
