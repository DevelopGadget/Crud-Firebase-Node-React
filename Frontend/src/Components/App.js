import React, { Component } from "react";
import { Get } from "../Services/Equipos.service";

//Componente principal
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { Load: false, Teams: [] };
  }

  Hola() {
    console.log("Hola Mundo");
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
                      <a className="waves-effect waves-light btn-small red-text text-accent-4">
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
