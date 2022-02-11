const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  description: {
    type: String,
    required: true,
    minlength: 2,
  },
  parameters: {
    manufacturer: {
      type: String,
      required: true,
      minlength: 2,
    },
    system: {
      type: String,
      required: true,
      minlength: 2,
    },
    storage: {
      type: String,
      required: true,
      minlength: 2,
    },
  },
});

module.exports = mongoose.model('product', productSchema);