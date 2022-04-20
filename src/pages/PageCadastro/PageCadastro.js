import React from "react";
import axios from "axios"
import styled from "styled-components"
import { BASE_URL, HEADER } from '../../constants/requests'


const PageContainer = styled.div`
    display: flex;
    justify-content:center;
`
const CadastroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    margin:10px;
    width: 25vw;
    border: 1px solid black;
    border-radius: 12px;

`
const Title = styled.h1`
    text-align: center;
`
const InputPadrao = styled.input`
    margin: 5px;
    padding: 5px;
`
const BotaoPadrao = styled.button`
    margin: 5px;
    padding: 5px; 
`
const SelectPadrao = styled.select`
    margin: 5px;
    padding: 5px;
`

export default class PageCadastro extends React.Component{

    state = {
        title:"",
        description:"",
        price:"",
        paymentMethods:[],
        dueDate:""
    }
    onChangeTitle = e =>{
        this.setState({title: e.target.value})
    }
    onChangeDescription = e =>{
        this.setState({description: e.target.value})
    }
    onChangePrice = e =>{
        this.setState({price: e.target.value})
    }
    onChangeDate = e =>{
        this.setState({dueDate: e.target.value})
    }
    onChangePayment = e =>{
        let value = Array.from(e.target.selectedOptions, option => option.value)
        this.setState({paymentMethods: value})
    }
    createJob = () => {
        const url = `${BASE_URL}/jobs`
        
        const body = {
            title: this.state.title,
            description:this.state.description,
            price:Number(this.state.price),
            paymentMethods:this.state.paymentMethods,
            dueDate:this.state.dueDate
        }
        axios.post(url,body,HEADER)
        .then((resp) =>{
            console.log(resp)
            alert("Serviço cadastrado com sucesso")
            this.setState({title: "",description:"",price:"",paymentMethods:[],dueDate:""})
        })
        .catch((err)=>{
            console.log(err.response.data.message)
        })
    }

    render(){
        return(
            <PageContainer>
                <CadastroContainer>
                    <Title>Cadastre o seu serviço</Title>
                    <InputPadrao
                    placeholder="Titulo"
                    type="text"
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                    />
                    <InputPadrao
                    placeholder="Descrição"
                    type="text"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    />
                    <InputPadrao
                    placeholder="Preço"
                    type="number"
                    value={this.state.price}
                    onChange={this.onChangePrice}
                    />
                    <SelectPadrao multiple value={this.state.paymentMethods} onChange={this.onChangePayment}>
                        <option>Cartão de Crédito</option>
                        <option>Cartao de Débito</option>
                        <option>Boleto</option>
                        <option>Pix</option>
                        <option>Paypal</option>
                    </SelectPadrao>
                    <InputPadrao
                    placeholder="Data do serviço"
                    type="date"
                    value={this.state.dueDate}
                    onChange={this.onChangeDate}
                    />
                    <BotaoPadrao color="secondary" variant="contained" onClick={this.createJob}>Cadastrar Serviço</BotaoPadrao>
                </CadastroContainer>


            </PageContainer>
        )
    }
}