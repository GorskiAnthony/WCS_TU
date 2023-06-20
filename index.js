const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("hello wold!");
});

module.exports = app;
