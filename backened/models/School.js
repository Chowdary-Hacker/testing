// models/School.js

const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
  name: String,
  fees: Number,
  // Add other basic details as needed
});

const School = mongoose.model('School', schoolSchema);

module.exports = School;
