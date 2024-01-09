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
import Hooksindex from './components/11Hooks/02Hooks累加器';
import HookindexClassAdd from './components/11Hooks/01Class累加器';
import HookUseState from './components/11Hooks/useState';
import HookMultiState from "./components/11Hooks/multiState";
import HookPlexState from "./components/11Hooks/plexState";
import HookUseStatefun from "./components/11Hooks/useStateFun"
import HookUseEffectClass from "./components/11Hooks/useEffectClass";
import HookUseEffectFun from "./components/11Hooks/useEffectFun";
import HookUseEffectComponentChange from "./components/11Hooks/useEffectComponentChange";
import HookClassClearSettimeout from "./components/11Hooks/classClearSettimeout";
import HookUseEffectClearSettimeout from "./components/11Hooks/useEffectClearSettimeout"
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
          <Hooksindex />
          <HookindexClassAdd />
          <HookUseState />
          <HookMultiState />
          <HookPlexState />
          <HookUseStatefun />
          <HookUseEffectClass />
          <HookUseEffectFun />
          <HookUseEffectComponentChange />
          <HookClassClearSettimeout />
          <HookUseEffectClearSettimeout />

        </div>
        {/* <Layout /> */}
      </div>
    );
  }
}

export default App;
