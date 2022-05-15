import React from 'react'
import { Link } from 'react-router-dom'

function NavBar () {
  return (
    <nav className="navbar navbar-expand-sm bg-light">
  <div className="container-fluid">
    <a href='/' className="navbar-brand">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link" to='/'>Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to='/browse'>Your products</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar
