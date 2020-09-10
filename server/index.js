const express = require("express");
const app = express();

app.use(require("cors")());
app.use(express.json());
// 静态文件托管
app.use('/uploads', express.static(__dirname + "/uploads"));
app.use('/admin', express.static(__dirname + '/admin'))
app.use('/', express.static(__dirname + '/web'))

app.set('secret', 'i2u34y12oi3u4y8')

require("./routes/admin")(app);
require("./routes/web")(app);
require("./db")(app);


app.listen(3000, () => {
    console.log("http://locahost:3000");
});