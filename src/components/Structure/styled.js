import styled from "styled-components";

// ------------- HEADER -------------

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid black;
    background-color: #22262c;

    h1 {
        color: #A60303;
        position: relative;
        top: 0.8em;
    }

    img {
        width: 125px;
    }

    Button {
        margin-right: 20px;
    }
`

export const TituloContainer = styled.div`
    display: flex;
`

// ------------- FOOTER -------------

export const ContainerFooter = styled.div`
    background-color: #0e141b;
    border: 1px solid black;

    img {
        width: 25px;
    }
`