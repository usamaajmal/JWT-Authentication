const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const user = require('./routes/users');
const mongoose = require('mongoose');


//Port
const PORT = 3000;

//Body-Parser
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());
 
//Routes
 app.use('/user', user);

//Server Run
app.listen(PORT, function(){
   console.log('Server is running on Port',PORT);
});

//Mongo DB Connection from mlab
mongoose.connect('mongodb://root:toor321@ds243441.mlab.com:43441/jwt-authentication').then(
     console.log("DB Connected")
 );
