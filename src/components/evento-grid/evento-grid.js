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
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td><a className="btn btn-outline-secondary btn-small">Detalhes</a></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
      <td><a className="btn btn-outline-secondary btn-small">Detalhes</a></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td><a className="btn btn-outline-secondary btn-small">Detalhes</a></td>
    </tr>
  </tbody>
</table>
</div>
    </>
  )
}

export default EventoGrid;