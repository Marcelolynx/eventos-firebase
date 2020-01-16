import React, { useState } from 'react';
import './home.css';
import firebase from '../../config/firebase';
import 'firebase/auth';
import {Link} from 'react-router-dom';
import Navbar from '../../components/navbar/header'


function Home() {
  return(  
    <Navbar/>
 )
}

export default Home;