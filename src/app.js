const express = require('express');
const app = express();
const port = 3000;
const main = require('./routers/main.js')
const about = require('./routers/about.js')

app.use(express.static('public'));

app.use('/', main);
app.use('/about', about)


app.listen(port, () => {
    console.log('Servidor funcionando en http://localhost:' + port)
})