const express = require('express');
require('./config/mongo')
const route = require('./config/routes');
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}));

app.use('/public', express.static('public'));

app.use(route)

let port = 1212;
app.listen(port, ()=> console.log(`${port}`))