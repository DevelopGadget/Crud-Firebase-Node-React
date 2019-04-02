'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DeleteData = exports.SetData = exports.InsertData = exports.FindAll = undefined;

var _firebaseAdmin = require('firebase-admin');

var _firebaseAdmin2 = _interopRequireDefault(_firebaseAdmin);

var _isImageUrl = require('is-image-url');

var _isImageUrl2 = _interopRequireDefault(_isImageUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Obtengo la clave del archivo json
//Importaciones de modulo
var Clave = require('./clave.json');

//Funcion para inicializar la app
function InitApp() {
    _firebaseAdmin2.default.initializeApp({
        credential: _firebaseAdmin2.default.credential.cert(Clave),
        databaseURL: 'https://crud-pearson.firebaseio.com'
    });
}

//Llamo para iniciar la app
InitApp();
//Inicio la base de datos
var Database = _firebaseAdmin2.default.firestore();
var Collection = Database.collection('Equipos');

//Funcion para obtener datos
var FindAll = exports.FindAll = function FindAll() {
    //Obtengo los documentos
    return Collection.get().then(function (snaps) {
        var Lista = [];
        //Recorro los documentos
        snaps.forEach(function (docs) {
            //agrego a la lista el objecto con su id
            Lista.push(Object.assign({ 'Id': docs.id }, docs.data()));
        });
        //Envio la respuesta
        return { Message: Lista, Status: 200 };
    }).catch(function (err) {
        //envio si ocurre un error
        return { Message: err, Status: 400 };
    });
};

//Funcion para agregar un nuevo equipo
var InsertData = exports.InsertData = function InsertData(req) {
    //Valido si es una url de imagen
    if ((0, _isImageUrl2.default)(req.body.UrlEscudo) && (0, _isImageUrl2.default)(req.body.UrlEstadio)) {
        //Llamo la funcion para agregar
        return Collection.add(req.body).then(function (value) {
            //Retorno un Ok
            return { Message: 'Ok', Status: 200 };
        }).catch(function (err) {
            //envio si ocurre un error
            return { Message: err, Status: 400 };
        });
    } else {
        //envio si ocurre un error
        return { Message: 'No es una imagen', Status: 406 };
    }
};

//Funcion para modificar un documento
var SetData = exports.SetData = function SetData(req) {
    //Valido si es una url de imagen
    if ((0, _isImageUrl2.default)(req.body.UrlEscudo) && (0, _isImageUrl2.default)(req.body.UrlEstadio)) {
        //Llamo la funcion para modificar
        return Collection.doc(req.headers.id).set(req.body).then(function (snap) {
            //Retorno un Ok
            return { Message: 'Ok', Status: 200 };
        }).catch(function (err) {
            //envio si ocurre un error
            return { Message: err, Status: 400 };
        });
    } else {
        //envio si ocurre un error
        return { Message: 'No es una imagen', Status: 406 };
    }
};

//Funcion para eliminar un documento
var DeleteData = exports.DeleteData = function DeleteData(req) {
    //Llamo la funcion para eliminar
    return Collection.doc(req.headers.id).delete().then(function (value) {
        //Retorno si se elimino
        return { Message: 'Ok', Status: 200 };
    }).catch(function (err) {
        //envio si ocurre un error
        return { Message: err, Status: 400 };
    });
};