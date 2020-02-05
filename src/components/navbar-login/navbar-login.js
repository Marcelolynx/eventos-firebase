import React  from 'react';
import './navbar-login.css';
 
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


function NavbarLogin() {

  const dispatch = useDispatch();

  return(
    <>
    <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top py-3 box-shadow">
       
          <a className="navbar-brand font-weight-bold" href="/">FinTech</a>
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav">
          <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
             
             
            <li class="nav-item">
                <Link className="nav-link" to="login">Login</Link> 
                
            </li>
            
        </ul>
    </div>
      </nav>
    </>
  )
}

export default NavbarLogin;