import React from 'react'
import Card from '../../components/card'
import ClienteService from '../../app/clienteService'
import { withRouter } from 'react-router-dom'
import ClientesTable from './clientesTable'

class ConsultaClientes extends React.Component {
    state = {
        clientes: []
    }

    constructor() {
        super()
        this.service = new ClienteService
    }

    componentDidMount() {
        const clientes = this.service.obterClientes();
        this.setState({ clientes })
    }

    preparaEditar = (cpf) => {
        console.log(cpf)
        this.props.history.push(`/cadastro-clientes/${cpf}`)
    }

    deletar = (cpf) => {
        if (window.confirm("Você realmente quer deletar o cliente?")) {
            const clientes = this.service.deletar(cpf)
            this.setState({ clientes })
        }


    }

    render() {
        return (
            <Card header="Consulta Clientes">
                <ClientesTable clientes={this.state.clientes} editarAction={this.preparaEditar} deletarAction={this.deletar} />
            </Card>
        )
    }
}

export default withRouter(ConsultaClientes)