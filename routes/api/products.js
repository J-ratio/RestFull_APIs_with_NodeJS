const express = require('express');
const router = express.Router();

const Product = require('../../models/product');
const { default: mongoose } = require('mongoose');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.post('/', (req, res, next) => {

    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    }) 

    product.save().then( result => {
        console.log(result);
    }).catch(err => { console.log(err) });

    res.status(200).json({
        message: 'Handling POST requests to /products',
        createdProduct: product
    });
});

router.get('/:productId', (req, res, next) => {
    res.status(200).json({
        message: `Handling GET requests to /products for product with id: ${req.params.productId}`
    });
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: `Updating product with id: ${req.params.productId}`
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: `Deleting product with id: ${req.params.productId}`
    });
});


module.exports = router;