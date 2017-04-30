var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var methodOveride = require('method-override');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(methodOveride('_method'));

app.use(bodyParser.urlencoded({ extended: false }));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(PORT, function(){
	console.log("listenning on http://localhost:" + PORT);
});


