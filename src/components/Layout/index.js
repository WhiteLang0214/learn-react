import React, { Component } from 'react'
import PropTypes from 'prop-types' // 引入props校验

import "./index.css";
import Menu from "../Menu";
import Container from "../Container";


export class Layout extends Component {

  constructor() {
    super() 
    this.state = {
      name: "",
      msg: ""
    }
  }

  onChangeMsg = (e) => {
    this.props.onUpdateMsg(e.target.value)
  }
  render() {
    const { name: pName, msg: pMsg } = this.props.parentData;
    
    return (
      <div className="layout">
      <Menu />
      <div>
        <p>从父组件传递过来的消息:{ pName }</p>
        -----
        <p>从父组件传递过来的消息:{ pMsg }</p>
        <span>layout改变父组件的消息：</span>
        <input 
          type="text"
          defaultValue={pMsg}
          placeholder="修改消息" 
          onChange={ this.onChangeMsg } />
        <Container {...this.props} />
      </div>
    </div>
    )
  }
}

// 使用 prop-types 校验传递的参数
Layout.propTypes = {
  name: PropTypes.string,
  msg: PropTypes.string.isRequired
}

Layout.defaultProps = {
  name: "Layout名称",
  msg: "Layout消息"
}

export default  Layout;
