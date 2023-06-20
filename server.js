const app = require("./index");

app.listen(5000, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("server run port 5000");
	}
});
