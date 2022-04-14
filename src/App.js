import { render } from '@testing-library/react';
import React from 'react'
import Home from "./components/Home"
import PageCadastro from "./components/PageCadastro/PageCadastro"
import {ServicesList} from "./components/ServicesList/ServicesList"
import Carrinho from "./components/Carrinho/Carrinho"

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
				 />;
			case "carrinho":
				return <Carrinho mudarTela = {this.mudarTela}
				carrinho = {this.state.carrinho}
				removerCarrinho = {this.removerCarrinho}
				clearCarrinho = {this.clearCarrinho}
				/>;			
			default:
				return <Home/>;
		 }
	 };

	 mudarTela = (nomeDaTela) => {
		 this.setState ({mudarTela: nomeDaTela});
	};
     
	 addCarrinho = (job) => {
		 this.setState ({carrinho: [...this.state.carrinho,job]})
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
	}


	 render() {
		 console.log(this.state.carrinho)
		 return (
			<div>
				{this.selectPage()}
			</div>
		 )
	 }
}
