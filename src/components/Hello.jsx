import React from 'react'   //必须

//创建即导出
export default function Hello(props){
    console.log(props)
    return <div>这是export default function的方式使用Hello组件</div>
}

//将组件导出，两种导出方式不可以同时使用
//export default Hello
