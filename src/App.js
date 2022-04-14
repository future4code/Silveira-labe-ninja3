import { render } from '@testing-library/react';
import React from 'react'
import Home from "./components/Home"


export default class App extends React.Component {
 	state = {
	 mudarTela: "home",
 	};

	 selecPage = () => {
		 switch (this.state.mudarTela){
			 case "home":
				 return <Home/>;
			//  case "cadastro":
			// 	 return <PageCadastro/>;
			// case "contratar":
		 	// 	return <Contrata/>;
			default:
				return <Home/>;
		 }
	 };

	 mudarTela = (nomeDaTela) => {
		 this.setState ({mudarTela: nomeDaTela});
	 };

	 render() {
		 return (
			<div>
				{this.selecPage()}
			</div>
		 )
	 }
}