import React, { Component } from 'react'

export class NativeEvent extends Component {

  state = {
    num: 0
  }

  click() {
    this.setState({ num: 1 })
    console.log("nativeEvent:", this.state.num)
  }

  componentDidMount() {
    document.querySelector("button").addEventListener('click', () => {
      this.click()
    }, false)
  }

  render() {
    return (
      <div>
        <h1>NativeEvent setState</h1>
        <b>{this.state.num}</b>
        <button>按钮{this.state.num}</button>
      </div>
    )
  }
}

export default NativeEvent
