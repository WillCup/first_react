import React from 'react'   //必须

//创建即导出
export default function Hello2(props){
    console.log(props)
    return <div>这是export default function的方式参数传递的Hello2组件--{props.book.name}</div>
}

//将组件导出，两种导出方式不可以同时使用
//export default Hello
