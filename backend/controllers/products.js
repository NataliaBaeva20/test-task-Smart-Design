const Product = require('../models/product');

module.exports.createProduct = (req, res) => {
  const { name, description, parameters } = req.body;

  Product.create({ name, description, parameters })
    .then(product => res.send(product))
    .catch(err => {
      if (err.name === 'ValidationError') { 
        res.status(400).send({ message: 'Переданы некорректные данные' }); 
      } else { 
        res.status(500).send({ message: 'Произошла ошибка' }); 
      } 
    });
};

module.exports.getProducts = (req, res) => {
  Product.find(req.query)
    .then((products) => res.send(products))
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
};