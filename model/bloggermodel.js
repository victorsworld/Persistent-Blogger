const mongoose = require("mongoose")
const {v4 : uuid} = require("uuid")
const bloggerSchema = {
    _id: { type: String, default: () => uuid() },
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    lastModified : { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
}

const bloggerM = mongoose.model('blogger', bloggerSchema);

module.exports = bloggerM;