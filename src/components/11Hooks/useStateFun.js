import { useState } from "react";

export default function App() {
  const [ state, setState ] = useState( () => 100 )

  /**
   * 如果说，新的 state 需要通过之前的 state 去进行计算的话
   * 那么我们可以使用函数传递给 setState，这个函数就是接收之前的 state，并且返回一个更新的额值
   */
  function onClick() {
    setState(i => i+100)
  }

  return <div>
    <h1>useState 传函数</h1>

    <p>{ state }</p>
    <button onClick={ onClick }>加 100</button>
  </div>
}