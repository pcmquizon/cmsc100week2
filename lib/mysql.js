// lib/mysql.js

var mysql = require('mysql');

//for connecting to database
//will be required in other modules if connection to database is needed
module.exports = mysql.createConnection({
	host:'localhost',
	user:'cmsc100ef3l',
	password:'cmsc100ef3l',
	database:'cmsc100ef3l'
});