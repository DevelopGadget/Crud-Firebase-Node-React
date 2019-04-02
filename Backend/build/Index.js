'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _celebrate = require('celebrate');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _Router = require('./Routes/Router.routes');

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Inicio la app express
// Importaciones de modulos
var app = (0, _express2.default)();

//Selecciono el puerto
app.set('port', process.env.PORT || 3000);

//Hago los uses de la app
app.use((0, _cors2.default)());
app.use((0, _celebrate.errors)());
app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: true }));

//Hago las rutas
(0, _Router2.default)(app);

//Inicio el servidor
app.listen(app.get('port'), function () {
  console.log('Servidor iniciado');
});

//Exporto el modulo
exports.default = app;