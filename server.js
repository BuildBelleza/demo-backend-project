require('dotenv').config();

const es6Renderer = require('express-es6-template-engine');

const express = require('express');

const server = express();

server.engine('html', es6Renderer);
server.set('views', 'views');
server.set('view engine', 'html');

server.get('/', (req, res) => {
    res.render('index');
});   // this is the home page

const PORT = process.env.PORT || 8080;

server.get('/heartbeat', (req, res) => {
    res.json({ 'is': 'working',
    "status": "good" })
});

server.listen(PORT, () => console.log(`The server is running on port ${PORT}.`));

