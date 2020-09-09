const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    name: { type: String },
    icon: { type: String }, // 图标
});

module.exports = mongoose.model("Item", Schema)