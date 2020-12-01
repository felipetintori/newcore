import React from 'react';
import Card from '../../components/card'

import ClienteService from '../../app/clienteService'
import {withRouter} from 'react-router-dom'
import InputMask from "react-input-mask";

const estadoInicial = {
    nome: '',
    cpf: '',
    data: '',
    renda: 0,
    sucesso: false,
    errors: [],
    atualizando: false
}

class CadastroCliente extends React.Component {

    state = estadoInicial

    constructor() {
        super()
        this.service = new ClienteService()
    }

    onChange = (event) => {
        const valor = event.target.value
        const nomeDoCampo = event.target.name
        this.setState({ [nomeDoCampo]: valor })
    }

    onSubmit = (event) => {
        event.preventDefault();
        const cliente = {
            nome: this.state.nome,
            cpf: this.state.cpf,
            data: this.state.data,
            renda: this.state.renda
        }

        try {
            this.service.salvar(cliente)
            this.limpaCampos()
            this.setState({ sucesso: true })
        } catch (erro) {
           
            const errors = erro.errors
            this.setState({errors : erro.errors})
            
        }

        console.log(this.state.errors)
       

    }

    limpaCampos = () => {
        this.setState(estadoInicial)
    }

    componentDidMount(){
        const cpf = this.props.match.params.cpf;

        if(cpf){
           const resultado = this.service.obterClientes().filter(cliente => cliente.cpf === cpf)
            if(resultado.length === 1){
                const clienteEncontrado = resultado[0]
                this.setState({...clienteEncontrado, atualizando: true})

            }
        }
    }
    render() {
        return (
            <Card header={this.state.atualizando ? 'Atualização de Cliente' : 'Cadastro de Cliente'}>
                
                <form id="frmCliente" onSubmit={this.onSubmit}>
                        {
                            this.state.sucesso ?
                                (
                                    <div className="alert alert-dismissible alert-success">
                                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                                        <strong>Bem feito</strong> Cadastro Realizado com Sucesso
                                    </div>
                                )
                                :
                                (
                                    <>
                                    </>
                                )
                        }

                        {
                            this.state.errors.length > 0 && 
                                this.state.errors.map( msg => {
                                    return(
                                        <div className="alert alert-dismissible alert-danger">
                                            <button type="button" className="close" data-dismiss="alert">&times;</button>
                                            <strong>Erro</strong> {msg}
                                        </div>
                                    )
                                })
                        }

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Nome : *</label>
                                    <input type="text" onChange={this.onChange} name="nome" value={this.state.nome} className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>CPF : *</label>                                    
                                    <InputMask type="text" onChange={this.onChange} name="cpf" value={this.state.cpf} className="form-control" disabled={this.state.atualizando} mask="999-999-999-99" ></InputMask>
                                </div>
                            </div>
                        </div>
                       
                        <div className="row">
                        <div className="col-md-6">
                                <div className="form-group">
                                    <label>Data de Nascimento:</label>
                                    
                                    <InputMask mask="99/99/9999" type="text" name="data" onChange={this.onChange} value={this.state.data} className="form-control"  ></InputMask>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Renda Mensal  : *</label>
                                    <input type="text" name="renda" onChange={this.onChange} value={this.state.renda} className="form-control" />
                                    
                                </div>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col-md-1">
                                <button type="submit" className="btn btn-success">
                                    {this.state.atualizando ? 'Atualizar' : 'Salvar'}
                                </button>
                            </div>
                            <div className="col-md-1">
                                <button className="btn btn-primary" onClick={this.limpaCampos}>Limpar</button>
                            </div>
                        </div>
                    </form>
                </Card>
        )
    }
}

export default withRouter(CadastroCliente) 