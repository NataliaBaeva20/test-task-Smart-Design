const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { PORT = 3001 } = process.env;

const app = express();

// подключение к серверу mongo
mongoose.connect('mongodb://localhost:27017/mystoredb');

app.use(cors());

app.use(express.json());
app.use('/products', require('./routes/products'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});