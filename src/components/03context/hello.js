import React, { Component } from 'react'
import World from './world'
import MainContext from './context'

export class hello extends Component {

  static contextType  =MainContext;
  
  render() {
    return (
      <div>
        hello里引用world
        Hello page<span style={{color: 'blue'}}>使用context</span> --- { this.context }
        <World />
      </div>
    )
  }
}

export default hello
