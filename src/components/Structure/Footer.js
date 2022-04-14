import React from "react";
import { ContainerFooter } from "./styled";
import facebookLogo from "../../assets/imgs/facebook.png";
import instagramLogo from "../../assets/imgs/instagram.png";
import twitterLogo from "../../assets/imgs/twitter.png";
import emailLogo from "../../assets/imgs/email.png"; 
import githubLogo from "../../assets/imgs/github.png"; 

export function Footer() {
    return (
        <ContainerFooter>

            <img src={facebookLogo} />
            <img src={instagramLogo} />
            <img src={twitterLogo} />
            <img src={emailLogo} />
            <img src={githubLogo} />

            <p>@2022 - Todos os direitos reservados</p>

        </ContainerFooter>
    );
}