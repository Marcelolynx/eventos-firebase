import React from 'react';  
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from '../src/store/';
import Login from './view/login/index';
import Usuario from './view/cadastro/usuario'
import Home from './view/home/home'
import { Provider } from 'react-redux';

function app() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/usuario' component={Usuario} />
        <Route exact path='/login' component={Login} />
      </Router>
    </Provider>
  );
}

export default app;
