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

//Funcion para obtener datos
export const Get = (req, res) => {
    //Obtengo los documentos
    Database.collection('Equipos').get().then(snaps => {
        var Lista = [];
        //Recorro los documentos
        snaps.forEach(docs => {
            //agrego a la lista el objecto con su id
            Lista.push(Object.assign({ 'Id': docs.id }, docs.data()));
        });
        //Envio la respuesta
        res.status(200).send(Lista);
    }).catch(err => {
        //envio si ocurre un error
        res.status(400).send(err);
    });
}

//Funcion para agregar un nuevo equipo
export const Post = (req, res) => {
    //Valido si es una url de imagen
    if (Image(req.body.UrlEscudo) && Image(req.body.UrlEstadio)) {
        //Llamo la funcion para agregar
        Database.collection('Equipos').add(req.body).then(value => {
            res.status(200).send('Ok');
        }).catch(err => {
            //envio si ocurre un error
            res.status(400).send(err);
        });
    } else {
        //envio si ocurre un error
        res.status(405).send('No es una imagen');
    }
}