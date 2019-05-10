

// 导入html插件，将html也放入dev的内存中，不用每次都刷新
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

// 创建此插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    // 源文件位置
    template: path.join(__dirname, './src/index.html'),
    // 生成在内存中的位置, 新发布的index.html中会自动带上引用main.js文件的代码，
    // 所以我们在编写index.html源文件的时候就不用戴上了。
    filename: 'index.html'
})


// 向外暴露一个打包的配置对象；
// 因为 webpack 是基于Node构建的，所以webpack支持所有Node API 和 语法
module.exports = {
    //在 webpack 4.x 中，有一个很大的特性，就是 约定大于配置
    //约定：默认的打包入口路径是 src -> index.js
    mode: 'development', //development  production
    plugins: [
        htmlPlugin
    ],
    module: {
        rules: [
            {
                test: /\.js|jsx$/,  // 以js和jsx结尾的文件
                use: 'babel-loader',    // 使用这个loader处理
                exclude: /node_modules/ // 排除这里不作处理
            }
        ]
    },
    resolve: {
        extensions : [ '.js', '.jsx', '.json'] // 引入这些内容的时候可以省略后缀
        ,alias: {
            '@': path.join(__dirname, './src')  // 这样引入文件的时候可以简写路径
        }
    }
}



//目前不支持
//export default{}
//这是ES6中向外导出模块的API，与之对应的是 import ** from '标识符'
//但是node不支持，webpack是基于node的
//Node.js基于Chrome V8引擎的JavaScript运行环境