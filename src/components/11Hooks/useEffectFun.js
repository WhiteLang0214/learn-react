import { useEffect, useState } from "react"

function App() {

  const [ count, setCount ] = useState(0);

  useEffect(() => {
    document.title = `${count}`
  })

  return <div>
    <h1>useEffect Fun 生命周期方法，把p标签的内容实时的展示在title中</h1>
    <p>{count}次</p>
    <button onClick={ () => setCount(count+1)}>点击</button>
  </div>
}

export default App