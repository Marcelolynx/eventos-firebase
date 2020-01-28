import React  from 'react';
import './home.css';  
import NavbarLogin from '../../components/navbar-login/navbar-login'
import { useSelector} from 'react-redux';

function Home() {
  return(  
    <>
      <NavbarLogin/>
       <h1>{useSelector(state => state.usuarioEmail) }</h1>
    </>
 )
}

export default Home;