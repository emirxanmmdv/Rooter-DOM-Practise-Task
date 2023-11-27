import React from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div className='Buttons'>
            <Link to="" ><button className='homePageBtn'>Home</button></Link>
            <Link to="/Contact"><button className='contactPageBtn'>Contacts</button></Link>
        </div>
    </nav>
  )
}

export default Navbar