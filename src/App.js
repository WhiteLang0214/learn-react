import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Layout from "./components/Layout";

class App extends Component {

  constructor() {
    super()
    this.state = {
      name: "App组件名称",
      msg: "App组件消息",
      color: "red",
      list: [
        {
          id: "red", 
          value: "red"
        },
        {
          id: "green",
          value: "green"
        },
        {
          id: "blue",
          value: "blue"
        }
      ]
    }
  }

  onUpdateMsg = (val) => {
    this.setState({
      msg: val
    })
  }

  onChangeColor = (e) => {
    this.setState({
      color: e.target.value
    })
  }

  render() {
    let { list, color } = this.state;
    return (
      <div className="App">
        <Header />
        <h1>父子组件的传值：</h1>
        <p>父组件中的名称：{ this.state.name }</p>
        <p>父组件中的消息：{ this.state.msg }</p>
        <h1>子孙组件的传值：</h1>
        <select 
          defaultValue={color} 
          onChange={this.onChangeColor}>
          {list.map(i => <option key={i.id} value={i.id}>{i.value}</option>) }
        </select>
        <Layout parentData={this.state} 
        onUpdateMsg={ this.onUpdateMsg }
        onChangeColor={ this.onChangeColor } />
      </div>
    );
  }
}

export default App;
