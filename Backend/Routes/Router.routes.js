//Modulo de importaciones
import { Get, Post, Put } from '../Controllers/Equipo.controller';
import { Team, PutTeam } from '../Models/Equipos.model';
//Hago las rutas y pido la app
export default (app) => {
    app.get('/Get', Get);
    app.post('/Post', Team, Post);
    app.put('/Put', PutTeam, Put);
}