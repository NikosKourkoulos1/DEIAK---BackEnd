const mongoose = require('mongoose');

const PipeSchema = new mongoose.Schema({
  startNode: { type: mongoose.Schema.Types.ObjectId, ref: 'Node', required: true },
  endNode: { type: mongoose.Schema.Types.ObjectId, ref: 'Node', required: true },
  status: { type: String, default: 'active' }, 
  flow: { type: Number, default: 0 }, 
});

module.exports = mongoose.model('Pipe', PipeSchema);
