// 入口文件



console.log('ok')

// 维护虚拟DOM，创建于修改组件
import React from 'react'  
// 将虚拟DOM渲染到页面
import ReactDOM from 'react-dom'

// 创建一个元素
// 元素类型 + 元素属性 + 元素的子元素
const myh1 = React.createElement('h1', {id: 'myh1', 'title': 'this is will'}, '测试一下,哈')
// 将元素渲染到指定的容器中
ReactDOM.render(myh1, document.getElementById('app'))

// jsx语法测试
ReactDOM.render(<div><h2>jsx语法测试</h2></div>, document.getElementById('jsx'))

// 遍历数组进行渲染
let arrStr = ['一', '二', '三']

ReactDOM.render(<div>
    {arrStr.map(item => <h5 key={item}>{item}</h5>)}
</div>, document.getElementById('jsx_for'))


// 使用自定义组件
import Hello from './Components/Hello.jsx'
const book = {
    name: '书名',
    title: 'javascript',
    tag: 'react'
}

ReactDOM.render(<Hello {...book}></Hello>, document.getElementById('conponent_test'))

// 使用传递参数的自定义组件
import Hello2 from './Components/Hello2.jsx'
ReactDOM.render(
    <Hello2 book={book}></Hello2>
    , document.getElementById('conponent_test_2'))

// 使用定义为class的自定义组件
// webpack.config.js里的resolve配置了jsx后缀名省略
// 通过alias配置了@符号的简写方式
import HelloClass from '@/components/Helloclass'    
ReactDOM.render(
    <HelloClass {...book}></HelloClass>
    , document.getElementById('conponent_class'))

// 调用静态方法
HelloClass.test_static(book)


import CmdList from '@/components/class'
ReactDOM.render(<CmdList></CmdList>, document.getElementById('comments'))