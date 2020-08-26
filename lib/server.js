const CustomerController = require('./api/customers/customer.controller');

const PORT = process.env.PORT || 3000;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const morgan = require('morgan');
const customerRouter = require('./api/customers/customer.routes');

const sequelize = require('./sequelize/index');

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

app.use('/customers', customerRouter);

app.listen(PORT, async () => {
    console.info(`Example app listening on port ${PORT}!`);

    try {
        await sequelize.authenticate();
        console.info(`Connected to database, logging requests...`);
    } catch (error) {
        console.error('error >>> ', error);
        process.exit(1);
    }
});
