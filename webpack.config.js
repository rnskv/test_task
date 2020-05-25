const path = require('path');
const webpack = require('webpack');

const paths = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist')
};

const commonConfig = require('./configs/webpack/common.config');


module.exports = () => {
    return {
        context: paths.src, // базовая директория для точек входа и загрузчиков
        entry: {
            app: './index.tsx'  // точка входа в приложение, наш src/index.ts файл, названием итогового бандла будет имя свойства - app
        },
        output: {
            path: paths.dist,  // путь для результатов сборки
            filename: '[name].bundle.js'  // название итогового бандла, получится dist/app.bundle.js
        },
        mode: 'development',
        ...commonConfig
    }
};