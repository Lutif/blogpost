// jshint esversion:6

//Requiring modules
const express = require ('express');
const bodyParser = require ('body-parser');
const ejs = require ('ejs');

//creating express server
const app = express();


// pointing static folder
app.use(express.static('public'));

//telling express to use bodyParser to parse response body
app.use('view engine','ejs');






//asking server to listen at port 3000
app.listen('3000',function () {
    console.log('server started at port 3000');
})