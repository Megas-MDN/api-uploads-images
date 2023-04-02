const mongoose = require('mongoose');
const { Schema } = mongoose;

const imgSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  src: {
    type: String,
    require: true,
    unique: true,
  },
});

module.exports = mongoose.model('Images', imgSchema);
