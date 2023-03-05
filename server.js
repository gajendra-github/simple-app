const express = require('express');
require('dotenv').config();
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/views/')));



app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, 'views', 'index.html'));
    //res.render('index', { title: 'Welcome to ', data: ['1', '2', '3'] });
    res.send("Building App with Node Express Mongo Heroku");
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});