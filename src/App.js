import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
// import Layout from "./components/Layout";
import Fzprops from "./components/01fzProps";
import Fzsprops from "./components/02zsProps";
import Context from "./components/03context";
import LifeCycle from "./components/04lifeCycle";
import Brother from "./components/05brothers";
import ShouldComponentUpdate from './components/06repeatRender/02shouldComponentUpdate';
import PureComponnet from './components/06repeatRender/03pureComponnet';
import SetState from "./components/07setState";
import SetState2 from "./components/07setState/lifeCycle"
import ComponentEvent from "./components/07setState/componentEvent"
import SetTimeout from "./components/07setState/setTimeout"
import NativeEvent from "./components/07setState/nativeEvent"
import ImmutableState from './components/08immutableState/immutableState';
import Refindex from './components/09ref';
import HocComponentRegister from './components/10HOC/02HOCComponent/register';
import HocComponentLogin from './components/10HOC/02HOCComponent/login';
import HocComponentLogout from './components/10HOC/02HOCComponent/logout';
import Propsindex from './components/10HOC/03UpProps';
import Authindex from './components/10HOC/04HOCAuth';

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
          <Brother />
          <ShouldComponentUpdate />
          <PureComponnet />
          <SetState />
          <SetState2 />
          <ComponentEvent />
          <SetTimeout />
          <NativeEvent />
          <ImmutableState />
          <Refindex />
          <HocComponentRegister />
          <HocComponentLogin />
          <HocComponentLogout />
          <Propsindex />
          <Authindex />

        </div>
        {/* <Layout /> */}
      </div>
    );
  }
}

export default App;
