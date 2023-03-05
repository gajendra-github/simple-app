const express = require('express');
require('dotenv').config();
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

const url = process.env.MONGODB_URL;

(async function mongo() {
    let client;
    try {
        client = await MongoClient.connect(url);
        console.log('Connected to DB');
    } catch (error) {
        console.log(error);
    }

}());

app.get('/', (req, res) => {
    res.send('Hi');
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});

