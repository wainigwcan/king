module.exports = app => {
    const mongoose = require("mongoose");

    mongoose.connect("mongodb://localhost:27017/chenghuang", { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
        .then(() => {
            console.log("数据库连接成功");
        });
}