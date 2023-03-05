const express = require('express');
require('dotenv').config();
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

const url = process.env.MONGODB_URL;

const db_name = "simple-db";



app.get('/', (req, res) => {
    (async function mongo() {
        let client;
        try {
            client = await MongoClient.connect(url);
            console.log('Connected to DB');

            const db = client.db(db_name);

            const response = await db.collection('sessions').insertMany(
                [
                    {
                        "id": 84473,
                        "title": "Secure Programming for the Enterprise"
                    }
                ]
            );
            res.json(response);

        } catch (error) {
            console.log(error);
        }

    }());
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});

