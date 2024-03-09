const express  = require('express');
const path = require('path');
const router = require('./router');
const app = express();
const port = 3000;



app.use(express.static(path.join(__dirname, '../public'))); 
app.set('view engine', 'pug');
app.set('views', '../views');

app.use('',router);

app.listen(3000)