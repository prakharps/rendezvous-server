var mongo = require("mongodb").MongoClient;
var db;

mongo.connect('mongodb://localhost:27017/user', function(err, database){
	if(!err)
		console.log("Mongo connection done");
	else
		console.log("Error in connection to mongodb :" + err);
	db = database;
});


var create = function(data){
	console.log("Saving User: " + JSON.stringify(data));
	db.collection("user").save(data,  function(err, results){
	console.log("Result: " + JSON.stringify(results));
	if(!err)
		return data;
	else{
		console.log("Error in saving user: " + err);
		return err;
	}
	
	});
};


var find = function(name){
	return new Promise((resolve, reject) => {
	 db.collection("user")
		.find()
		.toArray(function(err, results){
			if(err)
				console.log("Error in finding users: " + err);
			resolve( results);
		});
	})
};


module.exports = {
	create: create,
	findAll: find
}




