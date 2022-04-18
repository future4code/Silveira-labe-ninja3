import axios from "axios";
import React from "react";
import { BASE_URL, HEADER } from "../../constants/requests";
import Detalhes from "../../components/Detalhes/Detalhes";
import { MainContainer, StoreContainer, InputContainer, ServicesContainer , ServiceCard, Descricao, InfosContainer } from "./styled";
import { Button, TextField } from "@material-ui/core";

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
                    <InfosContainer>
                        <p>{service.title.toUpperCase()}</p>
                        <p><strong>R$</strong>{service.price}</p>
                    </InfosContainer>
                    
                    <Descricao>
                        <p>{service.description}</p>
                        <p><strong>Prazo:</strong> {this.convertDate(service.dueDate)}</p>
                    </Descricao>

                    <div>
                        <Button color="primary" size="small" onClick={() => this.changeDetails(service)}>Detalhes</Button>
                        <Button color="primary" size="small" onClick = { () => this.props.addCarrinho(service)}>Adicionar ao carrinho</Button>
                    </div>
                </ServiceCard>
            )
        })

        return (
            <MainContainer>

                {this.state.telaAtual === "contratar" ? (
                    <StoreContainer>

                    <InputContainer>
                        <TextField 
                        variant="filled"
                        size="small"
                        type="number"
                        label="Valor Máximo"
                        value={this.state.inputMaximumValue}
                        onChange={this.onChangeMaximumValue} />

                        <TextField 
                        variant="filled"
                        size="small"
                        type="number"
                        label="Valor Mínimo"
                        value={this.state.inputMinimumValue} 
                        onChange={this.onChangeMinimumValue} />

                        <TextField
                        variant="filled"
                        size="small"
                        label="Título ou descrição"
                        value={this.state.inputSearch} 
                        onChange={this.onChangeSearch} />

                        <select value={this.state.selectValue} onChange={this.onChangeSelect}>
                            <option>Título</option>
                            <option>Prazo</option>
                            <option>Menor Valor</option>
                            <option>Maior Valor</option>
                        </select>

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

