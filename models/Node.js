const mongoose = require('mongoose');

const NodeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, 
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
});

module.exports = mongoose.model('Node', NodeSchema);
