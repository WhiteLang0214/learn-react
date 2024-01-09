import React, { useState, useEffect } from 'react'

function Page() {
  const [ age, setAge ] = useState(18);
  const [ money, setMoney ] = useState(1000);

  useEffect(() => {
    console.log("page 被执行了")
  }, [])

  return <div>
    <h1>Page Component</h1>
    <p>{age}</p>
    <p>{money}</p>
    <button onClick={() => setAge(age + 1)}>长大</button>
    <button onClick={() => setMoney(money + 1)}>变有钱</button>
  </div>
}


export default function App() {

  const [ show, setShow ] = useState(true)

  return <div>
    <h1>useEffect 组件更新</h1>
    {show && <Page />}
    <button onClick={ () => setShow(!show)}>切换</button>
  </div>
}