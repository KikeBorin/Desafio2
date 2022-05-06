import React from 'react';
import { Link } from 'react-router-dom';
import imagem from '../Imagem/usuarioNaoEncontrado.png';

//para receber o que o App ta mandando
function RetornoPesquisa(props) {

  function buscaDados() {
    const nome = document.getElementById('search').value
    props.setNome(nome)
  }

  return (
    <div className="container">
      
      <div className="card card-body">

        <h1>Faça sua Pesquisa</h1>
        <p className="lead">Digite o nome:</p>
        <input id='search' type='text' className="form-control" required />
        <button className="buttonPesquisa" onClick={buscaDados}>Localizar</button>

      </div>

      <div>
        
        {props.dados.name &&(
          <>
            <h2 className="nomeUsuario" >{props.dados.name}</h2>
            <img className="imagemUsuario" src={props.dados.avatar_url} alt="imagemUsuarioPesquisado" id="imagemUsuario" />

            <Link to="/detalhes-usuario">
              <button className="buttonEnvio">Para mais informações</button>
            </Link>
          </>
        )}

        {props.dados.message && (
          <>
            <img src={imagem} class="img-fluid" alt="Responsive image"></img>
          </>
        )}

      </div>

    </div>

  );
}
export default RetornoPesquisa;