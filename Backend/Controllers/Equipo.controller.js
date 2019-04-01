//Importaciones de modulo
import Firebase from 'firebase-admin';
import Image from 'is-image-url';

//Obtengo la clave del archivo json
var Clave = require('./clave.json');

//Funcion para inicializar la app
function InitApp() {
    Firebase.initializeApp({
        credential: Firebase.credential.cert(Clave),
        databaseURL: 'https://crud-pearson.firebaseio.com'
    });
}

//Llamo para iniciar la app
InitApp();
//Inicio la base de datos
var Database = Firebase.firestore();
var Collection = Database.collection('Equipos');

//Funcion para obtener datos
export const Get = (req, res) => {
    //Obtengo los documentos
    Collection.get().then(snaps => {
        var Lista = [];
        //Recorro los documentos
        snaps.forEach(docs => {
            //agrego a la lista el objecto con su id
            Lista.push(Object.assign({ 'Id': docs.id }, docs.data()));
        });
        //Envio la respuesta
        res.status(200).send({ Message: Lista, Status: 200 });
    }).catch(err => {
        //envio si ocurre un error
        res.status(400).send({ Message: err, Status: 400 });
    });
}

//Funcion para agregar un nuevo equipo
export const Post = (req, res) => {
    //Valido si es una url de imagen
    if (Image(req.body.UrlEscudo) && Image(req.body.UrlEstadio)) {
        //Llamo la funcion para agregar
        Collection.add(req.body).then(value => {
            //Retorno un Ok
            res.status(200).send({ Message: 'Ok', Status: 200 });
        }).catch(err => {
            //envio si ocurre un error
            res.status(400).send({ Message: err, Status: 400 });
        });
    } else {
        //envio si ocurre un error
        res.status(406).send({ Message: 'No es una imagen', Status: 406 });
    }
}

//Funcion para modificar un documento
export const Put = (req, res) => {
    //Valido si es una url de imagen
    if (Image(req.body.UrlEscudo) && Image(req.body.UrlEstadio)) {
        //Llamo la funcion para modificar
        Collection.doc(req.headers.id).set(req.body).then(snap => {
            //Retorno un Ok
            res.status(200).send({ Message: 'Ok', Status: 200 });
        }).catch(err => {
            //envio si ocurre un error
            res.status(400).send({ Message: err, Status: 400 });
        });
    } else {
        //envio si ocurre un error
        res.status(406).send({ Message: 'No es una imagen', Status: 406 });
    }
}

//Funcion para eliminar un documento
export const Delete = (req, res) => {
    //Llamo la funcion para eliminar
    Collection.doc(req.headers.id).delete().then(value => {
        //Retorno si se elimino
        res.status(200).send({ Message: 'Ok', Status: 200 });
    }).catch(err => {
        //envio si ocurre un error
        res.status(400).send({ Message: err, Status: 400 });
    });
}