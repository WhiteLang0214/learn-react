import React, { Component } from 'react'


// 分别都渲染了两次
// render Main;
// render Header;
// render Footer
// 因为 类组件 会走完整的生命周期，但为什么会走2次呢？

// class Main extends Component {
//   render() {
//     console.log('render Main:')
//     return (
//       <div>
//         Main
//       </div>
//     )
//   }
// }

// class Header extends Component {
//   render() {
//     console.log('render Header:')
//     return (
//       <div>
//         Header
//       </div>
//     )
//   }
// }

// class Footer extends Component {
//   render() {
//     console.log('render Footer:')
//     return (
//       <div>
//         Footer
//       </div>
//     )
//   }
// }

// 改成函数式组件看下效果
function Main() {
  return <div>
   Main
    {console.log('render Main:')}
  </div>
}

function Header() {

  return (
    <div>
      Header {console.log('render Header:')}
    </div>
  )
}

function Footer() {
  return (
    <div>
      Footer{ console.log('render Footer:')}
    </div>
  )
}


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
        <h1>repeatRender 组件渲染</h1>
        
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
