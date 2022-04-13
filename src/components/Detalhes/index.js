import React from "react";
import styledComponents from "styled-components";
import axios from "axios";
//Fazer o import do cartão de serviços
import {} from "../../constants";

class Detalhe extends React.Component{
    state={
        servico:[],
        nome:"",
        prazo:"",
        descricao:"",
        pagamento:""
    };

    componentDidMount = () =>{
        this.buscarservico()
    };

    buscarDetalhes = () =>{
        axios.get(`${baseUrl}/jobs/${this.props.servicoId}`, HEADER
        ).then(res => {console.log(res)
            this.setState({servico: res.data.result.servico})
        }).catch(err=>{
            console.log(err)
        });
    };
    render(){
        const servicos = this.state.servico.map(servico=>{
            return <ServicoCard
                key = {servico.id}
                servicoNome={servico.name}
                servicoPrazo={servico.prazo}
                servicoDescricao={servico.descricao}
                servicoPagamento={servico.pagamento}
                />
        })
        return(
            <DetalheContainer>
                {servicos}
            </DetalheContainer>
        )
    }

}
export default Detalhe