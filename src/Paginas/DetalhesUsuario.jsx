import React from 'react';
import { Link } from 'react-router-dom';

function DetalhesUsuario (props){
    
    return(
        <>
            {props.dados.name && (
                <div className='containerr'>
                    <div className="detalhes-usuario">
                            <div>
                                <img className="profile-img" src={props.dados.avatar_url} 
                                alt="imagemUsuarioPesquisado" id="imagemUsuario"/><br></br>
                            </div>
                            <div>
                                <p className=""><strong>Nome do usurário:</strong> {props.dados.name}</p>
                                <p className=""><strong>Quantidade de seguidores:</strong> {props.dados.followers}</p>
                                <p className=""><strong>Data de criação:</strong> {new Intl.DateTimeFormat('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(props.dados.created_at))}</p>
                                <p className=""><strong>Acesso ao url:</strong> {props.dados.html_url}</p>
                                <p className=""><strong>Onde trabalha:</strong> {props.dados.company}</p>
                                <p className=""><strong>Cidade:</strong> {props.dados.location}</p>
                                <Link to="/projetos-favoritos" className="btn btn-primary">Ir para os favoritos</Link>
                            </div>                           
                    </div>                
                </div>
            )}

            {props.dados.message && (
                <p>Não encontrou usuário</p>
            )}

            {props.dados.name === undefined && props.dados.message === undefined && (
                <h1>Erro</h1>
            )}
        </>
    );
}
export default DetalhesUsuario; 