import React, { Component } from 'react'

export class SetStateIndex extends Component {

  state = {
    num: 0
  }
  // 在合成事件中 setState 是异步的，不是说内部的异步代码，而是执行顺序是异步的
  onClick = () => {
    this.setState({ num: 2 })
    console.log("点击后的值:", this.state.num); // 还是初始值
  }
  render() {
    return (
      <div>
        <h1>componentEvent</h1>
        {this.state.num}
        <button onClick={this.onClick}>点击</button>
      </div>
    )
  }
}

export default SetStateIndex
