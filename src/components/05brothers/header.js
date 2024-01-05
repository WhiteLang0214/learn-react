import React, { Component } from 'react'
import eventBus from './eventBus'

export class Header extends Component {

  onSend = () => {
    // 发送事件 eventBus.emit(事件名, 参数)
    eventBus.emit("sendName", { name: "像风一样自由" })
  }
  render() {
    return (
      <div>
        header
        <button onClick={ this.onSend }>发送事件给footer</button>
      </div>
    )
  }
}

export default Header