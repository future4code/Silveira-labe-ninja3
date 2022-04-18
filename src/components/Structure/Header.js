import React from "react";
import logo from "../../assets/imgs/logo.png"
import { HeaderContainer, TituloContainer } from "./styled";
import { Home, ShoppingCart } from "@material-ui/icons";
import { Button, Box } from "@material-ui/core";

export function Header(props) {
    return (
        <HeaderContainer>
            <TituloContainer>
                <img src={logo} />
                <h1>LabeNinjas</h1>
            </TituloContainer>
            
            <div>
                
                <Button
                variant="outlined" 
                color="primary" 
                startIcon={<Home />}
                size="small"
                onClick={() => props.mudarTela("home")}>
                    Home
                </Button>

                <Button 
                variant="outlined" 
                color="primary" 
                startIcon={<ShoppingCart />}
                size="small"
                onClick={() => props.mudarTela("carrinho")}>
                    Carrinho
                </Button>

            </div>
        </HeaderContainer>
    )
}