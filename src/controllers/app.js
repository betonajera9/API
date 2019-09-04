import express from 'express';
import morgan from 'morgan';
import routes from './routes/userRoutes';
import SERVER from './routes/schemas';

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
// app.use('/api/users', routes);

SERVER.applyMiddleware({
  app
});

//Start server
app.listen(app.get('port'), () => console.log('Server on port ' + app.get('port')));
