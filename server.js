var express = require("express"),
	app = express(),
	bodyparser = require("body-parser"),	
	user = require("./user"),
	port = 3000;

app.use(bodyparser());

var hello = {val: "Hello World"};

app.use("/hello", function(req, res){
	res.send(JSON.stringify(hello));
});

app.post("/user", function(req, res){
	var body = req.body;
	user.create(body);
	return res.send("Ok");
});

app.get("/user", function(req, res){
	var users = user.findAll().then(result => res.send(JSON.stringify(result)));
});

app.listen(port, function(){
	console.log("Server is up on port: " + port);
});
