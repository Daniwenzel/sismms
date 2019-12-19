// Core packages
const express = require('express');
const R = require('r-script');

// Favicon
var favicon = require('serve-favicon');
var path = require('path');


// Bootstrap + jQuery + Popper.js
try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

// Rotas
const torres = require('./routes/torresRoute');

// Instância do server express
const app = express();
const port = 8080;

// Mecanismo de visualização
// const pug = require('pug');
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// Rota principal
app.get('/', (req, res) => res.render('dashboard'));

// Deixando os arquivos necessários visíveis para o usuário
app.use(express.static('public'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Definição das demais rotas com sufixo
app.use('/torres', torres);


// Server express aguardando requisições
app.listen(port, () => console.log(`Example app listening on port ${port}!`));