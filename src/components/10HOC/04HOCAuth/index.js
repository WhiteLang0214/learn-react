import React, { Component } from 'react'

class Admin extends Component {
  render() {
    return <div>
      <h1>登录成功，管理员页面</h1>
    </div>
  }
}

class Login extends Component {
  render() {
    return <div>
      <h1>登录页面</h1>
    </div>
  }
}

// 高阶组件 - 实现登陆鉴权
const AuthComponent = (Component) => {
  const newComponent = (props) => {
    const { isLogin} = props;
    
    if (isLogin) {
      // 如果登录，进入到需要的页面
      return <Component {...props} />
    } else {
      // 否则进入到登录页面
      return  <Login />
    }
  }
  return newComponent
}

const AuthAdmin = AuthComponent(Admin)

export class Authindex extends Component {

  state = {
    isLogin : true
  }

  onClick = () => {
    this.setState({
      isLogin: !this.state.isLogin
    })
  }

  render() {
    return (
      <div>
        <h1>高阶组件 - 实现登陆鉴权</h1>
        <AuthAdmin isLogin={ this.state.isLogin } />
        <button onClick={ this.onClick }>{ this.state.isLogin ? '退出': '请登录' } </button>
      </div>
    )
  }
}

export default Authindex