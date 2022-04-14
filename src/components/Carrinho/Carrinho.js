import axios from "axios";
import React from "react";
import { Main} from './styled'

class Carrinho extends React.Component {

 


    render() {
    const listarCarrinho = this.props.carrinho.map((service) => {
    return (
        <div>
            <p>{service.title}</p>
            <p>R${service.price}</p>
            <button onClick = {() => this.props.removerCarrinho(service) }>Remover</button>
        </div>
    )
   })


        return (
        <Main>

        {this.props.carrinho.length === 0 ? (
        <div>
            <h1>Carrinho Vazio</h1>
            <button onClick = {() => this.props.mudarTela("contratar")}>Voltar</button>
        </div> ) : (
        <div>
            <h1>Carrinho</h1>
            {listarCarrinho}
            <button onClick = {() => this.props.mudarTela("contratar")}>Voltar</button>
            <button onClick = {this.props.clearCarrinho}>Limpar o carrinho</button>
        </div>
        )}

        </Main>

        )
    }
}



export default Carrinho