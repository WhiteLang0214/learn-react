import React, { Component } from 'react'

export class subson extends Component {
  render() {

    const { color: pColor } = this.props;
    
    return (
      <div>
        <h1>孙子组件的传值-孙子color：{pColor}</h1>
        <button style={{ backgroundColor: pColor, color: "#fff" }}>孙子组件的传值-孙子</button>
      </div>
    )
  }
}

export default subson
