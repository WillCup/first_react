import React,{Component} from 'react'   
import ReactDOM from 'react-dom'    


// 传统方式
// function Person(name, age){
//     this.name  = name
//     this.age =  age
// }

// const p1 = Person('ren', 12)
// console.log(p1)

// 类的方式

class People{
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    
    sayHello() {
        console.log('大家好')
    }
}

class American extends People{
    constructor(name, age, lisence){
        super(name, age)
        this.lisence = lisence
    }

    sayHello() {
        console.log('hello')
    }
}

class Chinese extends People{
    constructor(name, age, IDNumber){
        super(name, age)
        this.IDNumber = IDNumber
    }
}

class CmdList extends React.Component{
    constructor() {
        super()
        this.state = {
            CommentList: [
                {id: 1, user: 'lilei', content: 'bucuo'},
                {id: 2, user: 'hanmeimei', content: 'haah'},
                {id: 3, user: 'will', content: 'kao'},
            ]
        }
    }

    render() {
        return <div>
                    <h1>这是一个评论列表</h1>
                    {this.state.CommentList.map(item => 
                    <div key={item.id}>
                    <h2>{item.user}</h2>
                    <p>{item.content}</p>
                    </div>)}
            </div>
    }
}

export default CmdList