const app = require("express")();

const port = process.env.PORT | 3000;

app.get("/", (req, res) => {
   res.status(200).json({ message: "Hello World" });
})

app.listen(port, () => {
   console.log("listening at 3000");
});

module.exports = app;