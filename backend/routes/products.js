const express = require('express');
const { createProduct, getProducts } = require('../controllers/products');

const productRoutes = express.Router();

productRoutes.get('/', getProducts);
productRoutes.post('/', createProduct);

module.exports = productRoutes;