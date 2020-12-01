import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from './views/home'
import CadastroClientes from './views/clientes/cadastro'
import ConsultaClientes from './views/clientes/consulta'

export default () => {
    return (

        <Switch>
            <Route exact path="/cadastro-clientes/:cpf?" component={CadastroClientes} />
            <Route exact path="/consulta-clientes" component={ConsultaClientes} />
            <Route exact path="/" component={Home} />
        </Switch> 


    )
}