import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <div className='centeredText'>
    <nav>
      <a className='navBar'><Link to='/'>Home</Link></a>
      <a className='navBar'><Link to='/search'>Search</Link></a>
      <a className='navBar'><Link to='/favorites'>Favorites</Link></a>
    </nav>
  </div>
)

export default Header
