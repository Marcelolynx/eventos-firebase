import React, { useState } from 'react';
import './login.css';
import firebase from '../../config/firebase';
import 'firebase/auth';
import { Link, Redirect } from 'react-router-dom';
import NavbarLogin from '../../components/navbar-login/navbar-login'; 

import { useSelector, useDispatch } from 'react-redux';


function Login () {   
 
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();
  const dispatch = useDispatch();

  function logar() {
    firebase.auth()
            .signInWithEmailAndPassword(email, senha)
            .then(resultado => {
                setMsgTipo('sucesso'); 
                setTimeout(() => {
                  dispatch({ type: 'LOG_IN', usuarioEmail: email});
                },1500);
            }).catch(erro => {
              setMsgTipo('erro');
            });
  }

  return(
    <>
    <NavbarLogin/>
    <div className="login-content d-flex justify-content-center">
    
        {useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/dashboard' /> : null }
     
      
      <form className="form-signin mx-auto">
        <div className="text-center mb-4">
        <img className="mb-4"   alt="" width="90" height="68" />
        <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
        </div>

        <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email"></input>
        <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="senha"></input>
        
        <button onClick={logar} className="btn btn-lg btn-block btn-login" type="button">Logar</button>

        <div className="msg-login text-white text-center my-5">

            { msgTipo === 'sucesso' && <span><strong>Wow</strong> Você está conectado!</span> }
            { msgTipo === 'erro' && <span><strong>Ops</strong> Verifique se a senha ou usuário estão corretos!</span> }
        </div>


        <div className="opcoes-login mt-5 text-center">
          <Link to="/recuperar-senha"  className="mx-2">Esqueci a senha</Link>
          <span>&#9733;</span>
          <Link to="cadastro/usuario" className="mx-2">Cadastrar</Link>
        </div>
      </form>
    </div>
    </>
  )
}


export default Login;