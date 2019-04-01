//Metodo para obtener todos los valores
export const Get = () => {
  return new Promise((resolve, reject) => {
    fetch('https://crud-firebase.herokuapp.com/Get', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors'
    })
      .then(res => res.json())
      .then(Docs => resolve(Docs))
      .catch(err => reject(err));
  });
};

//Metodo para eliminar un documento
export const Delete = (id) => {
  return new Promise((resolve, reject) => {
    fetch('https://crud-firebase.herokuapp.com/Delete', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', 'Id': id },
      mode: 'cors'
    })
      .then(res => res.json())
      .then(Docs => resolve(Docs))
      .catch(err => reject(err));
  });
};

//Metodo para agregar equipo
export const Post = (Team) => {
  return new Promise((resolve, reject) => {
    fetch('https://crud-firebase.herokuapp.com/Post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify({ 'Nombre': Team.Nombre, 'Estadio': Team.Estadio, 'UrlEscudo': Team.UrlEscudo, 'UrlEstadio': Team.UrlEstadio })
    })
      .then(res => res.json())
      .then(Docs => resolve(Docs))
      .catch(err => reject(err));
  });
};