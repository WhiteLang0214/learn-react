import React, { Component } from 'react'

export class SetTimeout extends Component {

  state = {
    num: 0
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ num: 1 })
      console.log("setTimeout:", this.state.num)
    }, 500)
  }

  render() {
    return (
      <div>
        <h1>SetTimeout setState</h1>
        <b>{this.state.num}</b>
      </div>
    )
  }
}

export default SetTimeout
