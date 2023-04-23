express = require('express');
router = express.Router();

router.get('/', (req, res ,next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.post('/', (req, res ,next) => {
    res.status(200).json({
        message: 'Handling POST requests to /products'
    });
});

router.get('/:productId', (req, res ,next) => {
    res.status(200).json({
        message: `Handling GET requests to /products for product with id: ${req.params.productId}`
    });
});

router.patch('/:productId', (req, res ,next) => {
    res.status(200).json({
        message: `Updating product with id: ${req.params.productId}`
    });
});

router.delete('/:productId', (req, res ,next) => {
    res.status(200).json({
        message: `Deleting product with id: ${req.params.productId}`
    });
});


module.exports = router;