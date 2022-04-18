import React from "react";
import { Main, Borda, Buttonvoltar,Buttonlimpar, Bordadois, Buttonremover} from './styled'


class Carrinho extends React.Component {
    // getTotalValue = () => {
    //     let totalValue = 0
    //     for(let services of this.props.services) {
    //       totalValue += services.jobClicado * services.price    
    //     }
    //     return console.log(totalValue)
    // }


    render() {
    const listarCarrinho = this.props.carrinho.map((service) => {
    return (
        <Bordadois>
            <b>Serviço:</b>
            <p>{service.title}</p>
            <b>Valor:</b>
            <p>R${service.price}</p>
            <Buttonremover>
            <button variant="outlined" color="secondary" onClick = {() => this.props.removerCarrinho(service) }>Remover</button>
            </Buttonremover>
     
        </Bordadois>
    )
   })


        return (
        <Main>

        {this.props.carrinho.length === 0 ? (
        <div>
            <h1>Carrinho Vazio</h1>
            <button variant="outlined" color="secondary" onClick = {() => this.props.mudarTela("contratar")}>Voltar</button>
        </div> ) : (
        <div>
            <Borda>
            <h1>Carrinho</h1>
            {listarCarrinho}
            </Borda>
            
            <Buttonvoltar>
            <button variant="outlined" color="secondary" onClick = {() => this.props.mudarTela("contratar")}>Voltar</button>
            </Buttonvoltar>

            <Buttonlimpar>
            <button variant="outlined" color="secondary" onClick = {this.props.clearCarrinho}>Limpar o carrinho</button>
            </Buttonlimpar>

            </div>
        )}

        </Main>

        )
    }
}



export default Carrinho