var path = require('path');

module.exports = {
    entry: './src/loader.js',
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ["style", "css"]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    resolve: {
        root: [path.resolve('./src')]
    },
    devServer: {
        inline: true
    }
};