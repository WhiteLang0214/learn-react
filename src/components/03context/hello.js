import React, { Component } from 'react'
import world from './world'

export class hello extends Component {
  render() {
    return (
      <div>
        hello里引用world
        <world />
      </div>
    )
  }
}

export default hello
