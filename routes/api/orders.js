express = require('express');
router = express.Router();

router.get('/', (req, res ,next) => {
    res.status(200).json({
        message: 'Orders Fetched'
    });
});

router.post('/', (req, res ,next) => {
    res.status(200).json({
        message: 'Orders Updates'
    });
});

router.get('/:orderId', (req, res ,next) => {
    res.status(200).json({
        message: `Order details with order id: ${req.params.orderId}`
    });
});

router.delete('/:productId', (req, res ,next) => {
    res.status(200).json({
        message: `Deleting order with id: ${req.params.orderId}`
    });
});


module.exports = router;