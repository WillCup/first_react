import React,{Component} from 'react'   
import ReactDOM from 'react-dom'    


// 使用class的方式就继承自React.Component
class HelloClass extends React.Component{
    constructor(){
        super()
        //这个this.state相当于Vue中的data(){return {}}
        this.state = {
            msg: '这是HelloClass组件的私有数据'
        }
    }

    //组件内部必须有render函数
    //必须return JSX虚拟DOM结构
    render (){
        console.log(this.props)
        return <div>这是一个HelloClass组件--{this.props.name}-{this.state.msg}</div>
    }

    static test_static(params) {
        console.log('这是一个接受了参数的静态方法 - ' + params.name);
    }
}
export default HelloClass