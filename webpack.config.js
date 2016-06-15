/**
 * Created by j-chenqi on 16-6-6.
 */
module.exports = {
    // 入口文件
    entry: {
        index:'./public/javascripts/index.js'
    },
    output: {
        path: __dirname, // 输出文件的保存路径
        filename: 'public/component/[name].js' // 输出文件的名称
    },
    module: {
        loaders: [
            {test: /\.vue$/,loader: 'vue'},
            {test: /\.js$/,loaders: ['babel?presets[]=es2015']}
        ]
    },
    devtool: 'source-map'
};