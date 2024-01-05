import React, { Component } from 'react'

export class SetStateIndex extends Component {

  state = {
    msg: "这是个消息"
  }

  changeMsg = () => {
    this.setState({
      msg: "改变消息"
    })
  }
  render() {
    return (
      <div>
        <h1>why use setState</h1>
        <button onClick={this.changeMsg}>改变文本：{ this.state.msg }</button>
      </div>
    )
  }
}

export default SetStateIndex
