var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var toDo = require('./routes/ToDo');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/ToDo', toDo);


app.listen(3001);
module.exports = app;