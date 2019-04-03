//Importaciones de modulo
import { FindAll, InsertData, SetData, DeleteData } from '../Services/Data.firebase';

//Funcion para obtener datos
export const Get = async (req, res) => {
    //Obtengo los documentos
    res.status(200).send(await FindAll());
}

//Funcion para agregar un nuevo equipo
export const Post = async (req, res) => {
    //retorno data
    res.status(200).send(await InsertData(req));
}

//Funcion para modificar un documento
export const Put = async (req, res) => {
    //retorno data
    res.status(200).send(await SetData(req));
}

//Funcion para eliminar un documento
export const Delete = async (req, res) => {
    //retorno data
    res.status(200).send(await DeleteData(req));
}