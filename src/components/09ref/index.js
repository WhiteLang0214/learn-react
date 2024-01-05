import React, { Component, createRef } from 'react'

export class Refindex extends Component {
  // 创建1
  // constructor() {
  //   super()
  //   this.input2 = createRef()
  //   this.pRef2 = createRef()
  // }
  // 或创建2
  input2 = createRef()
  pRef2 = createRef()

  getText = () => {
    const info = this.refs.input.value;
    this.refs.pRef.innerHTML = info;
  }

  getText2 = () => {
    const info = this.input2.current.value;
    this.pRef2.current.innerHTML = info
  }

  render() {
    return (
      <div>
        <h1>ref</h1>
        <h6>string方法</h6>
        <input type='text' ref="input" />
        <button onClick={this.getText}>点击</button>
        <p ref="pRef">user</p>
        <br/>
        <h6>createRef</h6>
        <input type='text' ref={this.input2} defaultValue="哈哈" />
        <button onClick={this.getText2}>点击2</button>
        <p ref={this.pRef2}>哈哈2</p>
      </div>
    )
  }
}

export default Refindex
