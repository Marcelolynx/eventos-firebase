import React  from 'react';
import './navbar.css';
import { Link, Redirect } from 'react-router-dom'; 
import { useSelector, useDispatch } from 'react-redux';


function Navbar() {

  const dispatch = useDispatch();

  return(
    <>
    <nav className='d-flex navbar-item navbar navbar-expand-lg'>
      <a className="navbar-brand font-weight-bold" > <Link className="nav-link" to='/dashboard'>FinTech </Link></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav">
      <i class="fas fa-bars"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
   
      
       
      <ul className="navbar-nav">
          <li className="nav-item ml-4"/>
            <Link className="nav-link" to="dashboard">Dashboard</Link>
          <li className="nav-item" />
            <Link className="nav-link" to="evento-cadastro">Cadastrar</Link>
          <li className="nav-item" />
              <Link className="nav-link" onClick={() => dispatch ({type: 'LOG_OUT'})}>Sair</Link>
      </ul>
         
      
   
       
        </div>
      </nav>
    </>
  )
}

export default Navbar;