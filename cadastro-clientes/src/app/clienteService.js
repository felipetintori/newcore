const CLIENTES = '_CLIENTES';

export function ErrorValidacao(errors) {
    this.errors = errors
}

export default class ClienteService {

    validar = (cliente) => {
        const errors = []


        if (!cliente.nome) {
            errors.push('O campo nome é obrigatorio')
        }

        if (!cliente.cpf) {
            errors.push('O campo cpf é obrigatorio')
        }

        if (!cliente.renda || cliente.renda <= 0) {
            errors.push('O campo Renda Mensal deve ter um valor maior que 0')
        }

        if (!cliente.data) {
            errors.push('O campo Data de Nascimento é obrigatorio')
        }

        if (errors.length > 0) {
            throw new ErrorValidacao(errors)
        }
    }

    obterClientes = () => {
        const clientes = localStorage.getItem(CLIENTES)
        if (!clientes) {
            return [];
        }
        return JSON.parse(clientes)
    }

    obterIndex = (cpf) => {
        let index = null
        this.obterClientes().forEach((cliente, i) => {
            if (cliente.cpf === cpf) {
                index = i
            }
        })
        return index
    }

    deletar = (cpf) => {
        const index = this.obterIndex(cpf)
        if (index !== null) {
            const clientes = this.obterClientes()
            clientes.splice(index, 1)
            localStorage.setItem(CLIENTES, JSON.stringify(clientes))
            return clientes
        }
    }

    salvar = (cliente) => {
        this.validar(cliente)
        let clientes = localStorage.getItem(CLIENTES)

        if (!clientes) {
            clientes = []
        } else {
            clientes = JSON.parse(clientes)
        }

        const index = this.obterIndex(cliente.cpf)
        if (index === null) {
            clientes.push(cliente);
        } else {
            clientes[index] = cliente
        }



        localStorage.setItem(CLIENTES, JSON.stringify(clientes))
    }
}