const { Sequelize } = require('sequelize');
const PORT = process.env.PORT || 3000;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const morgan = require('morgan');

//options for cors midddleware
const options = {
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: 'http://localhost:3000',
    preflightContinue: false,
};

const app = express();
app.use([
    cors(options),
    morgan('dev'),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
]);

app.listen(PORT, async () => {
    console.log('Hello from Node Server');
    console.log(`Example app listening on port ${PORT}!`);

    const sequelize = new Sequelize('sacrdbw', 'root', 'password', {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    });

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
