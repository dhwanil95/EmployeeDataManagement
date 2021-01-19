require('./models/db');

const express = require('express');

var employeeController = require('./controllers/employeeController');

const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const Handlebars = require('handlebars')

var app = express();

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({ extname:'hbs' , defaultLayout:'mainLayout', layoutsDir: __dirname + '/views/layouts/', handlebars: allowInsecurePrototypeAccess(Handlebars) }));
app.set('view engine', 'hbs');

app.listen(3000,() =>{
    console.log('Running on port 3000 !!!')
})

app.use('/employee',employeeController);