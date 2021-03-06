import React,  { useState }  from 'react';  
import './evento.css';     
import Navbar from '../../components/navbar/navbar';
import { useSelector } from 'react-redux';
import firebase from '../../config/firebase';

function Evento() {
  
  let prazoResposta = () => (new Date.now());
  

  const [msgTipo, setMsgTipo] = useState();
  const [Nome, setNome] = useState();
  const [rg, setRg] = useState();
  const [cpf, setCpf] = useState(); 
  const [telefone, seTelefone] = useState();
  const [celular, setCelular] = useState();
  const [endereco, setDescricao] = useState();
  const [bairro, setDataRecebido] = useState();
  const [cidade, setDestino] = useState();
  const [cep, setDataResposta] = useState();
  const usuarioEmail = (useSelector(state => state.usuarioEmail));

  const storage = firebase.storage();
  const db = firebase.firestore();

  function cadastrar() {

    setMsgTipo(null);

    storage.ref(`documentos/${arquivo.name}`).put(arquivo).then(() => {
      db.collection('reminder').add({
        nome: nome,
        rg: rg,
        cpf: cpf,
        telefone: telefone,
        celular: celular,
        endereco: endereco,
        bairro: bairro,
        cidade: cidade.name,
        cep: cep,
        criacao: new Date()
        
      }).then(() => {
      setMsgTipo("sucesso");
    }).catch(erro => {
      setMsgTipo('Não foi possível fazer o upload do arquivo!');
    });
  })
}

 

  return(  
    <>
      <Navbar/>
       <div className="content col-12">
         <div className="row">
           <h3 className="mx-auto font-weight-bold">Cadastro Recebimento</h3>
         </div>

         <form action="">
         <div className="form-group row">
         <div className="form-group col-7">
             <label>Nome cliente</label>
             <input onChange={(e) => setNome(e.target.value)}  type="text" className="form-control"/>
           </div>
           <div className="form-group col-2">
             <label>TX de Retorno</label>
             <select onChange={(e) => setOrigem(e.target.value)} className="form-control">
                <option disable selected value>-- Selecione --</option>
                <option value="">10% </option>
                <option value="">15%</option> 
                <option value="">25%</option> 
                <option value="">30%</option> 
                <option value="">35%</option> 
                <option value="">40%</option> 
                <option value="">45%</option> 
                <option value="">50%</option> 
              </select>
           </div>
          
        
           <div className="form-group col-3">
             <label>Valor</label>
             <input onChange={(e) => setNome(e.target.value)} type="text" className="form-control"/>
           </div>
          </div>
           
             
            <div className="form-group row">
             <label>Endereço</label>
             <input onChange={(e) => setRg(e.target.value)} type="text" className="form-control"/>
           </div>
           <div className="form-group col-2">
             <label>numero</label>
             <input onChange={(e) => setCpf(e.target.value)} type="text" className="form-control"/>
           </div>
           <div className="form-group col-3">
             <label>Bairro</label>
             <input onChange={(e) => setNumero(e.target.value)} type="text" className="form-control"/>
           </div>
           <div className="form-group col-3">
             <label>Cidade:</label>
             <input onChange={(e) => setNumero(e.target.value)} type="text" className="form-control"/>
           </div>
           <div className="form-group col-3">
             <label>CEP:</label>
             <input onChange={(e) => setNumero(e.target.value)} type="text" className="form-control"/>
           </div>
            
 
           <div className="form-group row">
          <div className="form-group">
            <div className='form-group col-6'>
              <label>Período de recebimento </label>
              <select onChange={(e) => setOrigem(e.target.value)} className="form-control">
                <option disable selected value>-- Selecione --</option>
                <option value="">Semanal</option>
                <option value="">Quinzenal</option>
                <option value="">Mensal</option> 
              </select>
            </div>  
              <div className="form-group col-6">
                <label>Data da solicitação</label>
                <input onChange={(e) => setDataRecebido(e.target.value)} type="date" className="form-control"/>
              </div>
              
          </div>
          </div>

           <div className="form-group">
             <label>Descrição da solicitação</label>
             <textarea onChange={(e) => setDescricao(e.target.value)} type="text" className="form-control" rows="5" />
           </div>
          

           <button onClick={cadastrar} className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro" type="button">Salvar</button>

         </form>

        <div className="msg-login  text-center my-2">

          { msgTipo === 'sucesso' && <span><strong>Wow</strong> Offício salvo com sucesso!</span> }
          { msgTipo === 'erro' && <span><strong>Ops</strong> Não foi possível salvar o documento!</span> }
        </div>

         
       </div>
    </>
 )
}


export default Evento;