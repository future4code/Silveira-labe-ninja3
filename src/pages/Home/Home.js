import React from 'react';
import { CardHome, CardContratar, CardCadastro } from "./styled";
import {} from "@material-ui/icons";
import { MyButton } from '../../components/Structure/styled';
import imgcadastro from '../../assets/imgs/cadastro.png'
import imgcontatar from '../../assets/imgs/constratar2.png'

export default class Home extends React.Component {
    

    
    render() {
        return(
            <CardHome>

                <CardContratar>
                <img src={imgcontatar}/>
                <MyButton variant="outlined" color="secondary" onClick={() => this.props.mudarTela("contratar")}>
                    Contrate um ninja
                </MyButton>
                </CardContratar>
                
                <CardCadastro>
                <img src={imgcadastro}/>
                <MyButton variant="outlined" color="secondary" onClick={() => this.props.mudarTela("cadastro")}>
                Seja um ninja
                </MyButton>
                </CardCadastro>

            </CardHome>
        )
    }
}
