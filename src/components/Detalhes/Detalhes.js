import React from "react";
import axios from "axios";
import { BASE_URL, HEADER } from "../../constants/requests";
import { ContainerDetalhes, ContainerMaster, Descricao, Data, Valor, Pagamento, Lindo } from "./styled";
import { } from "@material-ui/icons";
import { MyButton } from "../Structure/styled";


class Detalhes extends React.Component {
    state = {
        nome: "",
        prazo: "",
        descricao: "",
        pagamento: ""
    };

    buscarDetalhes = () => {
        axios.get(`${BASE_URL}/jobs/${this.props.servicoId}`, HEADER
        ).then(res => {
            console.log(res)
            this.setState({ servico: res.data.result.servico })
        }).catch(err => {
            console.log(err)
        });
    };

    render() {
        return (
            <div>
                <ContainerMaster>
                    <ContainerDetalhes>
                        <Lindo>
                            <h2>{this.props.service.title}</h2>
                            <Descricao>
                                <b>Descrição: </b>
                                <p>{this.props.service.description}</p>
                            </Descricao>
                            <Data>
                                <b>Data do serviço: </b>
                                <p>{this.props.convertDate(this.props.service.dueDate)}</p>
                            </Data>
                            <Valor>
                                <b>Valor cobrado: </b>
                                <p>{this.props.service.price}</p>
                            </Valor>
                            <Pagamento>
                                {/* quero fazer uma lista com os métodos de pagamento */}
                                <b>Métodos de pagamento: </b>
                                <ul><li>{this.props.service.paymentMethods}</li></ul>
                            </Pagamento>
                            <MyButton variant="outlined" color="secondary" onClick={() => this.props.mudarTela("detalhes")}>Voltar</MyButton>
                        </Lindo>
                    </ContainerDetalhes>
                </ContainerMaster>
            </div>
        )
    }

}
export default Detalhes;