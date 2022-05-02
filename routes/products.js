var express = require('express');
var router = express.Router();
var Product = require('../models/productModel');


// get All products
router.get('/', function (req, res, next) {
    Product.find((err, data) => {
        if (err) throw err;
        res.send(data);
    })
});

// get a specific product
router.get('/:id', function (req, res, next) {
Product.findById(req.params.id, (err, data) => {
        if (err) throw err;
        res.send(data);
    })
});

module.exports = router;