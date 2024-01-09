import { useState } from "react";

export default function App() {
  const [ age, setAge ] = useState(18);
  const [ money, setMoney ] = useState(1000);
  const [ star, setStar] = useState([
    '李四',
    '迪丽热巴',
    '古力娜扎'
  ])

  function onStar() {
    setStar([...star, '哈哈'])
  }

  return <div>
    <h1>多个状态</h1>
    <p>章三同学 { age } 岁</p>
    <p>存款 { money } 岁</p>
    <ul>
      <h5>明星</h5>
      {
        star.map((i, index) => <li key={index}>名：{ i }</li>)
      }
    </ul>
    <button onClick={ onStar }>给star添加元素</button>
  </div>
}