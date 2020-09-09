const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Category" }], //可以有多个 类型
    title: { type: String },//标题
    body: { type: String },
}, {
    timestamps: true
});

module.exports = mongoose.model("Article", Schema)