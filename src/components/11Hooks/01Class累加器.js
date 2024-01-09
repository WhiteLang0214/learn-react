import React, { Component } from 'react'

export class ClassAdd extends Component {

  state = {
    count: 1
  }

  onAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h1>Class 累加器</h1>
        { this.state.count }
        <button onClick={this.onAdd}>累加</button>
      </div>
    )
  }
}

export default ClassAdd
