import React, { Component } from 'react'
import PropTypes from 'prop-types' // 引入props校验
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
        <h1>父子孙组件的 prop 传值：</h1>
        <p>父组件中的名称：{ this.state.name }</p>
        <p>父组件中的消息：{ this.state.msg }</p>
        
        <h2>父组件颜色color</h2>
        <select 
          defaultValue={this.state.color} 
          onChange={this.onChangeColor}>
          {this.state.list.map(i => <option key={i.id} value={i.id}>{i.value}</option>) }
        </select>
        <Son parentData={this.state} 
        onUpdateMsg={ this.onUpdateMsg } />
      </div>
    )
  }
}


// 使用 prop-types 校验传递的参数
index.propTypes = {
  name: PropTypes.string,
  msg: PropTypes.string.isRequired
}

index.defaultProps = {
  name: "Layout名称",
  msg: "Layout消息"
}

export default index
