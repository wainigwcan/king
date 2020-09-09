module.exports = app => {
    const express = require("express");
    const AdminUser = require("../../models/AdminUser");
    const assert = require('http-assert')
    const jwt = require("jsonwebtoken");
    const router = express.Router({
        mergeParams: true
    });

    router.post('/', async (req, res) => {
        const model = await req.Model.create(req.body);
        res.send(model);
    });
    router.put('/:id', async (req, res) => {
        await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send({
            success: true
        });
    });
    router.delete('/:id', async (req, res) => {
        await req.Model.findByIdAndDelete(req.params.id);
        res.send({
            success: true
        });
    });
    router.get("/:id", async (req, res) => {
        const model = await req.Model.findById(req.params.id);
        res.send(model);
    })
    router.get("/", async (req, res) => {
        const queryOtions = {}
        if (req.Model.modelName === "Category") {
            queryOtions.populate = "parent"
        }
        const items = await req.Model.find().setOptions(queryOtions).limit(100);
        res.send(items);
    });
    // 登录校验中间件
    const authMiddleware = require('../../middleware/auth')
    const resourceMiddleware = require('../../middleware/resource')
    app.use("/admin/api/rest/:resource", authMiddleware(), resourceMiddleware(), router);

    // express默认获取不到上传文件，需要借用一个插件 multer
    const multer = require("multer");
    // 文件存储位置 目标地址
    const upload = multer({ dest: __dirname + "/../../uploads" });
    // upload.single('file') 表示接受单个文件上传
    app.post("/admin/api/upload", authMiddleware(), upload.single("file"), async (req, res) => {
        // res.send("hehe");
        const file = req.file;
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file);
    });

    // 用户登录
    app.post("/admin/api/login", async (req, res) => {
        const { username, password } = req.body;

        // 1.根据用户名找用户
        const user = await AdminUser.findOne({ username }).select('+password')
        assert(user, 422, '用户不存在')
        // 2.校验密码
        const isValid = require('bcryptjs').compareSync(password, user.password)
        assert(isValid, 422, '密码错误')
        // 3.返回token
        const token = jwt.sign({ id: user._id }, app.get('secret'))
        res.send({ token })
    });

    // 错误处理函数
    app.use(async (err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })
}