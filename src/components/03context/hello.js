import React, { Component } from 'react'
import World from './world'
import MainContext from './context'

export class Hello extends Component {
  // 写法一
  // static contextType = MainContext;
  
  render() {
    return (
      <div>
        hello里引用world
        Hello page<span style={{color: 'blue'}}>使用context</span> 
        { this.context }
        <World />
      </div>
    )
  }
}

// 写法二
Hello.contextType = MainContext

export default Hello
