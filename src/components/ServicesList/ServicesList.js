import axios from "axios";
import React from "react";
import { BASE_URL, HEADER } from "../../constants/requests";
import { MainContainer, Header, Footer, StoreContainer, InputContainer, ServicesContainer , ServiceCard } from "./styled";

export class ServicesList extends React.Component {
    state = {
        services: [],
        filteredServices: [],
        inputMaximumValue: "",
        inputMinimumValue: "",
        inputSearch: "",
        selectValue: "title"
    }

    componentDidMount() {
        this.getAllJobs();
        this.filterServices();
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if(
    //         this.state.inputMinimumValue !== prevState.inputMinimumValue ||
    //         this.state.inputMaximumValue !== prevState.inputMaximumValue ||
    //         this.state.inputSearch !== prevState.inputSearch ||
    //         this.state.selectValue !== prevState.selectValue
    //     ) {
    //         this.filterServices();
    //     }
    // }

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
                        <button>Detalhes</button>
                        <button>Adicionar ao carrinho</button>
                    </div>
                </ServiceCard>
            )
        })

        return (
            <MainContainer>
                <Header>
                    <p>header</p>
                </Header>


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
                    </InputContainer>

                    <ServicesContainer>
                        {renderServices}
                    </ServicesContainer>

                </StoreContainer>

                <Footer>
                    <p>footer</p>
                </Footer>
            </MainContainer>
        )
    }
}

