const { urlencoded } = require("express");

const express = require("express");
const app = express();

const port = process.env.PORT | 3000;

app.use(express.json());

app.get("/", (req, res) => {
   res.status(200).json({ message: "Hello World" });
})

app.post("/", (req, res) => {
   console.log(req.body);
   res.status(200).json({ ...req.body });
});

app.listen(port, () => {
   console.log("listening at 3000");
});

module.exports = app;