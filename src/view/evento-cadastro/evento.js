import React,  { useState }  from 'react';  
import './evento.css';     
import Navbar from '../../components/navbar/navbar';
import { useSelector } from 'react-redux';
import firebase from '../../config/firebase';

function Evento() {
  

  const [msgTipo, setMsgTipo] = useState();
  const [numero, setNumero] = useState();
  const [titulo, setTitulo] = useState();
  const [origem, setOrigem] = useState();
  const [descricao, setDescricao] = useState();
  const [dataRecebido, setDataRecebido] = useState();
  const [destino, setDestino] = useState();
  const [dataResposta, setDataResposta] = useState();
  const [arquivo, setArquivo] = useState(); 
  const usuarioEmail = (useSelector(state => state.usuarioEmail));

  const storage = firebase.storage();
  const db = firebase.firestore();

  function cadastrar() {

    setMsgTipo(null);

    storage.ref(`documentos/${arquivo.name}`).put(arquivo).then(() => {
      db.collection('reminder').add({
        numero: numero,
        titulo: titulo,
        origem: origem,
        descricao: descricao,
        dataRecebido: dataRecebido,
        destino: destino,
        dataResposta: dataResposta,
        arquivo: arquivo.name,
        usuario: usuarioEmail,
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
           <h3 className="mx-auto font-weight-bold">Cadastro de Offício</h3>
         </div>

         <form action="">
         <div className="form-group row">
           <div className="form-group col-3">
             <label>Número</label>
             <input onChange={(e) => setNumero(e.target.value)} type="text" className="form-control"/>
           </div>
           <div className="form-group col-9">
             <label>Título</label>
             <input onChange={(e) => setTitulo(e.target.value)}  type="text" className="form-control"/>
           </div>
          </div>
          <div className="form-group row col-12">
            <div className='form-group col-6'>
              <label>Origem solicitante </label>
              <select onChange={(e) => setOrigem(e.target.value)} className="form-control">
                <option disable selected value>-- Selecione --</option>
                <option value="">Officio SUS</option>
                <option value="">Officio Convênio</option>
                <option value="">Officio Prefeitura</option>
                <option value="">Officio Governo</option>
              </select>
            </div>
          
          
            
              <div className="form-group col-6">
                <label>Data da solicitação</label>
                <input onChange={(e) => setDataRecebido(e.target.value)} type="date" className="form-control"/>
              </div>

              <div className='form-group col-6'>
              <label>Destino solicitado </label>
              <select onChange={(e) => setDestino(e.target.value)} className="form-control">
                <option disable selected value>-- Selecione --</option>
                <option value="">Officio SUS</option>
                <option value="">Officio Convênio</option>
                <option value="">Officio Prefeitura</option>
                <option value="">Officio Governo</option>
              </select>
            </div>
          
               
              <div className="form-group col-6">
                <label>Data limite para resposta</label>
                <input onChange={(e) => setDataResposta(e.target.value)} type="date" className="form-control"/>
              </div>
              
          </div>

           <div className="form-group">
             <label>Descrição da solicitação</label>
             <textarea onChange={(e) => setDescricao(e.target.value)} type="text" className="form-control" rows="5" />
           </div>
           <div className="form-group col-6">
                <label>Upload do documento</label>
                <input onChange={(e) => setArquivo(e.target.files[0])} type="file" className="form-control"/>
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