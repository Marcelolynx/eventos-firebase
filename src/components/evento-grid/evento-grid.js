import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './evento-grid.css';

function EventoGrid() {

  return(
    <>
    <div className="container">
    <div className="mb-3"><strong>Lista de Recebimentos</strong></div>

    <table class="table table-hover table-responsive-md">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">telefone</th>
      <th scope="col">Endereço</th>
      <th scope="col">Data Crédito</th>
      <th scope="col">Num parcelas</th> 
      <th scope="col">Data Recebimento</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Carlos Medeiros</td>
      <td>67 99915-9900</td>
      <td>Rua dos Medeiros 99</td>
      <td>20/12/2019</td>
      <td>20/01/2020</td>
      <td>20/01/2020</td>
      <td><a className="btn btn-outline-secondary btn-small">Detalhes</a></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Everaldo Gimenes</td>
      <td>67 99232-9090</td>
      <td>Rua do Calote, 171</td>
      <td>24/12/2019</td>
      <td>05/01/2020</td>
      <td><a className="btn btn-outline-secondary btn-small">Detalhes</a></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Valeria Marques</td>
      <td>67 9669-0169</td>
      <td>Av da Passarela, 760</td>
      <td>24/12/2019</td>
      <td>20/02/2020</td>
      <td><a className="btn btn-outline-secondary btn-small">Detalhes</a></td>
    </tr>
  </tbody>
</table>
</div>
    </>
  )
}

export default EventoGrid;