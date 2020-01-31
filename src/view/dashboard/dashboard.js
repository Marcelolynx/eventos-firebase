import React  from 'react';
import './dashboard.css';  
import Navbar  from '../../components/navbar/navbar';
import EventoGrid from '../../components/evento-grid/evento-grid';

function Dashboard() {

  return(
    <>
    <Navbar/>
     
     <EventoGrid/>
    </>
  )
}

export default Dashboard;