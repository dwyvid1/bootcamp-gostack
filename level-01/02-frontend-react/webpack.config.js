const path = require('path')

module.exports = {
    // Arquivo de entrada
    entry: path.resolve(__dirname, 'src', 'index.js'),
    // Arquivo gerado depois de ser convertido
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                // Converter arquivos JavaScript com Babel
                test: /\.js$/,
                exclude: /node_modules/,
                use : {
                    loader: 'babel-loader',
                }
            }
        ]
    }
}