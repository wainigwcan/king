const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    name: { type: String },//标题
    items: [{
        url: { type: String },
        image: { type: String }
    }]
});

module.exports = mongoose.model("Ad", Schema)