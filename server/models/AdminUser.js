const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    username: { type: String },//标题
    password: {
        select: false, //编辑页面密码不要显示
        // $2a$10$U/8omr6JRyOOKSEZvTiLFee7D8qO/0oyQieYpnDa7x3yWQ54FK.4m
        type: String, set(val) {
            return require("bcryptjs").hashSync(val, 10);
        }
    }
});

module.exports = mongoose.model("AdminUser", Schema)