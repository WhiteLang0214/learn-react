import React, { Component } from 'react'
import Son from './son'

export class index extends Component {
  constructor() {
    super()
    this.state = {
      name: "App组件名称",
      msg: "App组件消息",
      color: "red",
      list: [
        {
          id: "red", 
          value: "red"
        },
        {
          id: "green",
          value: "green"
        },
        {
          id: "blue",
          value: "blue"
        }
      ]
    }
  }

  onUpdateMsg = (val) => {
    this.setState({
      msg: val
    })
  }

  onChangeColor = (e) => {
    this.setState({
      color: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>父子组件的传值：</h1>
        <p>父组件中的名称：{ this.state.name }</p>
        <p>父组件中的消息：{ this.state.msg }</p>
        <Son parentData={this.state} 
        onUpdateMsg={ this.onUpdateMsg } />
      </div>
    )
  }
}

export default index
