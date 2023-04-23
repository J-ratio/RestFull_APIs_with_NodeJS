express = require('express');
productsRoute = require('./routes/api/products');
ordersRoute = require("./routes/api/order");

const app = express();

app.use('/products', productsRoute);
app.use('/orders', ordersRoute);

module.exports = app;