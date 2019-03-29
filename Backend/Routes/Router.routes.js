//Modulo de importaciones
import { Get, Post } from '../Controllers/Equipo.controller';
import { Team } from '../Models/Equipos.model';
//Hago las rutas y pido la app
export default (app) => {
    app.get('/Get', Get);
    app.post('/Post', Team, Post)
}