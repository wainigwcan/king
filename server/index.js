const express = require("express");
const app = express();


app.use(require("cors")());
app.use(express.json());

app.set("secret", "slkdjfksljdfksdj");

app.use("/uploads", express.static(__dirname + "/uploads"));

require("./routes/admin/index")(app);
require("./pubilc/db")(app);


app.listen(3000, () => {
    console.log("http://localhost:3000");
});