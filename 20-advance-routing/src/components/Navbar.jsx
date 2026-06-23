import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-cyan-900 py-4 px-8'>
     <h2 className='text-2xl font-bold'>Sheriyans</h2>
     <div className='flex gap-10'>

      <Link className='text-lg medium' to="/">Home</Link>
      <Link className='text-lg medium' to="/about">About</Link>
      <Link className='text-lg medium' to="/product">Product</Link>
      <Link className='text-lg medium' to="/Courses">Courses</Link>
        
     </div>
    </div>
  )
}

export default Navbar
