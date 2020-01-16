import React, { useState } from 'react';
import './usuario.css';
import firebase from '../../config/firebase';
import 'firebase/auth';
import Navbar from '../../components/navbar/header'

function Usuario() {

  
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();
  const [msg, setMsg] = useState();
  const [loading, setLoading] = useState();

  function cadastrar() {

    setLoading(1);

    setMsgTipo(null);
   
    if(!email || !senha ){
      
      setMsgTipo('erro')
      setMsg('Você precisa informar o email e senha para concluir o cadastro!');
      return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado => {
      setLoading(0);
      setMsgTipo( 'sucesso');
    }).catch(erro => {
      setLoading(0);
        setMsgTipo( 'erro');
        switch(erro.message)
          {
          case 'Password should be at least 6 characters':
              setMsg('A Senha deve ter pelo menos 6 caracteres');
              break;
          case 'The email address is already in use by another account.':
              setMsg('Este email já está sendo utilizado por outro usuário!');
              break;
          case 'The email address is badly formatted':
              setMsg('O formato do seu email não é válido');
              break;
          default:
            setMsg('Não foi possível concluir o cadastro, tente novamente');
            break;
          } 
    });
  }

  return (
    <>
    <Navbar/>
    <div className="form-cadastro">
      <form className="text-center form-login mx-auto mt-5">
          <h1 className="h3 mb-3 text-black font-weight-bold">Cadastro</h1>
        
        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="email"></input>
        <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control my-2" placeholder="senha"></input>
        
        {
          loading ? <div className="spinner-border text-danger" role="status"><span className="sr-only">loading...</span></div>
          : <button onClick={cadastrar} type="button" className="btn btn-lg btn-primary btn-block mt-3 mb-5 btn-cadastro">Enviar</button>
        
        }
        

        <div className="msg-login text-black text-center my-5">

          { msgTipo === 'sucesso' && <span><strong>Wow</strong> Cadastro efetuado com sucesso!</span> }
          { msgTipo === 'erro' && <span><strong>Ops! </strong> {msg}</span> }
        </div>
      </form>
    </div>
    </>
  )
}


export default Usuario;