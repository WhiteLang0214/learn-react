import React, { Component } from 'react'

export class ImmutableState extends Component {

  state = {
    student: [
      {id: 1, name: "小红", age: 11},
      {id: 2, name: "小绿", age: 12},
      {id: 3, name: "小紫", age: 13},
    ]
  }

  addSameId = () => {
    // 添加相同key值，可以添加数据，但是会报错
    // 可以利用 shouldComponentUpdate 钩子函数阻止 render
    let obj = { id: 14, name: "小张", age: 14};; 
    this.state.student.push(obj)
    console.log("---",  this.state.student)
    this.setState({ student: this.state.student })
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.student !== nextState.student) {
      return true
    }
    return false
  }

  addDiffId = () => {
    const newData = [...this.state.student];
    let { id: lastId, name: lastName, age: lastAge } = this.state.student[this.state.student.length - 1];
    let obj = { id: lastId+=1, name: lastName + lastId, age: lastAge+=1 };
    newData.push(obj)
    this.setState({ student: newData })
  }

  render() {
    return (
      <div>
        <h2>数据不可变 - 学生列表</h2>
        <ul>
          { this.state.student.map(i => {
            return <li key={i.id}>
              <p>姓名：{i.name}</p>
              <p>年龄：{i.age}</p>
              </li>
          })}
        </ul>
        <button onClick={this.addSameId}>增加数据，相同key值</button>
        <button onClick={this.addDiffId}>增加数据，不同key值</button>
      </div>
    )
  }
}

export default ImmutableState
