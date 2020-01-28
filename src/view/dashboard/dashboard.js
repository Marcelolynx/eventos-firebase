import React  from 'react';
import './dashboard.css';  
import Navbar  from '../../components/navbar/navbar' 

function Dashboard() {

  return(
    <>
    <Navbar/>
    <div className="container">
      <div className="card"></div>
      <h3>Lista de oficios</h3>
      <div className="form-control">
        <ul className=""><li>Lista de Officios aqui...</li></ul>
        <ul className=""><li>Lista de Officios aqui...</li></ul>
        <ul className=""><li>Lista de Officios aqui...</li></ul>
        <ul className=""><li>Lista de Officios aqui...</li></ul>
        <ul className=""><li>Lista de Officios aqui...</li></ul>
        <ul className=""><li>Lista de Officios aqui...</li></ul>
        <ul className=""><li>Lista de Officios aqui...</li></ul>
        <ul className=""><li>Lista de Officios aqui...</li></ul>
        <ul className=""><li>Lista de Officios aqui...</li></ul>
      </div>
    </div>
    </>
  )
}

export default Dashboard;