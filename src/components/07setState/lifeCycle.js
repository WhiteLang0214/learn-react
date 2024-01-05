import React, { Component } from 'react'

export class SetStateIndex extends Component {

  state = {
    num: 0
  }

  // 组件第一次渲染
  componentDidMount() {
    this.setState({ num: 1 })
    console.log("组件第一次渲染:", this.state.num)
  }

  // 更新后立即调用
  componentDidUpdate() {
    console.log("更新后立即调用:", this.state.num)
  }

  changeMsg = () => {
    this.setState({
      msg: "改变消息"
    })
  }
  render() {
    return (
      <div>
        <h1>setState是异步吗？</h1>
      </div>
    )
  }
}

export default SetStateIndex
