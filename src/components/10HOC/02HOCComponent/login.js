import React, { Component } from 'react'
import PropsUsernameComponent from './username';

export class login extends Component {
  
  render() {
    return (
      <div>
        <h1>登录</h1>
        <p style={{color: 'red'}}>高阶组件 - 怎么用</p>
        <p>在应用组件之前，使用高阶函数对组件进行劫持</p>
        {/* <p>{ this.state.username }登录了</p> */}
        <p style={{ color: "blue" }}>{ this.props.username }登录了</p>
      </div>
    )
  }
}

export default PropsUsernameComponent(login)
