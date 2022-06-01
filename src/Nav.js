import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
      <nav className="nav">
        <h1>HilariousPic</h1>
      <ul className="nav-links">
      <li>
           <Link style={{textDecoration: 'none', color: 'white',}} to ="/hot">HOT</Link>
      </li>
      <li>
          <Link style={{textDecoration: 'none', color: 'white'}}  to ="/regular">REGULAR</Link>
      </li>
      </ul>
      </nav>

  )
}

export default Nav
