import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Layout from "./components/Layout";

class App extends Component {

  constructor() {
    super()
    this.state = {
      name: "App父组件",
      msg: "这是父组件中的信息"
    }
  }

  onUpdateMsg = (val) => {
    this.setState({
      msg: val
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <p>父组件中的名称：{ this.state.name }</p>
        <p>父组件中的消息：{ this.state.msg }</p>
        <Layout parentData={this.state} onUpdateMsg={ this.onUpdateMsg } />
      </div>
    );
  }
}

export default App;
