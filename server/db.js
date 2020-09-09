module.exports = app => {
    const mongoose = require("mongoose");

    mongoose.connect("mongodb://localhost:27017/hehehe", { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("数据库连接成功");
        });

    require("require-all")(__dirname + "/models")
}