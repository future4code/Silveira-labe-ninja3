import styled from "styled-components";

export const MainContainer = styled.div`
    display: grid;
    grid-row: 200px 1fr 200px;
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
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
`

export const ServiceCard = styled.div`
    border: 1px solid black;
    border-radius: 2px;
    margin: 20px 15px;
    background-color: #22262C;
    color: #F2F2F2;
    padding: 15px 0 10px 0;

    div:last-child {
        display: flex;
        justify-content: space-around;
    }
`

export const Descricao = styled.div`
    font-size: 0.8em;
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid grey;
`

export const InfosContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    p:first-child {
        font-size: 1.5em;
        font-weight: bolder;
    }

`