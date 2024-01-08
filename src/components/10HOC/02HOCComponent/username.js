import React, { Component } from 'react'

// export class PropsUsername extends Component {

//   state = {
//     username: ""
//   }

//   // 读取 usernmae, 通常是从 axios 获取，所以在生命周期中读取
//   componentDidMount() {
//     const username = "admin";
//     this.setState({ username })
//   }
  
//   render() {
//     return (
//       <div>
//         <h1>高阶组件 username</h1>
//       </div>
//     )
//   }
// }

// 高阶组件 - username
// 处理通用的逻辑
function PropsUsername(WrapComponent) {
  class NewWrapComponent extends Component {
    state = {
      username: ""
    }
  
    // 读取 usernmae, 通常是从 axios 获取，所以在生命周期中读取
    componentDidMount() {
      const username = "admin";
      this.setState({ username })
    }

    render() {
      return <WrapComponent username={this.state.username} />
    }
  }
  return NewWrapComponent
}
export default PropsUsername
