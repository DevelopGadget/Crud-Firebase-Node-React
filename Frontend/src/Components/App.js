import React, { Component } from 'react';

class App extends Component {

  Hola() {
    console.log('Hola Mundo')
  }

  render() {
    return (
      <nav className="navbar-fixed grey darken-4">
        <div className="nav-wrapper">
          <a href='/' className="brand-logo left Titulo">RegeTeam</a>
          <ul className="right">
            <li><a onClick={this.Hola}><i className="material-icons">add</i></a></li>
            <li><a onClick={this.Hola}><i className="material-icons">update</i></a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default App;
