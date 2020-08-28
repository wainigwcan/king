module.exports = app => {
    const express = require("express");
    const AdminUser = require("../../models/AdminUser");
    const jwt = require("jsonwebtoken");
    const assert = require("http-assert");
    // 中间件 验证用户是否登录
    const melldewareAuth = require("../../meddleware/auth");
    // 中间件 根据用户传递动态参数 选择指定模型
    const melldewareResource = require("../../meddleware/resource");

    const router = express.Router({
        mergeParams: true
    });
    // 创建
    router.post("/", async (req, res) => {
        const model = await req.Model.create(req.body);
        res.send(model);
    });
    // 拉取
    router.get("/", async (req, res) => {
        const queryOption = {}
        if (req.Model.modeName = "Category") {
            queryOption.populate = "parent"
        }
        const items = await req.Model.find().setOptions(queryOption).limit(10);
        res.send(items);
    });
    // 根据ID拉取
    router.get("/:id", async (req, res) => {
        const model = await req.Model.findById(req.params.id);;
        res.send(model);
    });
    // 根据ID更新
    router.put("/:id", async (req, res) => {
        await req.Model.findByIdAndUpdate(req.params.id, req.body);
        res.send({ success: true });
    });
    // 根据ID删除
    router.delete("/:id", async (req, res) => {
        await req.Model.findByIdAndDelete(req.params.id);
        res.send({ success: true });
    });

    app.use("/admin/api/rest/:resource", melldewareAuth(), melldewareResource(), router);
    // 上传图片
    const multer = require("multer");
    const upload = multer({ dest: __dirname + "/../../uploads" });
    app.use("/admin/api/upload", melldewareAuth(), upload.single("file"), async (req, res) => {
        const file = req.file;
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file);
    });

    //登录
    app.post("/admin/api/login", async (req, res) => {
        const { username, password } = req.body;
        const user = await AdminUser.findOne({ username }).select("+password")
        assert(user, 422, "用户名不存在");
        const isValue = require("bcryptjs").compareSync(password, user.password);
        assert(isValue, 422, "密码错误");
        const token = jwt.sign({ id: user._id }, app.get("secret"));
        res.send({ token });
    })
    // 错误处理
    app.use(async (err, req, res, next) => {
        // 如果没有状态码就报500错误
        res.status(err.statusCode || 500).send({
            message: err.message
        });
    });

}