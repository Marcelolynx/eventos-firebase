import React from 'react';  
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './view/login/index';
import Usuario from './view/cadastro/usuario'
import Home from './view/home/home'

function app() {
  return (
    <Router>
       <Route exact path='/' component={Home} />
       <Route exact path='/usuario' component={Usuario} />
       <Route exact path='/login' component={Login} />
    </Router>
  );
}

export default app;
