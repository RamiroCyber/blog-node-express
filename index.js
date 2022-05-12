const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/connection');
const categoiesController = require('./categories/categoryController');


//VIEW E STATIC
app.set('view engine', 'ejs');
app.use(express.static('public'));

//BODYPARSER
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


//ROTAS
app.get('/', (req, res) => {
    res.render('index')
});

app.use('/', categoiesController);



//DATABASE
connection.authenticate().then(() => {
    console.log('Conectado');
}).catch((error) => {
    console.log(error);
})


app.listen(4000, () => {
    console.log('Servidor iniciado...')
});