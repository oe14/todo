const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',  // Can be 'production' for final build
    entry: './src/index.js',  // Main JS file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,  // Clears /dist before each build
    },
    devtool: 'inline-source-map',  // Helps with debugging
    devServer: {
        static: './dist',  // Serve files from /dist
        open: true,  // Auto-open browser
        hot: true,  // Hot module replacement
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',  // Use this HTML template
            filename: 'index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'], // Allows importing CSS files
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/i,
                type: 'asset/resource', // Allows importing images
            },
        ],
    },
};
