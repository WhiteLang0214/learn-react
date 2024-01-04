import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Layout from "./components/Layout";
import Fzprops from "./components/01fzProps";
import Fzsprops from "./components/02zsProps";
import Context from "./components/03context/main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Fzprops />
          <Fzsprops />
          <Context />
        <Layout />
      </div>
    );
  }
}

export default App;
