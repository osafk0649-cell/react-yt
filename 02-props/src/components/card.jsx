import React from 'react'

const Card = (props) => {

  console.log();

  return (
      <div className='card'>
        <img src="https://images.unsplash.com/photo-1777699813480-86fc4a436519?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNDJ8fHxlbnwwfHx8fHw%3D" alt="" />
        <h1>{props.user} {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card;
