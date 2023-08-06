const mongoose = require('mongoose');

const SitesSchema = new mongoose.Schema({
    name: String,
    url: String,
    image: String,
    visited: Boolean,
})

module.exports = mongoose.model('Sites', SitesSchema);