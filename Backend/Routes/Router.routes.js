//Modulo de importaciones
import { Get, Post, Put, Delete } from '../Controllers/Equipo.controller';
import { Team, PutTeam, Id } from '../Models/Equipos.model';
//Hago las rutas y pido la app
export default (app) => {
    app.get('/Get', Get);
    app.post('/Post', Team, Post);
    app.put('/Put', PutTeam, Put);
    app.delete('/Delete', Id, Delete);
}