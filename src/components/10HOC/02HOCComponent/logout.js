import React, { Component } from 'react'
import PropsUsername from './username';

export class logout extends Component {

  render() {
    return (
      <div>
        <h1>登出</h1>
        <p style={{ color: "blue" }}>{this.props.username}登出了</p>
      </div>
    )
  }
}

export default PropsUsername(logout)
