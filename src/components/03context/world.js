import React, { Component } from 'react'
import MainContext from './context'

export class World extends Component {
  render() {
    return (
      <div>
        world
        <MainContext.Consumer>
          { 
            context => {
              console.log(context)
              return <div>World Page -- { context }</div>
            }
          }
        </MainContext.Consumer>
      </div>
    )
  }
}

export default World
