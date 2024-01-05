import React, { Component } from 'react'
import Header from './header'
import Footer from "./footer"

export class Brother extends Component {
  render() {
    return (
      <div>
        <h1>兄弟组件传值</h1>
        <Header />
        <Footer />
      </div>
    )
  }
}

export default Brother
