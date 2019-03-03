const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  value: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

// eslint-disable-next-line no-unused-vars
const Item = (module.exports = mongoose.model('Item', itemSchema));
