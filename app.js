const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.listen((proccess.env.PORT || 3000), ()=> {
    console.log("listening to port : " + 3000);
})