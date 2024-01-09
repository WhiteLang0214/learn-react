import React, { useEffect, useState } from 'react'


export default function App() {

  const [ count, setCount ] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(a => a + 1)
    }, 1000)

    // 清除定时器
    return () => clearInterval(timer)
  }, [])

  return <div>
  <h1>useEffect 清除定时器</h1>
  <p>{ count }</p>
</div>
}
