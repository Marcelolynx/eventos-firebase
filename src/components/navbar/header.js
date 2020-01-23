import React, { useState } from 'react';
import './header.css';
 
import {Link} from 'react-router-dom';


function Navbar() {

  return(
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <a className="navbar-brand font-weight-bold" href="/">Paiva Academics</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav">
      <i class="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
          <li className="nav-item active"/>
            <Link className="nav-link" to="/">Home</Link>
          <li className="nav-item"></li>
            <Link className="nav-link" to="/">Quem Somos</Link>
          <li className="nav-item" />
            <Link className="nav-link" to="usuario">Cadastrar</Link>
          <li className="nav-item" />
            <Link className="nav-link" to="login">Login</Link>
        </ul>
      </div>
       
    
    </nav>
  )
}

export default Navbar;