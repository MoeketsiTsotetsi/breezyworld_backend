var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
require('dotenv').config();

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// uri
const uri = process.env.MONGODBCONNECTIONSTRING;

//connecting the database

mongoose.connect(uri, { useNewurlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log("Connected to database successfully")
})
.catch((err) => {
  console.error(err);
});


// routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products',productsRouter);



// port
app.listen(3001 , ()=>{
    console.log('Listening on port 3007');
})

module.exports = app;
