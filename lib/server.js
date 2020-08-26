const PORT = process.env.PORT || 3000;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const morgan = require('morgan');

const sequelize = require('./sequelize/index');
const { Customer } = require('./sequelize/models/customer.model');

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

    try {
        await sequelize.authenticate();
        const ibmWest = await Customer.findOne({
            where: {
                sacrname: 'IBM West',
            }
        });
        console.log('Customers has been found >>> ');
        console.log(JSON.stringify(ibmWest));
    } catch (error) {
        console.error('error >>> ', error);
        process.exit(1);
    }
});
