const bodyParser = require('body-parser');
const express = require('express');
const productsRoute = require('./routes/api/products');
const ordersRoute = require("./routes/api/order");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origins, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if( req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Method', 'PUT,GET,POST,DELETE,PATCH');
        return res.status(200).json({});
    }
    next();
})

app.use('/products', productsRoute);
app.use('/orders', ordersRoute);


app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;