import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <Link to="/" class="navbar navbar-brand navbar-dark">TVRF </Link>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" class="nav-link active">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/About" class="nav-link active ">About us</Link>
        </li>
        <li class="nav-item">
          <Link to="/Contact" class="nav-link ">Contact us</Link>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar
