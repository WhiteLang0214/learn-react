import React, { Component } from 'react'
import PropTypes from 'prop-types' // 引入props校验

import "./index.css";
import Menu from "../Menu";
import Container from "../Container";


export class Layout extends Component {

  onChangeMsg = (e) => {
    this.props.onUpdateMsg(e.target.value)
  }

  onChangeColor = (e) => {
    this.props.onChangeColor(e.target.value)
  }

  render() {
    const { name: pName, msg: pMsg, color: pColor } = this.props.parentData;
    
    return (
      <div className="layout">
      <Menu />
      <div>
        <h1>父子组件的传值：</h1>
        <p>从父组件传递过来的消息:{ pName }</p>
        -----
        <p>从父组件传递过来的消息:{ pMsg }</p>
        <span>layout改变父组件的消息：</span>
        <input 
          type="text"
          defaultValue={pMsg}
          placeholder="修改消息" 
          onChange={ this.onChangeMsg } />
        <h1>子孙组件的传值-爸爸Layout：</h1>
        <p style={{color: pColor, fontWeight: "bold", fontSize: "24px"}}>{pColor}</p>
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
