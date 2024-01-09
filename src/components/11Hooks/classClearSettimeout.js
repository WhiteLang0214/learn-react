import React, { Component } from 'react'

export class classClearSettimeout extends Component {
  state = {
    count: 1
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  // 清除定时器
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  
  render() {
    return (
      <div>
        <h1>class组件 清楚定时器</h1>
        <p>{ this.state.count}</p>
      </div>
    )
  }
}

export default classClearSettimeout
