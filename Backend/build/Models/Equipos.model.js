'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PutTeam = exports.Team = exports.Id = undefined;

var _celebrate = require('celebrate');

// Variables para usar despues
var Header = {
    headers: _celebrate.Joi.object().keys({
        id: _celebrate.Joi.string().min(1).required()
    }).unknown()
};

var Body = {
    body: _celebrate.Joi.object().keys({
        Nombre: _celebrate.Joi.string().min(1).max(30).required(),
        Estadio: _celebrate.Joi.string().min(1).max(30).required(),
        UrlEscudo: _celebrate.Joi.string().min(1).max(200).uri().required(),
        UrlEstadio: _celebrate.Joi.string().min(1).max(200).uri().required()
    }).unknown()
};

//Modelo que valido el id de los headers
var Id = exports.Id = (0, _celebrate.celebrate)(Header);

//Modelo que valido un nuevo equipo
var Team = exports.Team = (0, _celebrate.celebrate)(Body);

//Modelo con que valido una modificacion
var PutTeam = exports.PutTeam = (0, _celebrate.celebrate)(Object.assign(Header, Body));