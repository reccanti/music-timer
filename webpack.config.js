module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
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
