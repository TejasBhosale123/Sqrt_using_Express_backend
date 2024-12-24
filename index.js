const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

app.get("/find", (req, res) => {
    let n = parseFloat(req.query.number);
    let r = n ** 0.5;
    let ans = "Square Root:" +r.toFixed(2);
    let data = "Number" + n + "-->" + new Date().toString() + '\n';
    fs.appendFile("result.txt", data, (err) => {
        console.log(err);
    });
    res.json({"msg" :ans})

});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});