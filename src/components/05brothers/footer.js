import React, { Component } from 'react'
import eventBus from './eventBus'

export class Footer extends Component {

  state = {
    name: ""
  }
  // 添加事件监听，监听从 header 组件发送赶过来的 sendName 事件
  componentDidMount() {
    eventBus.on("sendName", this.handleSendName)
  }

  // 处理事件监听
  handleSendName = (args) => {
    console.log("footer handleSendName:", args)
    this.setState({
      name: args.name
    })
  }

  // 移除事件监听
  componentWillUnmount() {
    eventBus.removeListener('sendName', this.handleSendName)
  }

  render() {
    return (
      <div>
        Footer -- {this.state.name}
      </div>
    )
  }
}

export default Footer