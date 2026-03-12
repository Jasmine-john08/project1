import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
import { TfiMenuAlt } from "react-icons/tfi";


const Nav = () => {
  return (
    <div className='div'>
      <aside>
        <section className='home-btn'>
       <TfiMenuAlt />
       <main>
        <button><Link to={'/spareEdit'}>Spare Edit</Link></button>
       </main>
      </section>
     <section className='nav'>
      <Link to='/'>Home</Link>
      <Link to="/service">Service</Link>
      <Link to='/spares'>Spares</Link>
      <Link to='/about'>About</Link>
     </section>
      </aside>
    </div>
  )
}

export default Nav
