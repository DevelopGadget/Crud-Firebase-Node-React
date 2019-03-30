import React, { Component } from "react";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { Nombre: this.props.Nombre, Estadio: this.props.Estadio, UrlEstadio: this.props.UrlEstadio, UrlEscudo: this.props.UrlEscudo }
    }

    //Renderizo la vista
    render() {
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="Nombre" type="text" className="validate" required value={this.state.Nombre} onChange={(e) => this.setState({ Nombre: e.target.value })}></input>
                            <label for="Nombre" data-error="Campo Requerido" data-success="right">Nombre</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="Estadio" type="text" className="validate" required value={this.state.Estadio} onChange={(e) => this.setState({ Estadio: e.target.value })}></input>
                            <label for="Estadio" data-error="Campo Requerido" data-success="right">Estadio</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="UrlEstadio" type="url" className="validate" required value={this.state.UrlEstadio} onChange={(e) => this.setState({ UrlEstadio: e.target.value })}></input>
                            <label for="UrlEstadio" data-error="Campo Requerido" data-success="right">Url Estadio</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="UrlEscudo" type="url" className="validate" required value={this.state.UrlEscudo} onChange={(e) => this.setState({ UrlEscudo: e.target.value })}></input>
                            <label for="UrlEscudo" data-error="Campo Requerido" data-success="right">UrlEscudo</label>
                        </div>
                    </div>
                    <div className="row center-align">
                        <button class="waves-effect waves-light btn" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        );
    }
}