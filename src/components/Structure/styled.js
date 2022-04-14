import styled from "styled-components";
import Button from '@material-ui/core/Button';
import { WidgetsSharp } from "@material-ui/icons";

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
`

export const TituloContainer = styled.div`
    display: flex;
`

export const MyButton = styled(Button) ({
    height: "2em",
    marginRight: "5px"
});


// ------------- FOOTER -------------

export const ContainerFooter = styled.div`
    background-color: #0e141b;
    border: 1px solid black;

    img {
        width: 25px;
    }
`