import { useState } from "react";

export default function App() {
  const [ movies, setMovies ] = useState([
    {id: 1, name: '你好，李焕英', price: 50},
    {id: 2, name: ' 哆啦A梦', price: 34},
    {id: 3, name: ' 1921', price: 66},
  ])

  function onChangePrice(index) {
    const newMovies = [...movies];
    newMovies[index].price += 1
    setMovies(newMovies)
  }

  return <div>
    <h1>复杂状态</h1>

    <ul>
      <h2>电影列表</h2>
      {
        movies.map((i, index) => <li key={i.id}>
          <span>电影：《{ i.name }》</span>
          <span>票价：{ i.price }</span>
          <button onClick={ () => onChangePrice(index) }>票价 加1</button>

        </li>)
      }
    </ul>
  </div>
}