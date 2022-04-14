import React from "react";
import logo from "../../assets/imgs/logo.png"
import { HeaderContainer, TituloContainer } from "./styled";
import { Home, ShoppingCart } from "@material-ui/icons";
import { MyButton } from "./styled";

export function Header(props) {
    return (
        <HeaderContainer>
            <TituloContainer>
                <img src={logo} />
                <h1>LabeNinjas</h1>
            </TituloContainer>
            
            <div>
                <MyButton variant="outlined" color="secondary" startIcon={<Home />}>Home</MyButton>
                <MyButton variant="outlined" color="secondary" startIcon={<ShoppingCart />}>Carrinho</MyButton>
            </div>
        </HeaderContainer>
    )
}