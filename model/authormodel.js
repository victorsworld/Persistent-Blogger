const mongoose = require("mongoose")
const {v4 : uuid} = require("uuid")

const authorSchema = {
 _id: { type: String, default: () => uuid() },
 name: {type: String, require: true},
 email: {type: String, require: true},
 createdAt: { type: Date, default: Date.now }
}

const author = mongoose.model('author', authorSchema);

module.exports = author;