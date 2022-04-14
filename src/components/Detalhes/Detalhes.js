import React from "react";
import styledComponents from "styled-components";
import axios from "axios";
import { BASE_URL, HEADER } from "../../constants/requests";

class Detalhes extends React.Component{
    state={
        nome:"",
        prazo:"",
        descricao:"",
        pagamento:""
    };

    buscarDetalhes = () =>{
        axios.get(`${BASE_URL}/jobs/${this.props.servicoId}`, HEADER
        ).then(res => {console.log(res)
            this.setState({servico: res.data.result.servico})
        }).catch(err=>{
            console.log(err)
        });
    };

    render(){
        return(
            <div>
                <h4>{this.props.service.title}</h4>
                <p>{this.props.service.description}</p>
                <p>{this.props.convertDate(this.props.service.dueDate)}</p>
                <p>{this.props.service.price}</p>
                <p>{this.props.service.paymentMethods}</p>

                <button onClick={() => this.props.mudarTela("detalhes")}>Voltar</button>
            </div>
        )
    }

}
export default Detalhes;