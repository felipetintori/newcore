import React from 'react';

import { MdModeEdit, MdDelete } from "react-icons/md";

export default (props) => (
    <table className="table" id="clientesTable">
    <thead>
        <tr>
            <th>Nome</th>
            <th>CPF</th> 
            <th>Renda Mensal</th>
            <th>Data de Nascimento</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        {props.clientes.map( (cliente, index) => {
                return(
                    <tr key={index}>
                        <td>{cliente.nome}</td>
                        <td>{cliente.cpf}</td>
                        <td>R$ {cliente.renda}</td>
                        <td>{cliente.data}</td>
                        <td>
                            <button className="btn" onClick={() => props.editarAction(cliente.cpf)}><MdModeEdit/></button>
                            <button className="btn" onClick={() => props.deletarAction(cliente.cpf)}><MdDelete/></button>
                        </td>
                    </tr>
                )
            })
        }
    </tbody>
</table>
)