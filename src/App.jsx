import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import RetornoPesquisa from './components/PaginaPesquisa';
import DetalhesUsuario from './Paginas/DetalhesUsuario';
import Favoritos from './Paginas/Favoritos';
import './App.css';
import './styles/PaginaPesquisa.css';
import './styles/DetalhesUsuario.css';

function App() {

    const [dados, setDados] = useState([]);
    const [projetosFavoritos, setProjetosFavoritos] = useState([]);
    const [nome, setNome] = useState('');
    const [certo, setCerto] = useState(false);

    useEffect(() => {
        PegarDados(nome)
    }, [nome])

    function PegarDados(nome) {
        
        if (nome !== '') {
            fetch(`https://api.github.com/users/${nome}`)
                .then(resposta => resposta.json())
                .then(resposta => {                                    
                    setCerto(true)
                    setDados(resposta)                 
                })
                .catch(_ => {
                    setCerto(false)
                    setDados([])
                    setProjetosFavoritos([])
                })

            fetch(`https://api.github.com/users/${nome}/starred`)
                .then(resposta => resposta.json())
                .then(resposta => {
                    setCerto(true)
                    setProjetosFavoritos(resposta)
                })
                .catch(_ => {
                    setCerto(false)
                    setDados([])
                    setProjetosFavoritos([])
                })
        }
    }

    return (
        <>
            <Router>
                <NavBar />
                <Routes>
                    <Route exact path='/' element={<RetornoPesquisa certo={certo} dados={dados} setNome={setNome}/>} />
                    <Route path='/detalhes-usuario' element={<DetalhesUsuario dados={dados} certo={certo} />} />
                    <Route path='/projetos-favoritos' element={<Favoritos projetos={projetosFavoritos} />} />
                </Routes>
                <Footer />
             </Router>
        </>
    );
}
export default App;
