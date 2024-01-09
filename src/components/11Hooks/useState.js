
import React, { useState } from "react"

export default function App() {

  const [state, setState] = useState(0)

  function onAdd() {
    setState(state + 1)
  }

  function onsub() {
    setState( state - 1)
  }

  return (
    <div>
      <h1>useState</h1>
      <p>{ state }</p>
      <button onClick={ onAdd }>➕1</button>
      <button onClick={ onsub }>减1</button>
    </div>
  )
}