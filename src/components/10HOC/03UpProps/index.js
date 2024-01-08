import React, { Component } from 'react'

class People extends Component {
  render() {
    return <div>
      <h4>People 组件</h4>
      <p>我的名字：{this.props.name }</p>
      <p>我的年龄：{this.props.age }</p>
      <p>我的爱好：{this.props.hobby }</p>
    </div>
  }
}


class Boy extends Component {
  render() {
    return <div>
      <h4>Boy 组件</h4>
      <p>我的名字：{this.props.name }</p>
      <p>我的年龄：{this.props.age }</p>
      <p>我的爱好：{this.props.hobby }</p>
    </div>
  }
}

// 高阶组件实现
// 复用公共的 props ，给组件传多个 props
const PropsComponent = (Component) => {
  // 返回一个函数式组件，给外面使用
  const newComponent = (props) => {
    return <Component {...props} age="15" />
  }
  return newComponent
}

const PropsPeople = PropsComponent(People);
const Propsboy = PropsComponent(Boy);

export class Propsindex extends Component {
  render() {
    return (
      <div>
        <h1>高阶组件 - 增强props</h1>
        <People name="章三" age="16" hobby="吃饭" />
        <Boy name="李四" age="12" hobby="睡觉" />

        <p style={{ color: 'blue' }}>用高阶组件，把 props 进行复用， 给每个组件传多个 props，把公共的复用出来，传值的时候只传不同的即可</p>
        <PropsPeople name="章三" hobby="吃饭" />
        <Propsboy name="李四" hobby="睡觉" />
      </div>
    )
  }
}

export default Propsindex
