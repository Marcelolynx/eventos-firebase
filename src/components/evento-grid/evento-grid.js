import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './evento-grid.css';

function EventoGrid() {

  return(
    <>
    <div className="container">
    <div className="mb-3"><strong>Lista de Ofícios</strong></div>

    <table class="table table-hover table-responsive-md">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Código</th>
      <th scope="col">Titulo</th>
      <th scope="col">Requisitante</th>
      <th scope="col">Data Recebido</th>
      <th scope="col">Prazo Resposta</th>
      <th scope="col">Detalhes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>0912/2019</td>
      <td>Requisição de materiais</td>
      <td>SUS</td>
      <td>20/12/2019</td>
      <td>20/02/2020</td>
      <td><a className="btn btn-outline-secondary btn-small">Detalhes</a></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>1212/2019</td>
      <td>Contrato de manutenção</td>
      <td>SUS</td>
      <td>20/12/2019</td>
      <td>20/02/2020</td>
      <td><a className="btn btn-outline-secondary btn-small">Detalhes</a></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>33912/2019</td>
      <td>Compra de materiais</td>
      <td>PMCG</td>
      <td>20/12/2019</td>
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