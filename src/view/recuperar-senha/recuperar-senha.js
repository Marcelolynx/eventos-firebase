import React, { useState } from 'react';
import './recuperar-senha.css';
import firebase from '../../config/firebase';
import 'firebase/auth'; 
import Navbar from '../../components/navbar/navbar'; 
 


function Recuperar() {

  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();

  function recuperarSenha() {
    firebase.auth().sendPasswordResetEmail(email).then(resultado => {
      setMsg("Enviamos um link de recuperação de senha para seu email!")
    }).catch(erro => {
      setMsg("Verifique se o email está correto!")  
    })
  }
   
   return(
   <>
   <Navbar />
   <div className="form-cadastro">
     <form className="text-center form-login mx-auto mt-5">
       <h3 className="mb-3 text-white font-weight-bold">Recuperar senha:</h3>
       <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" palceholder="Insira seu email"/>

       <div className="msg my-4 text-center">
         <span>{msg}</span>
       </div>

       <button onClick={recuperarSenha} type="button" className="btn btn-lg btn-block btn-enviar">Recuperar senha</button>
     </form>
   </div>
   </>
   );
}

export default Recuperar;