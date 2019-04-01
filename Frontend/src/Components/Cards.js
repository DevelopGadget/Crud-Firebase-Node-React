import React, { Component } from "react";
import { Delete } from "../Services/Equipos.service";
import Swal from 'sweetalert2';
import Content from 'sweetalert2-react-content';
import Form from './Form';

export default class Cards extends Component {

    constructor(props) {
        super(props);
    }

    SwalReact = Content(Swal);

    //Actualizar Equipo
    async PutTeam() {
        this.SwalReact.fire(
            {
                title: 'Actualizar Equipo',
                html: <Form Nombre={this.props.Nombre} Estadio={this.props.Estadio} UrlEscudo={this.props.UrlEscudo} UrlEstadio={this.props.UrlEstadio} Agregar={false} Sweet={Swal} Id={this.props.Id}></Form>,
                showConfirmButton: false,
                showCloseButton: true
            }
        );
    }

    //Eliminar un equipo
    async DeleteTeam() {
        await Swal.fire(
            {
                title: '¿Estas seguro de eliminar este equipo?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'Cerrar'
            }
        ).then(async value => {
            if (value.value) {
                await Delete(this.props.Id).then(value => {
                    value.Status == 200 ? Swal.fire('Eliminado', 'Actualiza para ver cambios', 'success') : Swal('Error', 'Ha ocurrido un error vuelva a recargar', 'error')
                }).catch(err => {
                    Swal.fire('Error', err.Message, 'error');
                });
            }
        });
    }

    render() {
        return (
            <div className="col center-align">
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={this.props.UrlEstadio} />
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">
                            {this.props.Nombre}
                            <i className="material-icons right">more_vert</i>
                        </span>
                    </div>
                    <div className="card-action">
                        <a className="waves-effect waves-light btn-small blue-text text-accent-4"onClick={this.PutTeam.bind(this)}>Editar</a>
                        <a className="waves-effect waves-light btn-small red-text text-accent-4" onClick={this.DeleteTeam.bind(this)}>Eliminar</a>
                    </div>
                    <div className="card-reveal center-align">
                        <span className="card-title grey-text text-darken-4">
                            <i className="material-icons right">close</i>
                        </span>
                        <div className="card-image waves-effect waves-block waves-light">
                            <img src={this.props.UrlEscudo} />
                        </div>
                        <span className="grey-text text-darken-4">
                            Nombre: {this.props.Nombre}
                            <br />
                            Id: {this.props.Id}
                            <br />
                            Estadio: {this.props.Estadio}
                        </span>
                    </div>
                </div>
            </div>
        );
    }

}