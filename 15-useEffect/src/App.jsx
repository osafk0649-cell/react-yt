import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


// const App = () => {
 
//     const [num, setNum] = useState(0)
//     const [num2, setNum2] = useState(100)

//    useEffect(function(){
//     console.log('use effect is running...');
//    }, [num])
//   return (
//     <div>
//       <h1>num1 {num}</h1>
//       <h1>num2 {num2}</h1>
//       <button onMouseEnter={() => { 
//         setNum(num + 1)
      
//       }}
//      onMouseLeave={()=>{
//         setNum2(num2 + 10)
//       }}>
//         Hover
//         </button>
//     </div>
//   )
// }




const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging() {
   console.log('a ki value change ho gayi');
  }
  function bChanging() {
   console.log('b ki value change ho gayi');
  }

   useEffect(function() {
    aChanging(); 
    bChanging();
   },[a,b])

  return (
    <div>
      <h1>A is changing{a}</h1>
      <h1>B is changing{b }</h1>
       <button 
       onClick={()=>{
        setA(a+1)
       }}
       >Change A</button>
       <button
          onClick={()=>{
            setB(b-1)
          }}
       >Change B</button>
    </div>
  )
}




export default App
