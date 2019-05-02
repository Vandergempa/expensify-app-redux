const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            // Basically we are teaching webpack how to run babel.
            // A babel loader is set to convert the JSX files down to regular javascript code.
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        //Devserver created a bundle.js as well but it is serving it up from memory -> a lot faster.
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
        //This tells our browser that we would like to use client-side rendering.
    }
};