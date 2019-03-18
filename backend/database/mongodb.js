const colors = require('colors');
const mongoose = require('mongoose');
const tLink = require('terminal-link');

mongoose.connect(environment.db_url, {useNewUrlParser: true})
.then(db => connected())
.catch(err => error_connecting());

function connected(){
	console.log(("Main local page in: ").gray + ("http://localhost:"+environment.port).green);
	console.log(("DB is connected to: ").gray, (environment.db_url).green);
	console.log(("Mode: ").gray, (	environment.name).yellow);
}

function error_connecting(){
	console.log("=========================================");
	console.error("Failed to connect to mongo server: ", environment.db_url);
	console.error("Probably mongod service is not running");
	console.log("Execute in other console one of the following options");
	console.log("> sudo service mongod restart");
	console.log("> sudo mongod");
	console.log("=========================================");
	
}
module.exports = mongoose;