import React, { Component } from 'react'
import hello from './hello'

export class main extends Component {
  render() {
    return (
      <div>
        main里引入hello
        <hello />
      </div>
    )
  }
}

export default main
