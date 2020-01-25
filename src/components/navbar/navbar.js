import React  from 'react';
import './navbar.css';
 
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


function Navbar() {

  const dispatch = useDispatch();

  return(
    <>
    <nav className='d-flex navbar-item navbar navbar-expand-lg'>
      <a className="navbar-brand font-weight-bold" href="/">Reminder</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav">
      <i class="fas fa-bars"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
    {
      useSelector(state => state.usuarioLogado) > 0 ?
       
      <ul className="navbar-nav">
          <li className="nav-item ml-4"/>
            <Link className="nav-link" to="/">Dashboard</Link>
          <li className="nav-item" />
            <Link className="nav-link" to="evento-cadastro">Novo Officio</Link>
          <li className="nav-item" />
            <Link className="nav-link" to="usuario">Meus Officios</Link>
          <li className="nav-item" />
              <Link className="nav-link" onClick={() => dispatch ({type: 'LOG_OUT'})}>Sair</Link>
      </ul>
        
         :
        
        <ul className="navbar-nav">  
          <div className='d-flex justify-content-end'>
            <li className="nav-item" />
              <Link className="nav-link" to="login">Login</Link>
          </div>
        </ul>
      
     }
       
        </div>
      </nav>
    </>
  )
}

export default Navbar;