// Importaciones de modulos
import Express from 'express';
import { errors } from 'celebrate';
import Cors from 'cors';
import Rutas from './Routes/Router.routes';

//Inicio la app express
const app = Express();

//Selecciono el puerto
app.set('port', process.env.PORT || 3000);

//Hago los uses de la app
app.use(errors());
app.use(Cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

//Hago las rutas
Rutas(app);

//Inicio el servidor
app.listen(app.get('port'), () => { console.log('Servidor iniciado') });

//Exporto el modulo
export default app;