import React, { Component } from 'react'

export class LifeCycle extends Component {
  constructor(props) {
    // 阶段1:初始化阶段
    super()
    this.state = {
      liked: false
    }
    console.group("%c 1 - 初始化阶段", "color:yellowpink", props, this.state); // 可以拿到props和state
  }

  // react@18 
  // 控制台会警告：Warning: componentWillMount has been renamed, and is not recommended for use（此API已经重命名了，不建议使用）
  // 加上 UNSAFE_ 控制台报错react-dom.development.js:86 Warning: Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code.（严格模式下不建议使用）
  // 使用了也不会影响程序运动，但是控制台会有提示
  UNSAFE_componentWillMount() {
    // 组件挂载前调用一次，在 render 之前调用
    // 可以在该方法中调用 setState 改变状态，不会导致额外调用 render
    console.group("%c2 - 组件加载前", "color:red", this.props, this.state); // 可以拿到props和state
  }

  componentDidMount() {
    // 在这里请求也是可以的，此时 DOM 节点已经生成
    // 只会在挂载完成之后调用一次，在 render 之后调用
    // 此时可以拿到 DOM 节点，操作DOM
    console.group("%c4 - 组件加载后", "color:blue", this.props, this.state); // 可以拿到props和state
  }

  shouldComponentUpdate() {
    // 可以决定组件内容是否更新
    // 返回false组件不需要更新
    // 返回true,组件需要更新
    console.group("%c5 - 组件是否要更新", "color:pink", this.props, this.state); // 可以拿到props和state
    return true
  }

  // 数据更新也有两步，更新前/更新后
  UNSAFE_componentWillUpdate() {
    console.group("%c6 - 数据将要更新", "color:orange", this.props, this.state); // 可以拿到props和state
  }

  componentDidUpdate() {
    console.group("%c7 - 数据已经更新", "color:purple", this.props, this.state); // 可以拿到props和state

  }

  componentWillUnmount() {
    // 完成组件的卸载和数据的销毁
    // 清除组件所有的 setTimeout
    // 移除组件所有的事件监听
    console.group("%c8 - 组件销毁"); // 可以拿到props和state
  }


  handleClick = (e) => {
    this.setState({
      liked: !this.state.liked
    })
  }
  render() {
    console.group("%c3 - 组件加载或者数据更新", "color:green", this.props, this.state); // 可以拿到props和state

    const text = this.state.liked ? "喜欢" : "不喜欢";
    return (

      <div>
        <h1>生命周期</h1>
        <p>
          <button onClick={this.handleClick}>你（{text}）学习 React</button>
        </p>
      </div>
    )
  }
}

export default LifeCycle
