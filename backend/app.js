const express = require('express');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const call = require('./services/call');
global.color = require('./services/color.js');
const app = express();

// SETTINGS 
app.set('port', environment.port);
app.set('view engine', 'ejs');


// MIDDLEWARES
app.use(morgan('dev', {
    skip: function(req, res) {
        return res.statusCode < 400
    }
}));


app.use(session({
	secret: environment.SECRET_SESSION,
	resave: false,
	saveUninitialized: false
}));


app.use(express.json());

// ROUTES
call.routes(app, '/api', './routes/api');
//call.routes(app, '/', './routes/main');

// CRONJOBS
call.files('./cronjobs');

// STATIC FILES
app.use(express.static(path.join(__dirname, '../build')));
// STARTING THE SERVER
app.listen(app.get('port'), () => {
    color.debug("server runing on port", app.get('port'));
});

//