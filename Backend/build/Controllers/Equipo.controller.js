'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Delete = exports.Put = exports.Post = exports.Get = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _Data = require('../Services/Data.firebase');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Funcion para obtener datos
var Get = exports.Get = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.t0 = res.status(200);
                        _context.next = 3;
                        return (0, _Data.FindAll)();

                    case 3:
                        _context.t1 = _context.sent;

                        _context.t0.send.call(_context.t0, _context.t1);

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function Get(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

//Funcion para agregar un nuevo equipo
//Importaciones de modulo
var Post = exports.Post = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.t0 = res.status(200);
                        _context2.next = 3;
                        return (0, _Data.InsertData)(req);

                    case 3:
                        _context2.t1 = _context2.sent;

                        _context2.t0.send.call(_context2.t0, _context2.t1);

                    case 5:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function Post(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

//Funcion para modificar un documento
var Put = exports.Put = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.t0 = res.status(200);
                        _context3.next = 3;
                        return (0, _Data.SetData)(req);

                    case 3:
                        _context3.t1 = _context3.sent;

                        _context3.t0.send.call(_context3.t0, _context3.t1);

                    case 5:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function Put(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

//Funcion para eliminar un documento
var Delete = exports.Delete = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.t0 = res.status(200);
                        _context4.next = 3;
                        return (0, _Data.DeleteData)(req);

                    case 3:
                        _context4.t1 = _context4.sent;

                        _context4.t0.send.call(_context4.t0, _context4.t1);

                    case 5:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined);
    }));

    return function Delete(_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();