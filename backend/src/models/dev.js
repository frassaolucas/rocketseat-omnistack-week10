const mongoose = require('mongoose');
const PointsSchema = require('./utils/PointSchema');

const DevSchema = new mongoose.Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {
    type: PointsSchema,
    index: '2dsphere'
  }
});

module.exports = mongoose.model('Dev', DevSchema);