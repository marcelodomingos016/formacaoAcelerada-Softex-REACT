import React from 'react'

export default function Dados(props) {
    return (
        <section>
            <p>Nome:{props.nome}</p>
            <p>Idade:{props.idade}</p>
            <p>Sexo:{props.sexo}</p>
        </section>
    )
}