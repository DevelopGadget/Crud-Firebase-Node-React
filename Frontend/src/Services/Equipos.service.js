//Metodo para obtener todos los valores
export const Get = () => {
  return new Promise((resolve, reject) => {
    fetch('https://crud-firebase.herokuapp.com/Get', {
      method: 'GET',
      headers: new Headers().append('Content-Type', 'application/json'),
      mode: 'cors'
    })
      .then(res => res.json())
      .then(Docs => resolve(Docs))
      .catch(err => reject(err));
  });
};

//Metodo para eliminar un documento
export const Delete = (id) => {
    var hdr = new Headers();
    hdr.append('Content-Type', 'application/json');
    hdr.append('Id', id);
    return new Promise((resolve, reject) => {
      fetch('https://crud-firebase.herokuapp.com/Delete', {
        method: 'DELETE',
        headers: hdr,
        mode: 'cors'
      })
        .then(res => res.json())
        .then(Docs => resolve(Docs))
        .catch(err => reject(err));
    });
  };