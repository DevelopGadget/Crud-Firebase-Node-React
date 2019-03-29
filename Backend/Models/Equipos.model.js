import { Joi, celebrate } from 'celebrate';

// Variables para usar despues
const Header = {
    headers: Joi.object().keys({
        id: Joi.string().min(1).required()
    }).unknown()
};

const Body = {
    body: Joi.object().keys({
        Nombre: Joi.string().min(1).max(30).required(),
        Estadio: Joi.string().min(1).max(30).required(),
        UrlEscudo: Joi.string().min(1).max(200).uri().required(),
        UrlEstadio: Joi.string().min(1).max(200).uri().required()
    }).unknown()
};

//Modelo que valido el id de los headers
export const Id = celebrate(Header);

//Modelo que valido un nuevo equipo
export const Team = celebrate(Body);

//Modelo con que valido una modificacion
export const PutTeam = celebrate(Object.assign(Header, Body));

