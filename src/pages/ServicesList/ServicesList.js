import axios from "axios";
import React from "react";
import { BASE_URL, HEADER } from "../../constants/requests";
import Detalhes from "../../components/Detalhes/Detalhes";
import { MainContainer, StoreContainer, InputContainer, ServicesContainer , ServiceCard } from "./styled";
// import Carrinho from "./components/Carrinho/Carrinho"

export class ServicesList extends React.Component {
    state = {
        services: [],
        filteredServices: [],
        telaAtual: "contratar",
        jobClicado: [],
        inputMaximumValue: "",
        inputMinimumValue: "",
        inputSearch: "",
        selectValue: "title"
    }

    componentDidMount() {
        this.getAllJobs();
        this.filterServices();
    }

    onChangeMaximumValue = (ev) => {
        this.setState({inputMaximumValue: ev.target.value});
    }

    onChangeMinimumValue = (ev) => {
        this.setState({inputMinimumValue: ev.target.value});
    }

    onChangeSearch = (ev) => {
        this.setState({inputSearch: ev.target.value});
    }

    onChangeSelect = (ev) => {
        this.setState({selectValue: ev.target.value});
    }

    getAllJobs = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/jobs`, HEADER);
            this.setState({services: response.data.jobs});
        } catch {
            alert("Não foi possível listar os serviços, tente novamente.");
        }
    }

    filterServices = () => {
        const filteredList = this.state.services.filter((service) => {
            return this.state.inputMinimumValue === "" ||
            service.price >= Number(this.state.inputMinimumValue);
        }).filter((service) => {
            return this.state.inputMaximumValue === "" ||
            service.price <= Number(this.state.inputMaximumValue);
        }).filter((service) => {
            return (
                service.title.toLowerCase().includes(this.state.inputSearch.toLowerCase()) ||
                service.description.toLowerCase().includes(this.state.inputSearch.toLowerCase())
            )
        }).sort((a, b) => {
            switch(this.state.selectValue) {
                case "Título":
                    return a.title.localeCompare(b.title);
                case "Prazo":
                    return a.dueDate.localeCompare(b.dueDate);
                case "Menor Valor":
                    return a.price - b.price;
                case "Maior Valor":
                    return b.price - a.price;
            }
        })

        return filteredList;
    }

    convertDate = (date) => {
        const day = date.substring(8, 10);
        const month = date.substring(5, 7);
        const year = date.substring(0, 4);
        return `${day}/${month}/${year}`;
    }

    changeDetails = (service) => {
        if(this.state.telaAtual === "contratar") {
            this.setState({
                telaAtual: "detalhes",
                jobClicado: service
            });
        } else {
            this.setState({
                telaAtual: "contratar",
                jobClicado: []
            })
        }
    }

    render() {
        const filteredServices = this.filterServices();

        const renderServices = filteredServices.map((service) => {
            return (
                <ServiceCard>
                    <div>
                        <p>{service.title.toUpperCase()}</p>
                        <p><strong>Valor:</strong> R$ {service.price}</p>
                        <p><strong>Prazo:</strong> {this.convertDate(service.dueDate)}</p>
                    </div>

                    <div>
                        <button onClick={() => this.changeDetails(service)}>Detalhes</button>
                        <button onClick = { () => this.props.addCarrinho(service)}>Adicionar ao carrinho</button>
                    </div>
                </ServiceCard>
            )
        })

        return (
            <MainContainer>

                {this.state.telaAtual === "contratar" ? (
                    <StoreContainer>

                    <InputContainer>
                        <input
                        type="number"
                        placeholder="Valor Máximo"
                        value={this.state.inputMaximumValue}
                        onChange={this.onChangeMaximumValue} />

                        <input 
                        type="number"
                        placeholder="Valor Mínimo"
                        value={this.state.inputMinimumValue} 
                        onChange={this.onChangeMinimumValue} />

                        <input
                        type="search"
                        placeholder="Título ou descrição"
                        value={this.state.inputSearch} 
                        onChange={this.onChangeSearch} />

                        <select value={this.state.selectValue} onChange={this.onChangeSelect}>
                            <option>Título</option>
                            <option>Prazo</option>
                            <option>Menor Valor</option>
                            <option>Maior Valor</option>
                        </select>

                        <button onClick={() => this.props.mudarTela("carrinho")}>
                            Carrinho</button>

                    </InputContainer>

                    <ServicesContainer>
                        {renderServices}
                    </ServicesContainer>

                </StoreContainer>
                ) : (
                    <Detalhes 
                    service={this.state.jobClicado}
                    convertDate={this.convertDate}
                    mudarTela={this.changeDetails}
                    />
                )}

            </MainContainer>
        )
    }
}

