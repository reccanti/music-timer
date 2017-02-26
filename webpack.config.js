const path = require('path');
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'es2015'
                    ]
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue',
                options: {
                    loaders: {
                        js: 'babel-loader'
                    }
                }
            }
        ]
    },
}
