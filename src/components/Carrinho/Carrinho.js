import axios from "axios";
import React from "react";
import { Main, Borda, Buttonvoltar,Buttonlimpar, Bordadois, Buttonremover} from './styled'
import { MyButton } from "../Structure/styled";


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
            <MyButton variant="outlined" color="secondary" onClick = {() => this.props.removerCarrinho(service) }>Remover</MyButton>
            </Buttonremover>
     
        </Bordadois>
    )
   })


        return (
        <Main>

        {this.props.carrinho.length === 0 ? (
        <div>
            <h1>Carrinho Vazio</h1>
            <MyButton variant="outlined" color="secondary" onClick = {() => this.props.mudarTela("contratar")}>Voltar</MyButton>
        </div> ) : (
        <div>
            <Borda>
            <h1>Carrinho</h1>
            {listarCarrinho}
            </Borda>
            
            <Buttonvoltar>
            <MyButton variant="outlined" color="secondary" onClick = {() => this.props.mudarTela("contratar")}>Voltar</MyButton>
            </Buttonvoltar>

            <Buttonlimpar>
            <MyButton variant="outlined" color="secondary" onClick = {this.props.clearCarrinho}>Limpar o carrinho</MyButton>
            </Buttonlimpar>

            </div>
        )}

        </Main>

        )
    }
}



export default Carrinho