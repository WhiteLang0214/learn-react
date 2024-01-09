import React,  { useState } from 'react'

/**
 * 
 * useState 本身是一个函数，来自于 react，有参数和返回值
 * 调用useState 返回的是一个数组
 * 数组第一个元素是：当前的状态 state
 * 第二个元素：是一个函数，这个函数的作用就是去修改和设置我们的状态
 * 
 */

// 函数式组件添加一个状态
function HookAdd() {
  // 调用一个函数，传入参数，0 就是设置的初始状态
  const arr = useState(0)
  console.log(arr); // [0, function]
  const count = arr[0];
  const onAdd = arr[1];

  return (
    <div>
      <h1>Hooks 累加器</h1>
      <p>值： { count }</p>
      <button onClick={() => onAdd(count + 1)}>累加</button>
    </div>
  )
}

export default HookAdd
