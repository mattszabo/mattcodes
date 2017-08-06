import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        mattcodes.
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/one'>One</Link></li>
            <li><Link to='/two'>Two</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
