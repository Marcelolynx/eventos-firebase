import React from 'react';  
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from '../src/store/';
import Login from './view/login/index';
import Usuario from './view/cadastro/usuario'
import Home from './view/home/home';
import Recuperar from './view/recuperar-senha/recuperar-senha';
import Dashboard from './view/dashboard/dashboard';
import { Provider } from 'react-redux';
import Evento from './view/evento-cadastro/evento'

function app() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/usuario' component={Usuario} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/recuperar-senha' component={Recuperar} />
        <Route exact path='/evento-cadastro' component={Evento} />
      </Router>
    </Provider>
  );
}

export default app;
