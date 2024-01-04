import React, { Component } from 'react'
import Hello from './hello'
// 引入全局上下文
import MainContext from './context'

export class Main extends Component {
  render() {
    return (
      <div>
        <h1>Context 传值</h1>
        main里引入hello
        <MainContext.Provider value={"章三"}>
          <Hello />
        </MainContext.Provider>
      </div>
    )
  }
}

export default Main
