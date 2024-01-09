import React, { Component } from 'react'

export class useEffectClass extends Component {
  state = {
    count: 0
  }

  onClick = () => {
    this.setState({
      count: this.state.count+1
    })
  }

  componentDidMount() {
    // 此生命周期，组件只执行一次
    document.title = `${this.state.count}次`
  }

  // 更新了组件，设置document.title
  componentDidUpdate() {
    document.title = `${this.state.count}次`
  }

  render() {
    return (
      <div>
        <h1>useEffect 生命周期方法，把p标签的内容实时的展示在title中</h1>
        <p>你惦记了: { this.state.count }</p>
        <button onClick={this.onClick}>点击</button>
      </div>
    )
  }
}

export default useEffectClass
