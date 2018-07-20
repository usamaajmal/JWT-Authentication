const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const user = require('./routes/users');
const mongoose = require('mongoose');

const PORT = 3000;


 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());
 
 app.use('/user', user);

app.listen(PORT, function(){
   console.log('Server is running on Port',PORT);
});

mongoose.connect('mongodb://root:toor321@ds243441.mlab.com:43441/jwt-authentication').then(
     console.log("DB Connected")
 );