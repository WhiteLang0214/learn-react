import React, { Component } from 'react'


// 分别都渲染了两次
// render Main;
// render Header;
// render Footer
// 因为 类组件 会走完整的生命周期，但为什么会走2次呢？

class Main extends Component {

  // 根据最新的 props和state 去判断是否需要调用 redner 方法
  // 此方法不推荐，手动的给每个子组件去阻止渲染，真是开发中不是最优选择
  /**
   * 
   * @param {*} nextProps 最新的props
   * @param {*} nextState 最新的state
   */ 
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.num !== nextProps.num) {
      return true
    }
    return false
  }

  render() {
    console.log('render Main:')
    return (
      <div>
        Main
      </div>
    )
  }
}

class Header extends Component {
  render() {
    console.log('render Header:')
    return (
      <div>
        Header
      </div>
    )
  }
}

class Footer extends Component {
  render() {
    console.log('render Footer:')
    return (
      <div>
        Footer
      </div>
    )
  }
}

// // 改成函数式组件看下效果
// function Main() {
//   return <div>
//    Main
//     {console.log('render Main:')}
//   </div>
// }

// function Header() {
//   return (
//     <div>
//       Header {console.log('render Header:')}
//     </div>
//   )
// }

// function Footer() {
//   return (
//     <div>
//       Footer{ console.log('render Footer:')}
//     </div>
//   )
// }


class repeatRender extends Component {

  state = {
    num: 0
  }

  add = () => {
    this.setState({
      num: this.state.num++
    })
  }

  render() {
    return (
      <div>
        <h1> ShouldComponentUpdate 组件重复渲染</h1>
        
        <Main />
        <Header />
        <Footer />
        <p>{ this.state.num}</p>
        <button onClick={this.add}>add</button>
        {/* 此时父组件中的 state或者props发生更新的时候，都会执行render；
         无论子组件中的 state和props是否更新，都会触发子组件的重新渲染，从而会导致很多不必要的 render开销 */}
      </div>
    )
  }
}


export default repeatRender
