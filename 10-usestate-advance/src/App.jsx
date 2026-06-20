import React, { useState } from 'react'

const App = () => {

   const [num, setNum] = useState([10, 20, 30])
  // const [num, setNum] = useState(10)

const btnClicked = () => {
// setNum(prev=> (prev+1))
// setNum(prev=> (prev+1))
// setNum(prev=> (prev+1))



   const newNum = [...num]
   newNum[0] = newNum[0] + 1
   setNum(newNum)
}

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
