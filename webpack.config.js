const path = require('path');
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build.js'
    },
    devtool: 'source-map',
    // resolve: {
    //     alias: {
    //         'vue': 'vue/dist/vue.common.js'
    //     }
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader'
                    }
                }
            }
        ]
    },
}
