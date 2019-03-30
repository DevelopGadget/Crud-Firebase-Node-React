import React, { Component } from "react";
import { Get, Delete } from "../Services/Equipos.service";
import Swal from 'sweetalert2';

//Componente principal
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { Load: false, Teams: [] };
  }

  Hola() {
    console.log("Hola Mundo");
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
      this.setState({ Teams: Docs });
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
                  <i className="material-icons">add</i>
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
                <div className="col center-align" key={i}>
                  <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" src={item.UrlEstadio} />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator grey-text text-darken-4">
                        {item.Nombre}
                        <i className="material-icons right">more_vert</i>
                      </span>
                    </div>
                    <div className="card-action">
                      <a className="waves-effect waves-light btn-small blue-text text-accent-4">
                        Editar
                      </a>
                      <a className="waves-effect waves-light btn-small red-text text-accent-4" onClick={this.DeleteTeam.bind(this, item.Id)}>
                        Eliminar
                      </a>
                    </div>
                    <div className="card-reveal center-align">
                      <span className="card-title grey-text text-darken-4">
                        <i className="material-icons right">close</i>
                      </span>
                      <div className="card-image waves-effect waves-block waves-light">
                        <img src={item.UrlEscudo} />
                      </div>
                      <span className="grey-text text-darken-4">
                        Nombre: {item.Nombre}
                        <br />
                        Id: {item.Id}
                        <br />
                        Estadio: {item.Estadio}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
