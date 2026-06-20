import axios from 'axios'
import { useState } from 'react'

const App = () => {
//  {local storage}
  // localStorage.clear()
  // localStorage.removeItem('age')
  // localStorage.setItem('name', 'John')
  // const name =localStorage.getItem('name')
  //  console.log(name)

  // const user = JSON.parse(localStorage.getItem('user'))
  // console.log(user)

  // const user = {
  //   name: 'Sarthak',
  //   age: 18,
  //   city: 'bhopal'
  // }
  // localStorage.setItem('user',JSON.stringify(user))
  


  // async function getData() {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response)
  // }

   const [data, setData] = useState([])

  const getData = async() => {

    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)

    // const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    // const data = await response.json()
    // console.log(data)
  }

  return (
    <div>
        <button onClick={getData}>Data</button>
        <div>
          {data.map(function(elem,idx){
   
            return <h3>hello, {elem.author} {idx}</h3>
          })}
        </div>
    </div>
    
  )
}

export default App
