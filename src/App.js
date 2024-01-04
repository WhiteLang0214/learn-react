import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
// import Layout from "./components/Layout";
import Fzprops from "./components/01fzProps";
import Fzsprops from "./components/02zsProps";
import Context from "./components/03context";
import LifeCycle from "./components/04lifeCycle";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='demo'>
          <Fzprops />
          <Fzsprops />
          <Context />
          <LifeCycle />
        </div>
        {/* <Layout /> */}
      </div>
    );
  }
}

export default App;
