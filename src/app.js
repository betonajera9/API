const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes/userRoutes');

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/users', routes);

//Static Files
// app.use(express.static(path.join(__dirname, '../Public')));

//Start server
app.listen(app.get('port'), () => console.log('Server on port ' + app.get('port')));
