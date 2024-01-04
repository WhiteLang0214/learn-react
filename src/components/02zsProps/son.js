import React, { Component } from 'react'
import Subson from "./subson"

export class son extends Component {

  onChangeMsg = (e) => {
    this.props.onUpdateMsg(e.target.value)
  }
  
  render() {

    const { name: pName, msg: pMsg, color: pColor } = this.props.parentData;

    return (
      <div>
        <p>从父组件传过来的名称:{ pName }</p>
        <p>从父组件传过来的消息:{ pMsg }</p>
        <span>son改变父组件的消息：</span>
        <input 
          type="text"
          defaultValue={pMsg}
          placeholder="修改消息" 
          onChange={ this.onChangeMsg } />
        
        <Subson color={pColor} />
      </div>
    )
  }
}

export default son
