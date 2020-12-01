import React from 'react'

import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <header>
            <div className="logo">
                <img src={require('./../assets/img/logo.png')} />
            </div>
            <div className="menu">
                <ul className="navbar-nav">

                    <li className="nav-item">
                        <Link className="nav-link" to="/cadastro-clientes">
                            Cadastro
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/consulta-clientes">
                            Consulta
                        </Link>
                    </li>
                </ul>

            </div>
        </header>
    )

}

export default Navbar