import React, { Component } from 'react';
import "./index.css";

export default class Container extends Component {

  render() {
    const { color: pColor } = this.props.parentData;
    return (
      <div className="container">
        <h1>子孙组件的传值-孙子container：</h1>
        <button style={{ backgroundColor: pColor, color: "#fff" }}>子孙组件的传值-孙子container</button>
      </div>
    )
  }
}