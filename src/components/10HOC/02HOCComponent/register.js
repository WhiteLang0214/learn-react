import React, { Component } from 'react'
import PropsUsername from './username';

export class HocComponent extends Component {

  state = {
    username: ""
  }

  // 读取 usernmae, 通常是从 axios 获取，所以在生命周期中读取
  componentDidMount() {
    const username = "admin";
    this.setState({ username })
  }

  render() {
    return (
      <div>
        <h1>注册</h1>
        <p style={{ color: "blue" }}>{this.props.username}注册了</p>
      </div>
    )
  }
}

export default PropsUsername(HocComponent)
