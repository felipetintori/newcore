import React from 'react'

import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="jumbotron">
            <h1 className="display-3">Bem vindo</h1>
            <p className="lead">Este é seu sistema de Cadastro de Clientes</p>
            <hr className="my-4" />
            <Link className="nav-link btn btn-primary" to="/cadastro-clientes">
                Cadastrar Cliente
            </Link>

        </div>
    )
}


export default Home;