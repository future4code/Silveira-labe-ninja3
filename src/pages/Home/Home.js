import React from 'react';
import { CardHome, CardContratar, CardCadastro } from "./styled";
import {} from "@material-ui/icons";
import imgcadastro from '../../assets/imgs/cadastro.png'
import imgcontatar from '../../assets/imgs/constratar2.png'

export default class Home extends React.Component {
    

    
    render() {
        return(
            <CardHome>

                <CardContratar>
                <img src={imgcontatar} alt="contratar"/>
                <button variant="outlined" color="secondary" onClick={() => this.props.mudarTela("contratar")}>
                    Contrate um ninja
                </button>
                </CardContratar>
                
                <CardCadastro>
                <img src={imgcadastro} alt="cadastrar"/>
                <button variant="outlined" color="secondary" onClick={() => this.props.mudarTela("cadastro")}>
                Seja um ninja
                </button>
                </CardCadastro>

            </CardHome>
        )
    }
}
