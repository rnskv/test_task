const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        open: true,
        port: 9000
    }
};