import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='div'>
     <section className='nav'>
      <Link to='/'>Home</Link>
      <Link to="/service">Service</Link>
      <Link to='/spares'>Spares</Link>
      <Link to='/about'>About</Link>
     </section>
    </div>
  )
}

export default Nav
