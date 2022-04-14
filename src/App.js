import styled from 'styled-components';
import React from 'react'
import Home from "./pages/Home/Home"
import PageCadastro from "./pages/PageCadastro/PageCadastro"
import {ServicesList} from "./pages/ServicesList/ServicesList"
import Carrinho from "./components/Carrinho/Carrinho"
import Detalhes from './components/Detalhes/Detalhes';
import { Header } from './components/Structure/Header';
import { Footer } from './components/Structure/Footer'; 
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
`

const MainContainer = styled.div`
	display: grid;
	grid-template-rows: 100px 1fr 50px;
`

const ContainerApp = styled.div`
	height: 90vh;
	background-color: #F2F2F2;
`

export default class App extends React.Component {
 	state = {
	 mudarTela: "home",
	 carrinho: [],
 	};

	 selectPage = () => {
		 switch (this.state.mudarTela){
			 			 case "home":
				 return <Home mudarTela = {this.mudarTela}/>;
			 case "cadastro":
				 return <PageCadastro/>;
			case "contratar":
		 		return <ServicesList 
				 mudarTela = {this.mudarTela}
				 addCarrinho = {this.addCarrinho}
				//  irParaDetalhes=
				 />;
			case "carrinho":
				return <Carrinho mudarTela = {this.mudarTela}
				carrinho = {this.state.carrinho}
				removerCarrinho = {this.removerCarrinho}
				clearCarrinho = {this.clearCarrinho}
				/>;
			case "detalhes":
				return <Detalhes 
				mudarTela={this.mudarTela}
				/>
			default:
				return <Home/>;
		 }
	 };

	 mudarTela = (nomeDaTela) => {
		 this.setState ({mudarTela: nomeDaTela});
	};
     
	 addCarrinho = (job) => {
		 this.setState ({carrinho: [...this.state.carrinho,job]})
		 alert("Serviço adicionado ao carrinho!");
	 };

	 removerCarrinho = (job) => {
		 if (window.confirm("Tem certeza que deseja remover este produto?")){
			const produtoRemovido = this.state.carrinho.filter((service)=> {
				return service.id !== job.id  
			}) 
			this.setState({carrinho: produtoRemovido})
		 }  
	  	}

	clearCarrinho = () => {
		this.setState({carrinho: []})
	};



	 render() {
		 return (
			<MainContainer>
			<GlobalStyle />

			<Header />
				<ContainerApp>{this.selectPage()}</ContainerApp>

			<Footer />
			</MainContainer>
		 )
	 }
}
