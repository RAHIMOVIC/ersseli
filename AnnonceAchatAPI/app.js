var express = require('express'),
  app = express(),
  dotenv = require('dotenv').config(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/annonceAchatModel'),//Utiliser plutot use static _directory mais on a fait l'export du module
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Ersseli', { useMongoClient: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/annonceAchatRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('annonce Achat RESTful API server started on: ' + port);