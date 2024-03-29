const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:'production',
    entry:{
        main:path.resolve(__dirname,'src/index.js')
    },
    output:{
        filename:'[name].bundle.js',
        path: path.resolve(__dirname,'lib'),
        library:'react-breadcrumb-nav',
        libraryTarget:'commonjs2'
    },
    module:{
        rules:[
            {
                test:/\.(js)|(jsx)$/,
                include:[path.resolve(__dirname,'src')],
                exclude:[path.resolve(__dirname,'node_modules'),path.resolve(__dirname,'test')],
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/.(png|jpeg|gif|jpg)/i,
                include:[path.resolve(__dirname,'test'),path.resolve(__dirname,'src')],
                exclude:path.resolve(__dirname,'node_modules'),
                use:[
                    'url-loader'
                ]
            }
        ],
       
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    plugins:[
        new CleanWebpackPlugin()
         
    ],
    externals:[/^(react|babel-runtime)/]
}