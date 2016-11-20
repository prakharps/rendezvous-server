var express = require("express"),
	app = express(),
	port = 3000;

var hello = {val: "Hello World"};

app.use("/hello", function(req, res){
	res.send(JSON.stringify(hello));
});

app.listen(port, function(){
	console.log("Server is up on port: " + port);
});
