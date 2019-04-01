import React, { Component } from "react";
import { Get, Delete } from "../Services/Equipos.service";
import Swal from 'sweetalert2';
import Content from 'sweetalert2-react-content';
import Form from './Form';
import Card from './Cards';

//Componente principal
class App extends Component {

  SwalReact = Content(Swal);

  constructor(props) {
    super(props);
    this.state = { Load: false, Teams: [] };
  }

  //Agregar equipos modal
  AddTeam() {
    this.SwalReact.fire(
      {
        title: 'Agregar Equipo',
        html: <Form Nombre='' Estadio='' UrlEscudo='' UrlEstadio='' Agregar={true} Sweet={Swal}></Form>,
        showConfirmButton: false,
        showCloseButton: true
      }
    );
  }

  //Eliminar un equipo
  async DeleteTeam(id) {
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
        await Delete(id).then(value => {
          Swal.fire('Eliminado', 'Actualiza para ver cambios', 'success');
        }).catch(err => {
          Swal.fire('Error', err, 'error');
        });
      }
    });
  }

  //Metodo donde se obtiene todo
  async GetAll() {
    await Get().then(Docs => {
      Docs.Status == 200 ? this.setState({ Teams: Docs.Message }) : Swal('Error', 'Ha ocurrido un error vuelva a recargar', 'error');
    });
  }

  //Obtengo todos los valores
  async componentWillMount() {
    await this.GetAll();
  }

  //Renderizo la vista
  render() {
    return (
      <div>
        <nav className="navbar-fixed grey darken-4">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo left Titulo">
              RegeTeam
            </a>
            <ul className="right">
              <li>
                <a onClick={this.Hola}>
                  <i className="material-icons" onClick={this.AddTeam.bind(this)}>add</i>
                </a>
              </li>
              <li>
                <a onClick={async () => await this.GetAll()}>
                  <i className="material-icons">update</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container center-align">
          <div className="row center-align">
            {this.state.Teams.map((item, i) => {
              return (
                <Card Nombre={item.Nombre} Estadio={item.Estadio} UrlEscudo={item.UrlEscudo} UrlEstadio={item.UrlEstadio} Id={item.Id} key={i} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
