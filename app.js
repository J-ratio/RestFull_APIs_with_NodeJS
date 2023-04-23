express = require('express');
productsRoute = require('./routes/api/products');
ordersRoute = require("./routes/api/order");

const app = express();

app.use('/products', productsRoute);
app.use('/orders', ordersRoute);


app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404;
    next(error);
})

app.use((next, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;