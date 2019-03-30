import React, { Component } from "react";
import { Post } from '../Services/Equipos.service';

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = { Nombre: this.props.Nombre, Estadio: this.props.Estadio, UrlEstadio: this.props.UrlEstadio, UrlEscudo: this.props.UrlEscudo }
    }

    async SubmitButton() {
        if (this.state.Nombre != '' && this.state.Estadio != '' && this.state.UrlEstadio != '' && this.state.UrlEscudo != '') {
            if (this.props.Agregar) {
                await Post({ Nombre: this.state.Nombre.toUpperCase(), Estadio: this.state.Estadio.toUpperCase(), UrlEstadio: this.state.UrlEstadio, UrlEscudo: this.state.UrlEscudo }).then(value => {
                    value.json()
                        .then(res => this.props.Sweet.fire('Agregado', 'Actualiza para ver cambios', 'success'))
                        .catch(err => this.props.Sweet.fire('Error', err, 'error'));
                }).catch(err => {
                    this.props.Sweet.fire('Error', err + '', 'error');
                });
            } else {

            }
        } else {
            this.props.Sweet.fire('Error', 'Complete los campos', 'error');
        }
    }

    //Renderizo la vista
    render() {
        return (
            <div className="row">
                <div className="col s12 left-alert" method="POST">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="Nombre" type="text" className="validate" required value={this.state.Nombre} onChange={(e) => this.setState({ Nombre: e.target.value })}></input>
                            <label htmlFor="Nombre" data-error="Campo Requerido" data-success="Correcto">Nombre</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="Estadio" type="text" className="validate" required value={this.state.Estadio} onChange={(e) => this.setState({ Estadio: e.target.value })}></input>
                            <label htmlFor="Estadio" data-error="Campo Requerido" data-success="Correcto">Estadio</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="UrlEstadio" type="url" className="validate" required value={this.state.UrlEstadio} onChange={(e) => this.setState({ UrlEstadio: e.target.value })}></input>
                            <label htmlFor="UrlEstadio" data-error="Campo Requerido" data-success="Correcto">Url Estadio</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="UrlEscudo" type="url" className="validate" required value={this.state.UrlEscudo} onChange={(e) => this.setState({ UrlEscudo: e.target.value })}></input>
                            <label htmlFor="UrlEscudo" data-error="Campo Requerido" data-success="Correcto">UrlEscudo</label>
                        </div>
                    </div>
                    <div className="row center-align">
                        <button className="waves-effect waves-light btn" type="submit" onClick={this.SubmitButton.bind(this)}>Enviar</button>
                    </div>
                </div>
            </div>
        );
    }
}