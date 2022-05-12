const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('bem vindo')
});

app.listen(4000, () => {
    console.log('Servidor iniciado...')
});