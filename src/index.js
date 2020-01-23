const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('../src/database/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//repassar para o controller o 'app' pois ele é utilizado em vários lugares
require('./controllers/authController')(app); 

app.listen(3000);