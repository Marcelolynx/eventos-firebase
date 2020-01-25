import React  from 'react';
import './home.css';  
import Navbar from '../../components/navbar/navbar'
import { useSelector} from 'react-redux';

function Home() {
  return(  
    <>
      <Navbar/>
       <h1>{useSelector(state => state.usuarioEmail) }</h1>
    </>
 )
}

export default Home;