import React, { Component } from 'react'

import "./index.css";
import Menu from "../Menu";
import Container from "../Container";


export class Layout extends Component {

  render() {
    
    return (
      <div className="layout">
      <Menu />
      <div>
        <Container />
      </div>
    </div>
    )
  }
}

export default  Layout;
