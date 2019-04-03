'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Equipo = require('../Controllers/Equipo.controller');

var _Equipos = require('../Models/Equipos.model');

//Hago las rutas y pido la app
//Modulo de importaciones
exports.default = function (app) {
    app.get('/Get', _Equipo.Get);
    app.post('/Post', _Equipos.Team, _Equipo.Post);
    app.put('/Put', _Equipos.PutTeam, _Equipo.Put);
    app.delete('/Delete', _Equipos.Id, _Equipo.Delete);
};