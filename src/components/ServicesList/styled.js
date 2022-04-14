import styled from "styled-components";

export const MainContainer = styled.div`
    display: grid;
    grid-row: 200px 1fr 200px;
`

export const Header = styled.div`
    border: 1px solid black;
    text-align: center;
`

export const StoreContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
`

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

export const ServicesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
`

export const ServiceCard = styled.div`
    border: 1px solid black;
    margin: 20px 20px;

    div:last-child {
        display: flex;
        justify-content: space-around;
    }
`

export const Footer = styled.div`
    border: 1px solid black;
    text-align: center;
`