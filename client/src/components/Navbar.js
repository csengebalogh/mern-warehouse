import React from 'react'
import { Link } from 'react-router-dom'

function NavBar () {
  return (
    <nav class="navbar navbar-expand-sm bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><i class="bi bi-code-square"></i></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link class="nav-link" to='/'>Home</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" to='/browse'>Our products</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar
