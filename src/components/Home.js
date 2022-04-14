import React from 'react';

export default class Home extends React.Component {
    render() {
        return(
            <>
            <button onClick={() => this.props.mudarTela("cadastro")}>
                Quer ser um ninja
            </button>
            <button onClick={() => this.props.mudarTela("ccontratar")}>
                Preciso de um ninja
            </button>
            </>
        )
    }
}