const express = require('express');
const Product = require('../models/product.model.js')
const router = express.Router();

const {
    getProducts,
    getProduct,
    createProduct,
    updatedProduct,
    deleteProduct
} = require('../controllers/product.controller.js');




// Route: GET API,   get all products
router.get('/', getProducts);

// Route: GET API,   get single product
router.get('/:id', getProduct);

// Route: POST API  ,   create products
router.post('/', createProduct);

// Route: UPDATE API,   update products
router.put('/:id', updatedProduct);

// Route: DELETE API,   Delete product
router.delete('/:id', deleteProduct);



module.exports = router;